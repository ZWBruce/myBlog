import React, { useState, useEffect } from 'react'
import Article from '@c/Article'
import { Pagination } from 'antd'
import { useAxios } from '@/common/hooks'

export default function Aricles(props: any) {
  const [url, setUrl] = useState<string>(props.url)

  useEffect(() => {
    setUrl(props.url)
  }, [props.url])


  let { list, count } = useAxios(url, { list: [], count: 0 })

  function onChange(page: number) {
    setUrl((url: string) => `${url}?page=${page}`)
  }
  
  return <>
    {
      list.map((t: any) => {
        return <Article info={t} key={t.id} />
      })
    }
    <div className="pag-wraper">
      <Pagination
        defaultPageSize={10}
        onChange={onChange}
        defaultCurrent={1}
        total={count || 11}
      />
    </div>
  </>
}
