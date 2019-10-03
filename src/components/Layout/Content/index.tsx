import React, { FC } from 'react'

import Navigation from 'components/Navigation'

import Container from '../Container'

const Content: FC = ({ children }) => (
  <div className='Layout-Content'>
    <Container>
      <Navigation />

      {children}
    </Container>
  </div>
)

export default Content
