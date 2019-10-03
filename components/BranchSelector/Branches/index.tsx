import React, { FC } from 'react'

import Branch from '../Branch'

import { Branch as BranchType } from '../'

interface Props {
  branches?: BranchType[]
}

const Branches: FC<Props> = ({ branches = [] }) => (
  <div className='BranchSelector-Branches'>
    {branches.map(branch => <Branch key={branch.name} {...branch} />)}
  </div>
)

export default Branches
