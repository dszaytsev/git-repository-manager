import React, { FC } from 'react'

import { Link } from '../../../routes'

const Repo: FC<{ name: string }> = ({ name }) => (
  <Link route='files' params={{ repository: name }}>
    <a className='RepositorySelector-Repo'>{name}</a>
  </Link>
)

export default Repo
