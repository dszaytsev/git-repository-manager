import React, { FC } from 'react'
// import Link from 'next/link'
//@ts-ignore
import { Link } from '../../../routes'

import { Repo as RepoType } from '../'

const Repo: FC<RepoType> = ({ name }) => (
  <Link route='files' params={{ repository: name }}>
    <a className='RepositorySelector-Repo'>{name}</a>
  </Link>
)

export default Repo
