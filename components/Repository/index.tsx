import React, { FC } from 'react'
// import { withRouter, RouteComponentProps } from 'react-router'

import Header from './Header'
import Tabs from './Tabs'
import Content from './Content'

import './index.css'

interface Params {
  repository: string
}

interface Props { // extends RouteComponentProps<Params>
  className?: string
}

// const Repository: FC<Props> = ({ children, className, match: { params } }) => {
const Repository: FC<Props> = ({ children, className }) => {
  return (
    <div className='Repository'>
      {/* <Header repository={params.repository} /> */}
      <Header repository='Repository' />

      <Tabs />
      {/* <input className='Repository-search' data-component='Search' placeholder='Поиск' /> */}
      <Content className={className}>
        {children}
      </Content>
    </div>
  )
}

export default Repository
// export default withRouter(Repository)
