import React, {useMemo} from 'react'
import { connect } from 'react-redux'
import Card from '@c/Card'
import ArticleList from '@c/ArticleList'
import CtgList from '@/components/CtgList'
import TagList from '@/components/TagList'
import { withRouter } from 'react-router-dom'

function Layout(props: any) {
  const inArticle = useMemo(() => {
    return props.location.pathname.startsWith('/article/')
  }, [props.location.pathname])
  return <div className='app main-wrapp'>
    <div className="flex-left">
      <Card />
      <CtgList card={true} />
      <TagList />
    </div>
    <div className="flex-center" style={{width: inArticle ? '75%' : '50%'}}>
      {
        React.Children.map(props.children, (child: any) => <>{child}</>)
      }
    </div>
    {
      inArticle ? '' :
      <div className="flex-right">
        <ArticleList />
      </div>
    }
  </div>
}

export default connect(state => ({ ...state }))(withRouter(Layout))