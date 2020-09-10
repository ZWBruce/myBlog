import React, { useContext, useState, useEffect, useCallback } from 'react'
import { context } from '@/context'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import dayjs from 'dayjs'
import './index.less'

function ArticleList(props: any) {
  const data: any = useContext(context)

  const [list, setList] = useState<any[]>([])

  const format = useCallback((n: string | number) => {
    n = +n
    return dayjs(n).format('YYYY-MM-DD HH:mm:ss')
  }, [])

  useEffect(() => {
    setList(props.sortedArticle)
  }, [props.sortedArticle])

  return <div className="list-wrap card-bg">
    <div className="notice mb-10">
      最新文章
    </div>
    <div>
      {
        list.map(t => <div className="item-wrap" key={t.id}>
          <img src={t.img || `${data.host}/files/download?name=1.jpg`} alt={t.title} />
          <div className="item-right">
            <div className="date notice">{format(t.time)}</div>
            <div className="title link" onClick={() => { data.jump(props, t.id) }}>{t.title}</div>
            <div className="tag-wrap">
              {
                t.tags.map((t: any, ind: number) =>
                  <div className="tag notice link" key={ind} onClick={() => { data.jump(props, t.id, 'tags') }}>
                    {t.tag_name}
                  </div>)
              }
            </div>
          </div>
        </div>)
      }
    </div>
  </div>
}

export default connect(state => ({ ...state }))(withRouter(ArticleList))