import React, { FC } from 'react'

import Title from './Title'
import Dropdown from './Dropdown'

import './index.css'

export interface Repo {
  href: string
  name: string
}

const REPOS_STUB = [
  { href: '#', name: 'Arc' },
  { href: '#', name: 'My repository' },
  { href: '#', name: 'Devtools-team repository' },
]

const RepositorySelector: FC = () => (
  <div className='RepositorySelector'>
    <Title currentBranch='Arc' />
    <Dropdown repos={REPOS_STUB} />
  </div>
)

export default RepositorySelector
