import React, { FC } from 'react'

import Title from './Title'
import Dropdown from './Dropdown'

import './index.css'

export interface Branch {
  href: string
  name: string
  time: string
}

const CURRENT_BRANCH_STUB: Branch = {
  href: '#', name: 'Trunk', time: 'Last commit 4s ago'
}

const BRANCHES_STUB: Branch[] = [
  { href: '#', name: 'users/rudksoy/DEVTOOLS-43865', time: 'Last commit 1 min ago' },
  { href: '#', name: 'users/rudksoy/DEVTOOLS-43865', time: 'Last commit 1 min ago' },
  { href: '#', name: 'users/rudksoy/DEVTOOLS-43865', time: 'Last commit 1 min ago' },
  { href: '#', name: 'users/rudksoy/DEVTOOLS-43865', time: 'Last commit 1 min ago' },
  { href: '#', name: 'users/rudksoy/DEVTOOLS-43865', time: 'Last commit 1 min ago' },
  { href: '#', name: 'users/rudksoy/DEVTOOLS-43865', time: 'Last commit 1 min ago' },
  { href: '#', name: 'users/rudksoy/DEVTOOLS-43865', time: 'Last commit 1 min ago' },
  { href: '#', name: 'users/rudksoy/DEVTOOLS-43865', time: 'Last commit 1 min ago' },
  { href: '#', name: 'users/rudksoy/DEVTOOLS-43865', time: 'Last commit 1 min ago' },
  { href: '#', name: 'users/rudksoy/DEVTOOLS-43865', time: 'Last commit 1 min ago' },
  { href: '#', name: 'users/rudksoy/DEVTOOLS-43865', time: 'Last commit 1 min ago' }
]

const BranchSelector: FC = () => (
  <div className='BranchSelector'>
    <Title>trunk</Title>

    <Dropdown currentBranch={CURRENT_BRANCH_STUB} branches={BRANCHES_STUB} />
  </div>
)

export default BranchSelector
