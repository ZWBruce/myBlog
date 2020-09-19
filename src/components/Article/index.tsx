import React, { useContext, useMemo, useCallback } from 'react'
import { context } from '@/context'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import dayjs from 'dayjs'
import './index.less'

function Article(props: any) {
  const data: any = useContext(context)
  const isDev: boolean = process.env.NODE_ENV === 'development'
  const img = useMemo(() => {
    let image = props.info.img
    return image ? image : `${data.host}/files/download?name=1.jpg`
  }, [data.host, props.info.img])

  const cata = useMemo(() => {
    return props.info.category
  }, [props.info])

  const delAction = useCallback(
    () => {
      const url = `${data.host}/articles/delete/${props.info.id}`
      axios.get(url).then((res) => {
        console.log(res.data)
      })
    },
    [data.host, props.info.id],
  )

  const format = useCallback((n: string | number) => {
    n = +n
    return dayjs(n).format('YYYY-MM-DD HH:mm')
  }, [])

  return <div className="article-wrap card-bg">
    <img src={img} alt="" />
    <div className="content-wrap">
      <div className="notice mb-7">
        <span>{format(props.info.time)}</span>
        <span onClick={() => { data.jump(props, cata && cata.id, 'catagory') }} className="link">{cata && cata.category_name}</span>
        {
          isDev ? 
          <>
            <span className="link" onClick={() => {data.jump(props, props.info.id, 'write')}}>编辑{props.info.id}</span>
            <span className="link" onClick={() => {delAction()}}>删除</span>
          </>
          :''
        }
        
      </div>
      <h1 className="title link" onClick={() => { data.jump(props, props.info.id) }}>
        {props.info.title}
      </h1>
    </div>
  </div>
}

export default withRouter(Article)