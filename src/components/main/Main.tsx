import React from 'react'
import { connect } from 'react-redux'
import Articles from '@c/Articles'
import Layout from '@c/Layout'
import { useGetCtxt } from '@/common/hooks'

function Main() {
  const ctxt = useGetCtxt()

  return <Layout>
    <Articles url={`${ctxt.host}/articles/list`} />
  </Layout>
}

export default connect(state => ({ ...state }))(Main)