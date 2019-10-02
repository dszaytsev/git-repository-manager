import React, { FC } from 'react'

import { Repo } from '../'

import Container from '../Container'

export interface Props {
  repos?: Repo[]
}

const Dropdown: FC<Props> = ({ repos }) => (
  <div className='RepositorySelector-Dropdown'>
    <Container repos={repos} />
  </div>
)

export default Dropdown
