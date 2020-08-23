import React from 'react';
import Main from './components/main/Main'
import Head from './components/Head/Head'
import Catagory from './components/category/index'
import Tags from './components/tags/index'
import Write from './components/write/Write'
import { HashRouter, Route, Redirect } from 'react-router-dom'
import './App.less';

function App() {
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

export default App;
