import React, { FC } from 'react'

import Header from './Header'
import Content from './Container'
import Footer from './Footer'

import './index.css'

const Layout: FC = ({ children }) => (
  <div className='Layout'>
    <Header />
    <Content>{children}</Content>
    <Footer />
  </div>
)

export default Layout
