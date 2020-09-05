import React, { useContext, useEffect } from 'react';
import Main from './components/main/Main'
import Head from './components/Head/Head'
import Catagory from './components/category/index'
import Tags from './components/tags/index'
import Write from './components/write/Write'
import { HashRouter, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import axios from 'axios'
import { context } from '@/context'
import './App.less';

function App(props: any) {
  const ctxt = useContext(context)

  useEffect(() => {
    props.getArticleList(ctxt.host)
    props.getTagsList(ctxt.host)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <HashRouter>

      <Head>
        zw
      </Head>
      <div className='app'>
        <Route path='/index' component={Main} />
        <Route path='/catagory' component={Catagory} />
        <Route path='/tags' component={Tags} />
        <Redirect exact from='/' to='/index' />
        <Route path='/write' component={Write} />
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
    }
  }
)(App);
