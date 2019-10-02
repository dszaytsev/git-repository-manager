import React, { FC } from 'react'

import { Repo as RepoType } from '../'

const Repo: FC<RepoType> = ({ name, href }) => (
  <a className='RepositorySelector-Repo' href={href}>
    {name}
  </a>
)

export default Repo
