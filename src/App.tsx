import React from 'react';
import MarkDown from 'react-markdown'
import Main from './components/main/Main'
import Head from './components/Head/Head'
import Catagory from './components/category/index'
import Tags from './components/tags/index'
import { HashRouter, Route, Redirect } from 'react-router-dom'
import './App.less';

function App() {
  return (
    <HashRouter>

      <Head>
        zw
      </Head>
      <div className='app'>
        <MarkDown source={'# This is a header\n\n**And this is a paragraph**'} />
        <Route path='/index' component={Main} />
        <Route path='/catagory' component={Catagory} />
        <Route path='/tags' component={Tags} />
        <Redirect exact from='/' to='/index' />
      </div>
    </HashRouter>
  );
}

export default App;
