import React from 'react'

import Branch from '../Branch'
import LastCommit from '../LastCommit'
import Navigation from '../Navigation'

const Header = ({ repository = '' }: { repository: string }) => (
  <div className='Repository-Header'>
    <Navigation />

    <Branch name={repository} />

    <LastCommit
      hash={{ content: 'c4d248', href: '/hash' }}
      time={{ content: '20 Oct 2017, 12:24', href: '/time' }}
      committer={{ content: 'robot-srch-releaser', href: '/committer' }}
    />
  </div>
)

export default Header
