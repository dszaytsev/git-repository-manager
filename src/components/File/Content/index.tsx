import React, { FC } from 'react'

interface Props {
  className?: string
}

const Content: FC<Props> = ({ className, children }) => (
  <div className={`File-Content ${className}`}>
    {children}
  </div>
)

export default Content
