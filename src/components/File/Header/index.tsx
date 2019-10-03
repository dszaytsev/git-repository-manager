import React, { FC } from 'react'

interface Props {
  className?: string
}

const Header: FC<Props> = ({ className, children }) => (
  <div className={`File-Header ${className}`}>
    {children}
  </div>
)

export default Header
