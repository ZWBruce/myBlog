/* eslint-disable */

import { useState, useEffect, useReducer } from 'react'
import axios from 'axios'

function reducer(state: any, action: any) {
  const { val } = action
  switch (action.type) {
    case 'changeInfo':
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
    })
    return () => {
      cancel()
    }
  }, [url])
  return info
}