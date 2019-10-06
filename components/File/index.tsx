import React, { PropsWithChildren } from 'react'

import Content from './Content'
import Header from './Header'
import Icon from './Icon'
import Title from './Title'

import './index.css'

interface Props {
  className?: string
}

function File({ className, children }: PropsWithChildren<Props>) {
  return (
    <div className={`File ${className}`}>
      {children}
    </div>
  )
}

File.Content = Content
File.Header = Header
File.Icon = Icon
File.Title = Title

export default File
