import React, { FC } from 'react'

import Label from '../Label'
import Current from '../Current'

interface Props {
  currentBranch: string
}

const Title: FC<Props> = ({ currentBranch }) => (
  <div className='RepositorySelector-Title'>
    <Label />
    &nbsp;
    <Current>{currentBranch}</Current>
  </div>
)

export default Title
