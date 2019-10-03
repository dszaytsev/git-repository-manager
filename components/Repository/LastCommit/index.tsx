import React, { FC } from 'react'

import Link from '../../Link'
import Committer from '../../Committer'

interface Props {
  hash: { href: string, content: string }
  time: { href: string, content: string }
  committer: { href: string, content: string }
}

const LastCommit: FC<Props> = ({ hash, time, committer }) => (
  <div className='Repository-LastCommit'>
    Last commit&nbsp;
    <Link href={hash.href}>{hash.content}</Link>
    &nbsp;on&nbsp;
    <Link href={time.href}>{time.content}</Link>
    &nbsp;by&nbsp;
    <Committer>{committer.content}</Committer>
  </div>
)

export default LastCommit
