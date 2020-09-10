import { useContext } from 'react'
import { context } from '@/context'

export default function () {
  const ctxt = useContext(context)
  return ctxt
}