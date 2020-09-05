import React, { useContext, useMemo } from 'react'
import { context } from '@/context'
import './index.less'

export default function (props: any) {
  const data: any = useContext(context)

  const img = useMemo(() => {
    let image = props.info.img
    return image ? image : `${data.host}/files/download?name=1.jpg`
  }, [data.host, props.info.img])

  return <div className="article-wrap card-bg">
    <img src={img} alt="" />
    <div className="content-wrap">
      <div className="notice mb-7">
        <span>1天前</span>
        <span>前端</span>
      </div>
      <h1 className="title link">
        {props.info.title}
      </h1>
      <div className="abstract">

      </div>
    </div>
  </div>
}