import React, { ReactChild, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Head.less'

export default function (props: { children: ReactChild }) {
  const links = [{
    text: '主页',
    url: '/index'
  },
  {
    text: '淘宝',
    url: '/catagory'
  },
  {
    text: '字节跳动',
    url: '/tags'
  }
  ]

  const [active, setActive] = useState(0)
  return <nav className="app-header">
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
  </nav>
}