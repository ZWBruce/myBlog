import React, { useState, useEffect, useContext } from 'react'
import { context } from '@/context'
import axios from 'axios'
import './index.less'

export default function Gallary() {
  const ctxt = useContext(context)
  const [imgs, setImgs] = useState([])
  useEffect(() => {
    axios.get(`${ctxt.host}/files/ls`).then(({ data }) => {
      setImgs(data.list.map((t: any) => ctxt.host + t.name))
    })
  }, [ctxt.host])

  function copy(str: string) {
    const ipt = document.createElement('input')
    ipt.value = str
    document.body.appendChild(ipt)
    ipt.select()
    document.execCommand('copy')
    document.body.removeChild(ipt)
    ctxt.showToast('拷贝图片地址成功')
  }

  return <div className="gallary-wrap">
    <h1>图库</h1>
    <div className="inner-wrap">
      {
        imgs.map((t: string, ind: number) => <div key={ind} className="img-wrap">
          <img src={t} alt={t} />
          <br />
          <span onClick={() => { copy(t) }}>{t}</span>
        </div>)
      }
    </div>
  </div>
}