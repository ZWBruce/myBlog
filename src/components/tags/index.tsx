import React from 'react'
import Layout from '@c/Layout'
import { connect } from 'react-redux'

function Tags(props: any) {
  return <Layout>
    <div className="ctg-wrap card-bg">
      <div className="notice mb-10">
        标签
      </div>
      <ul>
        {
          props.tagsList.map((t: any) => <li className="item-wrap" key={t.id}>
            <span>{t.tag_name}</span>
            <span>{t.tag_name.length}</span>
          </li>)
        }
      </ul>
    </div>
  </Layout>
}

export default connect(state => ({ ...state }))(Tags)