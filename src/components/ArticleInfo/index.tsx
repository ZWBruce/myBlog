import React, { useEffect, useContext, useState, useMemo } from 'react'
import './index.less'
import { context } from '@/context'
import Layout from '@c/Layout'
import axios from 'axios'
import MarkDown from 'react-markdown'
import useAxios from '@/common/hooks/useAxios'

function ArticleInfo(props: any) {
  const ctxt = useContext(context)

  const id = useMemo(() => props.match.params.id, [props.match.params.id])
  const info = useAxios(`${ctxt.host}/articles/${id}`, { content: '', title: '', time: 0 })

  const showTitle = useMemo(() => {
    let { content } = info
    return !content.trim().match(/^#\s/)
  }, [info])

  return <Layout>
    <div className="article-info-wrap card-bg">
      <h1 style={{ display: showTitle ? 'block' : 'none' }}>{info.title}</h1>
      <MarkDown source={info.content} />
    </div>
  </Layout>
}

export default ArticleInfo
