import React, { FC } from 'react'

import Branch from '../Branch'

import { Branch as BranchType } from '../'

interface Props {
  branches?: BranchType[]
}

const Branches: FC<Props> = ({ branches = [] }) => (
  <div className='BranchSelector-Branches'>
    {/* todo change key to branch  */}
    {branches.map((branch, index) => <Branch key={index} {...branch} />)}
  </div>
)

export default Branches
