import { useMemo } from 'react'

export default function (props: any, key: string = 'id') {
  const data = useMemo(() => props.match.params[key], [key, props.match.params])
  return data
}