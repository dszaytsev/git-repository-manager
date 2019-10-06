import React, { FC } from 'react'
import { Link } from 'react-router-dom'

const Item: FC<{ path: string }> = ({ children, path }) => (
  <Link to={path} className='Navigation-Item' >
    {children}
  </Link>
)

export default Item
