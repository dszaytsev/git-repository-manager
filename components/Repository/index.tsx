import React, { FC } from 'react'
import { useRouter } from 'next/router'

import Header from './Header'
import Tabs from './Tabs'
import Content from './Content'

import './index.css'

interface Params {
  repository: string
}

interface Props {
  className?: string
}

const Repository: FC<Props> = ({ children, className }) => {
  const { query } = useRouter()
  const repository = query.repository as string

  return (
    <div className='Repository'>
      <Header repository={repository} />

      <Tabs />
      <Content className={className}>
        {children}
      </Content>
    </div>
  )
}

export default Repository
