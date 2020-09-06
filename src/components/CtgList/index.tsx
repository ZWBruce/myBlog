import React, { useMemo } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import './index.less'

function CtgList(props: any) {

  const list = useMemo(() => {
    let { ctgList } = props
    if (props.noLimit) {
      return ctgList
    }
    return ctgList.slice(0, 7)
  }, [props])

  const inCtg = useMemo(() => {
    return props.location.pathname === '/catagory'
  }, [props.location.pathname])

  function jump() {
    if (!inCtg) {
      props.history.push('/catagory')
    }
  }

  return <div className="ctg-wrap card-bg">
    <div className="notice mb-10 card-head">
      <span>分类</span><a onClick={jump} style={{ visibility: inCtg ? 'hidden' : 'visible' }}>查看更多</a>
    </div>
    <ul>
      {
        list.map((t: any) => <li className="item-wrap" key={t.id}>
          <span>{t.category_name}</span>
          <span>{t.count}</span>
        </li>)
      }
    </ul>
  </div>
}

export default connect((state, props) => ({ ...state, ...props }))(withRouter(CtgList))