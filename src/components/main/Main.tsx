import React, { useCallback, useMemo, useReducer, useEffect, useRef } from 'react'
import { Button } from 'antd'
import axios from 'axios'
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

export default function () {
  const cb = useCallback(() => {
    console.log('use callback')
  }, [])

  const val = useMemo(() => {
    console.log('in use memo')
    return '三只松鼠'
  }, [])
  console.log({ val, cb })

  const imgRef = useRef(null)

  const [state, dispatch1] = useReducer(reducer, initalSate)


  useEffect(() => {
    // const timer: any = setInterval(() => {
    //   console.log(state)
    //   if (state.count > 10) {
    //     clearInterval(timer)
    //     return
    //   }
    //   dispatch1({ type: 'add' })
    // }, 1000)

    // return () => {
    //   clearInterval(timer)
    // }
    console.log(state)
  }, [state])

  function upload() {
    const imgDom = imgRef.current as unknown
    const images: any = (imgDom as HTMLInputElement).files
    const fd = new FormData()
    fd.append('image', images[0])
    fd.append('msg', 'abcd')
    axios(
      {
        url: 'http://localhost:8090/upload',
        method: 'post',
        data: fd
      }
    ).then(res => {
      console.log(res)
    })
    console.log((images as any[])[0])
  }

  return <div onClick={cb} className="main-wrapp">
    {val}main comp {state.count}
    <input type="file" ref={imgRef} />
    <Button type="primary" onClick={upload}>add</Button>
  </div>
}