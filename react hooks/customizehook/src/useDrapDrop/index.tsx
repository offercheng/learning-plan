import React from 'react'
import useDrapDrop from './useDrapDrop'

import './index.css'

export default function Index() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [style1, dropRef] = useDrapDrop()
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [style2, dropRef2] = useDrapDrop()
  return (
  <div className='index'>
    <div
      className='drop1'
      ref={dropRef}
      style={{ transform: `translate(${style1.x}px, ${style1.y}px)` }}
    >
      drop1
    </div>
    <div
      className='drop2'
      ref={dropRef2}
      style={{ transform: `translate(${style2.x}px, ${style2.y}px)` }}
    >
      drop2
    </div>
    <div
      className='drop3'
    >
      drop3
    </div>
  </div>)
}