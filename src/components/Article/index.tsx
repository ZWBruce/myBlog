import React, { useContext, useMemo, useEffect } from 'react'
import { context } from '@/context'
import { withRouter } from 'react-router-dom'
import './index.less'

function Article(props: any) {
  const data: any = useContext(context)

  const img = useMemo(() => {
    let image = props.info.img
    return image ? image : `${data.host}/files/download?name=1.jpg`
  }, [data.host, props.info.img])

  const cata = useMemo(() => {
    console.log('article item props.info', props.info)
    return props.info.category
  }, [props.info])

  return <div className="article-wrap card-bg">
    <img src={img} alt="" />
    <div className="content-wrap">
      <div className="notice mb-7">
        <span>1天前</span>
        <span onClick={() => { data.jump(props, cata && cata.id, 'catagory') }} className="link">{cata && cata.category_name}</span>
      </div>
      <h1 className="title link" onClick={() => { data.jump(props, props.info.id) }}>
        {props.info.title}
      </h1>
    </div>
  </div>
}

export default withRouter(Article)