import React, { FC } from 'react'

import BranchTitle from '../BranchTitle'

import { Branch as BranchType } from '../'
import Commit from '../Commit'

interface Props extends BranchType {
  isCurrent?: boolean
}

const Branch: FC<Props> = ({ name, href, time, isCurrent }) => {
  const Content = () => (
    <>
      <BranchTitle>{name}</BranchTitle>
      <Commit>{time}</Commit>
    </>
  )

  return isCurrent
    ? <div className='BranchSelector-Branch BranchSelector-Branch_isCurrent'><Content /></div>
    : <a href={href} className='BranchSelector-Branch' ><Content /></a>
}

export default Branch
