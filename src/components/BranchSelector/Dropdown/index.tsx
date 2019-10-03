import React, { FC } from 'react'

import { Branch } from '../'

import Container from '../Container'

export interface Props {
  currentBranch: Branch
  branches?: Branch[]
}

const Dropdown: FC<Props> = ({ branches, currentBranch }) => (
  <div className='BranchSelector-Dropdown'>
    <Container currentBranch={currentBranch} branches={branches} />
  </div>
)

export default Dropdown
