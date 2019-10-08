import React from 'react'

import Repo from '../Repo'

import { useSelector } from 'react-redux'
import { State } from '../../../lib/redux'

const Repos = () => {
  const repos = useSelector<State, string[]>(state => state.repositories)

  return (
    <div className='RepositorySelector-Repos'>
      {repos.map(repo => <Repo key={repo} name={repo} />)}
    </div >
  )
}

export default Repos
