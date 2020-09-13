/* eslint-disable */

import { useState, useEffect, useReducer } from 'react'
import axios from 'axios'

function reducer(state: any, action: any) {
  const { val } = action
  switch (action.type) {
    case 'changeInfo':
      console.log('dispatch change info', val)
      return { ...val }
    default:
      return state
  }
}

export default function useAxios(url: string, initState: any = {}, fn:any = () => {}) {
  const [info, dispatch] = useReducer(reducer, initState)
  useEffect(() => {
    
    let cancel: any = null
    axios.get(url, {
      cancelToken: new axios.CancelToken(c => {
        cancel = c
      })
    }).then((res: any) => {
      res = res.data
      dispatch({
        type: 'changeInfo',
        val: res
      })
      fn({...res})
      console.log('url changed res',url, res)
    })
    return () => {
      cancel()
    }
  }, [url])
  console.log('url changed', info)
  return info
}