import React, { FC } from 'react'
import Branch from '../Branch'
import LastCommit from '../LastCommit'

const Header: FC = () => (
  <div className='Repository-Header'>
    <Branch name='arcadia' />

    <LastCommit
      hash={{ content: 'c4d248', href: '/hash' }}
      time={{ content: '20 Oct 2017, 12:24', href: '/time' }}
      committer={{ content: 'robot-srch-releaser', href: '/committer' }}
    />
  </div>
)

export default Header
