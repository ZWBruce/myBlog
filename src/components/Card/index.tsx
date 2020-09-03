import React, { useContext } from 'react'
// @ts-ignore
import { context } from '@/context'
import './index.less'

export default function () {
  const data: any = useContext(context)

  return <div className="card-content card-bg">
    <img src={`${data.host}/files/download?name=1.jpg`} alt="" />
    <span className="name">凉城</span>
    <span>不负初心，方得始终</span>
    <nav className="level">
      <div className="level-item">
        <p className="heading">
          文章
      </p>
        <p className="title">
          6
      </p>
      </div>
      <div className="level-item">
        <p className="heading">
          分类
      </p>
        <p className="title">
          3
      </p>
      </div>
      <div className="level-item">
        <p className="heading">
          标签
      </p>
        <p className="title">
          19
      </p>
      </div>
    </nav>
  </div>
}