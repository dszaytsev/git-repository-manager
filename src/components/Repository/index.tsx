import React, { FC } from 'react'

import Header from './Header'
import Tabs from './Tabs'
import Content from './Content'

import './index.css'

interface Props {
  className?: string
}

const Repository: FC<Props> = ({ children, className }) => {
  return (
    <div className='Repository'>
      <Header />

      <Tabs />
      {/* <input className='Repository-search' data-component='Search' placeholder='Поиск' /> */}
      <Content className={className}>
        {children}
      </Content>
    </div>
  )
}

export default Repository
