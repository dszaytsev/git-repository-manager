import React, { FC } from 'react'

const Branch: FC<{ href: string }> = ({ href, children }) => (
  <a className='Link Files-Branch' href={href}>{children}</a>
)

export default Branch
