import React, { useContext } from 'react'
import { context } from '@/context'
import './index.less'

export default function () {
  const data: any = useContext(context)

  return <div className="article-wrap card-bg">
    <img src={`${data.host}/files/download?name=1.jpg`} alt="" />
    <div className="content-wrap">
      <div className="notice mb-7">
        <span>1天前</span>
        <span>前端</span>
      </div>
      <h1 className="title link">
        http协议分析
      </h1>
      <div className="abstract">
        Web是建立在HTTP(HyperText Transfer Protocol，超文本传输协议)上通信的。本文是一篇HTTP协议学习笔记，补充一下HTTP协议的基础，这对于理解Ajax以及前后端交互过程绝对是非常有帮助的，本文章主要讲述Web基础和简单的HTTP协议……
      </div>
    </div>
  </div>
}