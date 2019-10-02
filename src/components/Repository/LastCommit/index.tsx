import React, { FC } from 'react'

// *TODO: Link; Committer | Created at: 02.Oct.2019

interface Props {
  hash: { href: string, content: string }
  time: { href: string, content: string }
  committer: { href: string, content: string }
}

const LastCommit: FC<Props> = ({ hash, time, committer }) => (
  <div className='Repository-LastCommit'>
    Last commit&nbsp;
    <a className='Link' href={hash.href}>{hash.content}</a>
    &nbsp;on&nbsp;
    <a className='Link' href={time.href}>{time.content}</a>
    &nbsp;by&nbsp;
    <span className='Committer' >{committer.content}</span>
  </div>
)

export default LastCommit
