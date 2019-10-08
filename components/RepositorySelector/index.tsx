import React from 'react'

import Title from './Title'
import Dropdown from './Dropdown'

import './index.css'

const RepositorySelector = () => {
  return (
    <div className='RepositorySelector'>
      <Title currentBranch='Arc' />
      <Dropdown />
    </div>
  )
}

export default RepositorySelector
