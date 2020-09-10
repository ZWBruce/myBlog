import React, { useContext } from 'react'
import { context } from '@/context'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import './index.less'
import dayjs from 'dayjs'

function Card(props: any) {
  const data: any = useContext(context)
  let x = dayjs()
  let y = dayjs(1598195948672)

  console.log('dayjs', dayjs.duration(x.diff(y)))

  return <div className="card-content card-bg">
    <img src={`${data.host}/files/download?name=1.jpg`} alt="" />
    <span className="name">凉城</span>
    <span>不负初心，方得始终</span>
    <nav className="level">
      <div className="level-item link" onClick={() => { data.jump(props, '', 'index') }}>
        <p className="heading">
          文章
        </p>
        <p className="title">
          {props.articleCount}
        </p>
      </div>
      <div className="level-item link" onClick={() => { data.jump(props, 0, 'catagory') }}>
        <p className="heading">
          分类
        </p>
        <p className="title">
          {props.ctgCount}
        </p>
      </div>
      <div className="level-item link" onClick={() => { data.jump(props, 0, 'tags') }}>
        <p className="heading">
          标签
        </p>
        <p className="title">
          {props.tagsCount}
        </p>
      </div>

    </nav>
  </div>
}

export default connect(state => ({ ...state }))(withRouter(Card))