import React from 'react'

import dynamic from 'next/dynamic'

import './index.css'

const File = dynamic(() => import('../File'))
const Repository = dynamic(() => import('../Repository'))

const Content = dynamic(() => import('./Content'))
const Header = dynamic(() => import('./Header'))

const FileViewer = ({ file = [] }: { file: string[] }) => {
  return (
    <Repository className='FileViewer'>
      <File className='FileViewer-File'>
        <Header size='(4 347 bytes)' title='ya.make' />

        <Content file={file} />
      </File>
    </Repository>
  )
}

export default FileViewer
