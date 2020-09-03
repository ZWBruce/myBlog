import React, { useContext, useState } from 'react'
import { context } from '@/context'
import './index.less'
import { Divider } from 'antd'

export default function () {
  const data: any = useContext(context)

  const [list, setList] = useState([{
    title: 'http协议分析',
    tag: '前端',
    date: '2020-02-29',
    id: 0
  },
  {
    title: 'http协议分析',
    tag: '前端',
    date: '2020-02-29',
    id: 1
  },
  {
    title: 'http协议分析',
    tag: '前端',
    date: '2020-02-29',
    id: 2
  },
  {
    title: 'http协议分析',
    tag: '前端',
    date: '2020-02-29',
    id: 3
  }])

  return <div className="list-wrap card-bg">
    <div className="notice mb-10">
      最新文章
    </div>
    <div>
      {
        list.map(t => <div className="item-wrap" key={t.id}>
          <img src={`${data.host}/files/download?name=1.jpg`} alt={t.title} />
          <div className="item-right">
            <div className="date notice">{t.date}</div>
            <div className="title link">{t.title}</div>
            <div className="tag notice">{t.tag}</div>
          </div>
        </div>)
      }
    </div>
  </div>
}