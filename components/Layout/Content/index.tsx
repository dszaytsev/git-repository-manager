import React, { FC } from 'react'

import Container from '../Container'

const Content: FC = ({ children }) => (
  <div className='Layout-Content'>
    <Container>
      {children}
    </Container>
  </div>
)

export default Content
