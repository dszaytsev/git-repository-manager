import React, { FC } from 'react'
import Link from 'next/link'

const Item: FC<{ path: string }> = ({ children, path }) => (
  <Link href={path}>
    <a className='Navigation-Item'>
      {children}
    </a>
  </Link>
)

export default Item
