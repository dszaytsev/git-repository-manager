import React, { FC } from 'react'

import Repo from '../Repo'

import { Repo as RepoType } from '../'

interface Props {
  repos?: RepoType[]
}

const Repos: FC<Props> = ({ repos = [] }) => (
  <div className='RepositorySelector-Repos'>
    {repos.map(repo => <Repo key={repo.name} {...repo} />)}
  </div>
)

export default Repos
