import React, { FC } from 'react'

import CommitterComponent from 'components/Committer'

const Committer: FC = ({ children }) => (
  <div className='Files-Committer'>
    <CommitterComponent>{children}</CommitterComponent>
  </div>
)

export default Committer
