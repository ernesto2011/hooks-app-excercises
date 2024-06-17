import {memo} from 'react'

export const Small = memo(({counter}) => {
    console.log('Me volvi a renderizar');
  return (
    <small>{counter}</small>
  )
})
