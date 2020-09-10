import React from 'react'
import Layout from '@c/Layout'
import CtgList from '@c/CtgList'
import { connect } from 'react-redux'

function Category(props: any) {

  return <Layout>
    <CtgList />
  </Layout>
}

export default connect((state, props) => ({ ...state, ...props }))(Category)