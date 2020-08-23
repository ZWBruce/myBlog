import React, { useReducer, useEffect, useRef, useContext } from 'react'
import { Button, Input } from 'antd'
import axios from 'axios'
import './Write.less'
import MarkDown from 'react-markdown'
import { context } from '../../context'

const { TextArea } = Input

interface Act {
  type: string;
  val?: any
}

const initalSate = { title: '', content: '' }

function reducer(state: any, action: Act) {
  switch (action.type) {
    case 'changeTitle':
      return { ...state, title: action.val }
    case 'changeContent':
      return { ...state, content: action.val }
    default:
      return state
  }
}

export default function () {

  const [state, dispatch] = useReducer(reducer, initalSate)
  // const data = useContext(context)


  function change(e: any, type = 'changeTitle') {
    console.log(e.target.value)
    dispatch({
      type,
      val: e.target.value
    })
  }

  function upload() {
    if (!state.title || !state.title) {

      return
    }
    const url = 'http://localhost:8090/articles/send'
    const fd = new FormData()
    fd.append('title', state.title)
    fd.append('content', state.content)
    axios({
      url,
      method: 'post',
      data: fd
    }).then(res => {
      console.log(res)
    })
  }

  return <div className="write-wrap">
    <div className="flex">
      <Input value={state.title} onChange={(e) => change(e)} placeholder='文章标题' />
      <Button type="primary" onClick={upload}>上传文章</Button>
    </div>
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