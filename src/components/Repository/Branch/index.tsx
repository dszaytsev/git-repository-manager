import React, { FC } from 'react'

import Title from '../Title'
import BranchSelector from '../BranchSelector'

interface Props {
  name: string
}

const Branch: FC<Props> = ({ name }) => (
  <div className='Repository-Branch'>
    <Title>{name}</Title>
    <BranchSelector />
  </div>
)

export default Branch
