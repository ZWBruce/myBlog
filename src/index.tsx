import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Toast from '@c/toast'
import * as serviceWorker from './serviceWorker';
import { context } from './context'
import * as dayjs from 'dayjs'
import isLeapYear from 'dayjs/plugin/isLeapYear' // 导入插件
import 'dayjs/locale/zh-cn' // 导入本地化语言
import duration from 'dayjs/plugin/duration'
import { Provider } from 'react-redux'
import store from '@/common/global/store'

dayjs.extend(duration)

dayjs.extend(isLeapYear) // 使用插件
dayjs.locale('zh-cn') // 使用本地化语言

const con = document.createElement('div')
con.id = 'cmp-container'
document.body.appendChild(con)

const host = process.env.NODE_ENV === 'development' ? 'http://localhost:8090' : 'http://39.96.31.138'
const globalData = {
  host,
  dayjs,
  showToast(msg: string) {
    const cmp: any = Toast
    cmp.showToast(msg)
  },
  jump(props: any, id: number | string, type: string = 'article') {
    props.history.push(`/${type}${id !== '' ? '/' + id : ''}`)
  }
}

ReactDOM.render(
  <Provider store={store}>
    <context.Provider value={globalData} >
      <App />
    </context.Provider>
    <Toast />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
