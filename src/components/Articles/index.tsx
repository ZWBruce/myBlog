import React from 'react'
import Article from '@c/Article'

export default function Aricles(props: any) {
  return <>
    {
      props.list.map((t: any) => {
        return <Article info={t} key={t.id} />
      })
    }
  </>
}
