import React, { useContext, useMemo, useCallback } from 'react'
import './index.less'
import { context } from '@/context'
import Layout from '@c/Layout'
import dayjs from 'dayjs'
import MarkDown from 'react-markdown'
import useAxios from '@/common/hooks/useAxios'

function ArticleInfo(props: any) {
  const ctxt = useContext(context)

  const id = useMemo(() => props.match.params.id, [props.match.params.id])
  const info = useAxios(`${ctxt.host}/articles/${id}`, { content: '', title: '', time: 0, tags: [], category: {} })

  const showTitle = useMemo(() => {
    let { content = '' } = info
    return !content.trim().match(/^#\s/)
  }, [info])

  const format = useCallback((n: string | number) => {
    n = +n
    return dayjs(n).format('YYYY-MM-DD HH:mm')
  }, [])

  return <Layout>
    <div className="article-info-wrap card-bg">
      <h1 style={{ display: showTitle ? 'block' : 'none' }}>{info.title}</h1>
      <div className="notice mb-7">
        <span>{format(info.time)}</span>
        <span onClick={() => { ctxt.jump(props, info.category && info.category.id, 'catagory') }} className="link">{info.category && info.category.category_name}</span>
      </div>
      <MarkDown source={info.content} />
    </div>
  </Layout>
}

export default ArticleInfo
