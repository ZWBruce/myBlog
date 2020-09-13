import React, { useMemo } from 'react'
import Layout from '@c/Layout'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { useGetParam, useAxios, useGetCtxt } from '@/common/hooks'
import Articles from '@c/Articles'

function Tags(props: any) {
  const id = useGetParam(props) || 0
  
  const ctxt = useGetCtxt()
  const { list } = useAxios(`${ctxt.host}/tags/articles/${id}`, {list: []})
  function jump(id = 0) {
    if (props.location.pathname === '/tags/' + id) return

    props.history.push('/tags/' + id)
  }

  const curTag = useMemo(() => {
    let tag = props.tagsList.filter((t: any) => +t.id === +id)
    return tag[0]
  }, [id, props.tagsList])

  return <Layout>
    <div className="ctg-wrap card-bg">
      {
        curTag ?
          <div>当前位置: <span className="link" onClick={() => { props.history.push('/tags/0') }}>标签</span> / {curTag.tag_name}</div>
          :
          <>
            <div className="notice mb-10">
              标签
            </div>
            <ul>
              {
                props.tagsList.map((t: any) => <li className="item-wrap"
                  key={t.id} onClick={() => { jump(t.id) }}
                >
                  <span>{t.tag_name}</span>
                  <span>{t.articles.length}</span>
                </li>)
              }
            </ul>
          </>
      }

      {
        id && list && list.length ? <Articles url={`${ctxt.host}/tags/articles/${id}`} /> : ''
      }
    </div>
  </Layout>
}

export default connect(state => ({ ...state }))(withRouter(Tags))