import React, { FC } from 'react'
import Link from 'next/link'

import { Repo as RepoType } from '../'

const Repo: FC<RepoType> = ({ name, href }) => (
  <Link href={`/${href}`}>
    <a className='RepositorySelector-Repo'>{name}</a>
  </Link>
)

export default Repo
