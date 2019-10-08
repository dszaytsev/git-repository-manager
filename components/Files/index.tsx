import dynamic from 'next/dynamic'
import React from 'react'

import Table from '../Table'

import './index.css'

const Repository = dynamic(() => import('../Repository'))

const Head = dynamic(() => import('./Head'))
const Row = dynamic(() => import('./Row'))

export interface Record {
  file: File,
  branch?: { href: string, content: string },
  commit?: string
  committer?: string
  time?: string
}

export interface File {
  type: 'folder' | 'file'
  name: string
}

interface Props {
  files: File[]
}

const Files = ({ files = [] }: Props) => {
  return (
    <Repository className='Files'>
      <Table className='Files-Table'>
        <Head />

        <Table.Body>
          {files && files.map((file: File) => <Row key={file.name} file={file} />)}
        </Table.Body>
      </Table>
    </Repository>
  )
}

export default Files
