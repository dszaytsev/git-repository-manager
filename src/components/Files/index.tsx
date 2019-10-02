import React, { FC } from 'react'

import Table from 'components/Table'
import Repository from 'components/Repository'

import Head from './Head'
import Row from './Row'

export interface Record {
  file: { type: string, content: string },
  branch: { href: string, content: string },
  commit: string
  committer: string
  time: string
}

const RECORDS_MOCK: Record[] = [
  { file: { type: 'folder', content: 'api' }, branch: { href: '#', content: 'd53dsv' }, commit: '[vcs] move http to arc', committer: 'noxomoo', time: '1 min ago' },
  { file: { type: 'folder', content: 'api' }, branch: { href: '#', content: 'd53dsv' }, commit: '[vcs] move http to arc', committer: 'noxomoo', time: '1 min ago' },
  { file: { type: 'file', content: 'api' }, branch: { href: '#', content: 'd53dsv' }, commit: '[vcs] move http to arc', committer: 'noxomoo', time: '1 min ago' },
  { file: { type: 'file', content: 'api' }, branch: { href: '#', content: 'd53dsv' }, commit: '[vcs] move http to arc', committer: 'noxomoo', time: '1 min ago' }
]

const Files: FC = () => {
  return (
    <Repository className='Files'>
      <Table className='RepositoryFiles'>
        <Head />

        <Table.Body>{RECORDS_MOCK.map(record => <Row {...record} />)}</Table.Body>
      </Table>
    </Repository>
  )
}

export default Files
