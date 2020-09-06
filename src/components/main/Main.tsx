import React from 'react'
import { connect } from 'react-redux'
import Articles from '@c/Articles'
import Layout from '@c/Layout'

function Main(props: any) {
  return <Layout>
    <Articles list={props.articleList} />
  </Layout>
}

export default connect(state => ({ ...state }))(Main)