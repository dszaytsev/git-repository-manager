import React, { FC } from 'react'

interface Props {
  className?: string
}

const Content: FC<Props> = ({ children, className }) => (
  <div className={`Repository-content ${className}`}>
    {children}
  </div>
)

export default Content
