import React, { useMemo } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import './index.less'

function TagList(props: any) {
  const inTags = useMemo(() => {
    return props.location.pathname === '/tags/0'
  }, [props.location.pathname])

  function jump(id = 0) {
    if (props.location.pathname === '/tags/' + id) return

    props.history.push('/tags/' + id)
  }

  return <div className="tag-wrap card-bg">
    <div className="notice mb-10 card-head">
      <span>标签</span>
      <a onClick={(e) => { e.preventDefault(); jump() }} href="123" style={{ visibility: inTags ? 'hidden' : 'visible' }}>查看更多</a>
    </div>
    <ul>
      {
        props.tagsList.map((t: any) => <li className="item-wrap" key={t.id}>
          <a onClick={(e) => { e.preventDefault(); jump(t.id) }} href="123">{t.tag_name}</a>
        </li>)
      }
    </ul>
  </div>
}

export default connect(state => ({ ...state }))(withRouter(TagList))