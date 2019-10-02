import React, { FC } from 'react'

import './index.css'

interface Props {
  href?: string
}

const Link: FC<Props> = ({ href, children }) => (
  <a className='Link' href={href}>{children}</a>
)

export default Link
