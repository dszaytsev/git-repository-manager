import React, { FC } from 'react'

import Branch from '../Branch'
import Branches from '../Branches'
import HideControl from '../HideControl'
import Separator from '../Separator'

import { Branch as BranchType } from '../'

interface Props {
  currentBranch: BranchType
  branches?: BranchType[]
}

const Container: FC<Props> = ({ branches, currentBranch }) => (
  <div className='BranchSelector-Container'>
    <HideControl />

    <Branch isCurrent {...currentBranch} />

    <Separator />

    <Branches branches={branches} />
  </div>
)

export default Container
