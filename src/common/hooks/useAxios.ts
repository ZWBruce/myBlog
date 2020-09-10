import { useState, useEffect } from 'react'
import axios from 'axios'

export default function useAxios(url: string, initState: any = {}) {
  const [info, setInfo] = useState(initState)
  useEffect(() => {
    let cancel: any = null
    axios.get(url, {
      cancelToken: new axios.CancelToken(c => {
        cancel = c
      })
    }).then((res: any) => {
      res = res.data
      setInfo(res)
    })
    return () => {
      cancel()
    }
  }, [url])

  return info
}