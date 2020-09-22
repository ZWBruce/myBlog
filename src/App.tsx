import React, { useContext, useEffect, useMemo } from 'react';
import Main from '@c/main/Main'
import Head from '@c/Head/Head'
import Catagory from '@c/category/index'
import Tags from '@c/tags/index'
import Write from '@c/write/Write'
import Gallary from '@c/gallary'
import ArticleInfo from '@c/ArticleInfo'
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import axios from 'axios'
import { context } from '@/context'
import './App.less';
import '@/Main.less'

function App(props: any) {
  const ctxt = useContext(context)
  const routes = useMemo(() => {
    return [
      { path: '/index', cmp: Main },
      { path: '/catagory/:id', cmp: Catagory },
      { path: '/tags/:id', cmp: Tags },
      { path: '/write/:id', cmp: Write },
      { path: '/pic', cmp: Gallary },
      { path: '/article/:id', cmp: ArticleInfo }
    ]
  }, [])

  useEffect(() => {
    props.getArticleList(ctxt.host)
    props.getTagsList(ctxt.host)
    props.getCtgList(ctxt.host)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <HashRouter>
      <Head>
        <span></span>
      </Head>
      <div className='app'>
      <Switch>
        {
          routes.map((t: any, ind: number) => <Route path={t.path} component={t.cmp} key={ind} />)
        }
        <Redirect exact from='/write' to='/write/0' />
        <Redirect exact from='/' to='/index' />
        </Switch>
      </div>
    </HashRouter>
  );
}

export default connect(
  (state) => ({ ...state }),
  {
    getArticleList(host: string) {
      return async function (dispatch: any) {
        const { data } = await axios.get(`${host}/articles`)
        dispatch({
          type: 'GET_ARTICLE_LIST',
          val: data
        })
      }
    },
    getTagsList(host: string) {
      return async function (dispatch: any) {
        const { data } = await axios.get(`${host}/tags`)
        dispatch({
          type: 'GET_TAGS_LIST',
          val: data
        })
      }
    },
    getCtgList(host: string) {
      return async function (dispatch: any) {
        const { data } = await axios.get(`${host}/category/count`)
        dispatch({
          type: 'GET_CTG_LIST',
          val: data
        })
      }
    }
  }
)(App);
