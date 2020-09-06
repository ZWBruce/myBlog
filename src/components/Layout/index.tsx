import React from 'react'
import { connect } from 'react-redux'
import Card from '@c/Card'
import ArticleList from '@c/ArticleList'
import CtgList from '@/components/CtgList'
import TagList from '@/components/TagList'

function Layout(props: any) {
  return <div className='app main-wrapp'>
    <div className="flex-left">
      <Card />
      <CtgList />
      <TagList />
    </div>
    <div className="flex-center">
      {
        React.Children.map(props.children, (child: any) => <>{child}</>)
      }
    </div>
    <div className="flex-right">
      <ArticleList />
    </div>

  </div>
}

export default connect(state => ({ ...state }))(Layout)