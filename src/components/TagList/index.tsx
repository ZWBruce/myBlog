import React, { useContext, useState } from 'react'
import { context } from '@/context'
import './index.less'

export default function () {
  const data: any = useContext(context)

  const [list, setList] = useState([{
    tag: '前端1',
    num: 2,
    id: 0
  },
  {
    tag: '前端2',
    num: 3,
    id: 1
  },
  {
    tag: '前端3',
    num: 4,
    id: 2
  },
  {
    tag: '前端4',
    num: 5,
    id: 3
  }])

  return <div className="tag-wrap card-bg">
    <div className="notice mb-10">
      分类
    </div>
    <ul>
      {
        list.map(t => <li className="item-wrap" key={t.id}>
          <span>{t.tag}</span>
          <span>{t.num}</span>
        </li>)
      }
    </ul>
  </div>
}