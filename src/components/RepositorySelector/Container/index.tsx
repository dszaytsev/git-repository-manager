import React, { FC } from 'react'

import HideControl from '../HideControl'
import Repos from '../Repos'

import { Repo } from '../'

interface Props {
  repos?: Repo[]
}

const Container: FC<Props> = ({ repos }) => (
  <div className='RepositorySelector-Container'>
    <HideControl />

    <Repos repos={repos}/>
  </div>
)

export default Container
