import React, { FC } from 'react'
import { Link } from 'react-router-dom'

import { Repo as RepoType } from '../'

const Repo: FC<RepoType> = ({ name, href }) => (
  <Link className='RepositorySelector-Repo' to={href}>
    {name}
  </Link>
)

export default Repo
