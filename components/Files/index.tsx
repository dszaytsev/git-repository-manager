import React, { FC } from 'react'
import dynamic from 'next/dynamic'

import Table from '../Table'
import './index.css'

const Repository = dynamic(() => import('../Repository'))

const Head = dynamic(() => import('./Head'))
const Row = dynamic(() => import('./Row'))

export interface Record {
  file: { type: string, content: string },
  branch: { href: string, content: string },
  commit: string
  committer: string
  time: string
}

const RECORDS_STUB: Record[] = [
  { file: { type: 'folder', content: 'api' }, branch: { href: '#', content: 'd53dsv' }, commit: '[vcs] move http to arc', committer: 'noxomoo', time: '1 min ago' },
  { file: { type: 'folder', content: 'api2' }, branch: { href: '#', content: 'd53dsv' }, commit: '[vcs] move http to arc', committer: 'noxomoo', time: '1 min ago' },
  { file: { type: 'file', content: 'api3' }, branch: { href: '#', content: 'd53dsv' }, commit: '[vcs] move http to arc', committer: 'noxomoo', time: '1 min ago' },
  { file: { type: 'file', content: 'api4' }, branch: { href: '#', content: 'd53dsv' }, commit: '[vcs] move http to arc', committer: 'noxomoo', time: '1 min ago' }
]

const Files: FC = () => {
  return (
    <Repository className='Files'>
      <Table className='Files-Table'>
        <Head />

        <Table.Body>{RECORDS_STUB.map(record => <Row key={record.file.content} {...record} />)}</Table.Body>
      </Table>
    </Repository>
  )
}

export default Files
