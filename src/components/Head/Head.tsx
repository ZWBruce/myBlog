import React, { ReactChild, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Head.less'

export default function (props: { children: ReactChild }) {
  let links = [{
    text: '主页',
    url: '/index'
  },
  {
    text: '分类',
    url: '/catagory/0'
  },
  {
    text: '标签',
    url: '/tags/0'
  }
  ]

  if (process.env.NODE_ENV === 'development') {
    links.push({
      text: '写文章',
      url: '/write'
    }, {
      text: '图库',
      url: '/pic'
    })
  }

  return <nav className="app-header">
    <div className="app app-inner-header">
      {
        React.Children.map(props.children, child => {
          return <div>{child}</div>
        })
      }
      <div className="links">
        {
          links.map(({ url, text }, ind) => {
            return <NavLink to={url} key={ind} activeClassName="active">{text}</NavLink>
          })
        }
      </div>
    </div>
  </nav>
}