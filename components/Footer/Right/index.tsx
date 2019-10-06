import React, { FC } from 'react'

import Version from '../Version'
import Copyright from '../Copyright'

const Right: FC = () => (
  <div className='Footer-Right'>
    <Version />
    <Copyright />
  </div>
)

export default Right
