import React from 'react'

import HideControl from '../HideControl'
import Repos from '../Repos'

const Container = () => (
  <div className='RepositorySelector-Container'>
    <HideControl />

    <Repos />
  </div>
)

export default Container
