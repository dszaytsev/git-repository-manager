import React, { FC } from 'react'

import CommitterComponent from '../../Committer'

const Committer: FC = ({ children }) => (
  <div className='Files-Committer'>
    <CommitterComponent>{children}</CommitterComponent>
  </div>
)

export default Committer
