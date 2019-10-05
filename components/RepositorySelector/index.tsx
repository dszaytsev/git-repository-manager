import React, { FC } from 'react'

import Title from './Title'
import Dropdown from './Dropdown'
import { State } from '../../lib/redux'

import './index.css'
import { useSelector } from 'react-redux'

export interface Repo {
  href: string
  name: string
}

const RepositorySelector: FC = () => {
  const repositories = useSelector<State, Repo[]>(state => state.repositoryList)

  return (
    <div className='RepositorySelector'>
      <Title currentBranch='Arc' />
      <Dropdown repos={repositories} />
    </div>
  )
}

export default RepositorySelector
