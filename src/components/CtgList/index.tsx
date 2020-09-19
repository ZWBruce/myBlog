import React, { useMemo } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { useGetParam, useAxios, useGetCtxt } from '@/common/hooks'
import Articles from '@c/Articles'
import './index.less'

function CtgList(props: any) {
  const id = useGetParam(props) || 0
  const ctxt = useGetCtxt()
  let { list: articleList, count } = useAxios(`${ctxt.host}/category/articles/${id}`)
  const list = useMemo(() => {
    let { ctgList } = props
    if (props.noLimit) {
      return ctgList
    }
    return ctgList.slice(0, 7)
  }, [props])

  const inCtg = useMemo(() => {
    return props.location.pathname === '/catagory/0'
  }, [props.location.pathname])

  function jump(id: number = 0) {
    if (props.location.pathname !== '/catagory/' + id) {
      props.history.push('/catagory/' + id)
    }
  }

  const curCategory = useMemo(() => {
    const cur = list.filter((t: any) => +t.id === +id)
    return cur[0] || {}
  }, [id, list])
  
  return <div className="ctg-wrap card-bg">
    {
      props.card || !curCategory.category_name ?
        <>
          <div className="notice mb-10 card-head">
            <span>分类</span><a onClick={(e) => { e.preventDefault(); jump() }} href="890" style={{ visibility: inCtg ? 'hidden' : 'visible' }}>查看更多</a>
          </div>
          <ul>
            {
              list.map((t: any) => <li className="item-wrap" key={t.id} onClick={() => jump(t.id)}>
                <span>{t.category_name}</span>
                <span>{t.count}</span>
              </li>)
            }
          </ul>
        </>
        :
        <>
          <div>当前位置: <span className="link" onClick={() => { props.history.push('/catagory/0') }}>分类</span> / {curCategory.category_name}</div>
          <Articles url={`${ctxt.host}/category/articles/${id}`} />
        </>

    }

  </div>
}

export default connect((state, props) => ({ ...state, ...props }))(withRouter(CtgList))