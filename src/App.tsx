import React, { useContext, useEffect, useMemo } from 'react';
import Main from '@c/main/Main'
import Head from '@c/Head/Head'
import Catagory from '@c/category/index'
import Tags from '@c/tags/index'
import Write from '@c/write/Write'
import Gallary from '@c/gallary'
import { HashRouter, Route, Redirect } from 'react-router-dom'
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
      { path: '/catagory', cmp: Catagory },
      { path: '/tags', cmp: Tags },
      { path: '/write', cmp: Write },
      { path: '/pic', cmp: Gallary }
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
        {
          routes.map((t: any, ind: number) => <Route path={t.path} component={t.cmp} key={ind} />)
        }
        <Redirect exact from='/' to='/index' />
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
