import React, { FC } from 'react'
import Container from './Container'

import './index.css'

interface Props {
  containerClass?: string
}

const Header: FC<Props> = ({ containerClass }) => (
  <div className='Header'>
    <Container className={containerClass} />
  </div>
)

export default Header
