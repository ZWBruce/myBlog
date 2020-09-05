import React, { useCallback, useMemo, useReducer, useEffect, useRef, useContext } from 'react'
import { Button } from 'antd'
import axios from 'axios'
import { connect } from 'react-redux'
import { context } from '@/context'
import Card from '@c/Card'
import Article from '@c/Article'
import ArticleList from '@c/ArticleList'
import TagList from '@c/TagList'
import './Main.less'

interface Act {
  type: string;
  val?: any
}

const initalSate = { count: 0 }

function reducer(state: any, action: Act) {
  const { count } = state
  switch (action.type) {
    case 'add':
      return { count: count + 1 }
    case 'desc':
      return { count: count - 1 }
    default:
      return state
  }
}

function Main(props: any) {
  const data: any = useContext(context)

  const imgRef = useRef(null)

  const [state, dispatch1] = useReducer(reducer, initalSate)


  useEffect(() => {

    axios(
      {
        url: `${data.host}/articles/list`,
        method: 'get'
      }
    ).then(res => {
      console.log(res)
    })
  }, [data.host])

  function upload() {
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
    })
  }


  // function upload() {

  // }

  return <div className="main-wrapp">
    <div className="flex-left">
      <Card />
      <TagList />
    </div>
    <div className="flex-center">
      {
        props.articleList.map((t: any) => {
          return <Article info={t} key={t.id} />
        })
      }

    </div>
    <div className="flex-right">
      <ArticleList />
    </div>
    main comp {state.count}
    <input type="file" ref={imgRef} />

    <Button type="primary" onClick={upload}>add</Button>
  </div>
}

export default connect(state => ({ ...state }))(Main)