import React, { useState, useReducer, useEffect, useCallback, useRef, useContext } from 'react'
import { Button, Input, Select, Tag } from 'antd'
import axios from 'axios'
import './Write.less'
import MarkDown from 'react-markdown'
import { context } from '@/context'
import { connect } from 'react-redux'

const { Option } = Select

const { TextArea } = Input

interface Act {
  type: string;
  val?: any
}

const initalSate = { title: '', content: '', tags: [], img: '', ctg: {} }

function reducer(state: any, action: Act) {
  let { tags } = state
  const { val } = action
  switch (action.type) {
    case 'changeTitle':
      return { ...state, title: val }
    case 'changeContent':
      return { ...state, content: val }
    case 'ADD_TAG':
      tags.every((t: any) => t.id !== val.id) && tags.push(val)
      return {
        ...state,
        tags: [...tags]
      }
    case 'REMOVE_TAG':
      tags = tags.filter((t: any) => t.id !== val)
      return {
        ...state,
        tags: [...tags]
      }
    case 'CHANGE_IMG':
      return {
        ...state,
        img: val
      }
    case 'GET_CTG':
      return {
        ...state,
        ctg: val
      }
    case 'REMOVE_CTG':
      return {
        ...state,
        ctg: ''
      }
    default:
      return state
  }
}

function Write(props: any) {

  const [state, dispatch] = useReducer(reducer, initalSate)
  const [tag, setTag] = useState('')
  const [ctg, setCtg] = useState('')
  const [img, setImg] = useState('')
  const data = useContext(context)
  const imgRef = useRef(null)

  function change(e: any, type = 'changeTitle') {
    dispatch({
      type,
      val: e.target.value
    })
  }



  function uploadImg() {
    const imgDom = imgRef.current as unknown
    const images: any = (imgDom as HTMLInputElement).files
    const fd = new FormData()
    fd.append('image', images[0])
    fd.append('msg', 'abcd')
    axios(
      {
        url: `${data.host}/upload`,
        method: 'post',
        data: fd
      }
    ).then(res => {
      console.log(res)
      const url = data.host + res.data.data
      dispatch({
        type: 'CHANGE_IMG',
        val: url
      })
    })
  }

  function addTag(type = 'tags') {
    if ((type === 'tags' && !tag) || (type === 'category' && !ctg)) return
    const url = `${data.host}/${type}/add`
    const fd = new FormData()
    if (type === 'tags') fd.append('name', tag)
    if (type === 'category') fd.append('name', ctg)
    axios({
      url,
      method: 'post',
      data: fd
    }).then(({ data }) => {
      console.log(data)
      if (type === 'tags') {
        props.add_tag(data)
      }
      if (type === 'category') {
        props.add_ctg(data)
      }
    })
  }

  function upload() {
    if (!state.title || !state.content) {

      return
    }
    const url = `${data.host}/articles/send`
    const fd = new FormData()
    fd.append('title', state.title)
    fd.append('content', state.content)
    const tagId = state.tags.map((t: any) => t.id)
    fd.append('tag_id', tagId.join())
    fd.append('img', state.img)
    fd.append('category', state.ctg.id)
    axios({
      url,
      method: 'post',
      data: fd
    }).then(res => {
      console.log(res)
    })
  }

  const onChange = useCallback((value) => {
    let tag_name = value.split('$_$')[0]
    const id = value.split('$_$')[1]
    dispatch({
      type: 'ADD_TAG',
      val: {
        tag_name,
        id
      }
    })
  }, [])

  const onChange1 = useCallback((value) => {
    let tag_name = value.split('$_$')[0]
    dispatch({
      type: 'GET_CTG',
      val: {
        name: tag_name,
        id: value.split('$_$')[1]
      }
    })
  }, [])

  function closeTag(id: number) {
    dispatch({
      type: 'REMOVE_TAG',
      val: id
    })
  }

  function closeCtg() {
    dispatch({
      type: 'REMOVE_CTG',
    })
  }

  const onBlur = useCallback(() => {
    console.log('blur')
  }, [])

  const onSearch = useCallback((val) => {
    console.log('search', val)
  }, [])

  return <div className="write-wrap">
    <div className="flex">
      <Input value={state.title} onChange={(e) => change(e)} placeholder='文章标题' />
      <Button type="primary" onClick={upload}>上传文章</Button>
    </div>
    <div className="flex">
      <Input type="text" value={tag} onChange={(e) => { setTag(e.target.value) }} />
      <Button type="primary" onClick={() => { addTag() }}>新增标签</Button>
    </div>
    <div className="flex">
      <Input type="text" value={ctg} onChange={(e) => { setCtg(e.target.value) }} />
      <Button type="primary" onClick={() => { addTag('category') }}>新增分类</Button>
    </div>
    <div className="flex">
      <Input type="file" ref={imgRef} />
      <Button type="primary" onClick={uploadImg}>上传图片</Button>
    </div>
    <div className="flex">
      <Input type="text" value={img} onChange={(e) => { setImg(e.target.value) }} />
      <Button type="primary" onClick={() => {
        dispatch({
          type: 'CHANGE_IMG',
          val: img
        })
      }}>使用已有图片</Button>
    </div>
    <img src={state.img} alt="封面图片" style={{ height: state.img ? '100px' : '0px', width: 'auto', visibility: state.img ? 'visible' : 'hidden', display: 'block' }} />
    <Select
      showSearch
      style={{ width: 200 }}
      placeholder="Select a tag"
      optionFilterProp="children"
      onChange={onChange}
      onBlur={onBlur}
      onSearch={onSearch}
      filterOption={(input, option) =>
        (option as any).children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
    >
      {
        props.tagsList.map((t: any) => <Option value={`${t.tag_name}$_$${t.id}`} key={t.id}>{t.tag_name}</Option>)
      }
    </Select>
    {
      state.tags.map((t: any) => <Tag color="#2db7f5" key={t.id} closable onClose={() => { closeTag(t.id) }}>
        {t.tag_name}
      </Tag>)
    }
    <br />
    <Select
      showSearch
      style={{ width: 200 }}
      placeholder="Select a 分类"
      optionFilterProp="children"
      onChange={onChange1}
      onBlur={onBlur}
      onSearch={onSearch}
      filterOption={(input, option) =>
        (option as any).children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
    >
      {
        props.ctgList.map((t: any) => <Option value={`${t.category_name}$_$${t.id}`} key={t.id}>{t.category_name}</Option>)
      }
    </Select>
    {
      state.ctg.name ?
        <Tag color="#2db7f5" closable onClose={() => { closeCtg() }}>
          {state.ctg.name}
        </Tag> : ''
    }
    <br />
    <div className="flex content">
      <div className="inner-content">
        <TextArea value={state.content} onChange={(e) => change(e, 'changeContent')} placeholder='文章内容' />
      </div>
      <div className="inner-content">
        <MarkDown source={state.content} />
      </div>
    </div>

  </div>
}

export default connect(state => ({ ...state }), {
  add_tag(val: any) {
    return { type: 'ADD_TAG', val }
  },
  add_ctg(val: any) {
    return { type: 'ADD_CTG', val }
  }
})(Write)