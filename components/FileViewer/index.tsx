import React from 'react'

// import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
// import { RouteComponentProps } from 'react-router'
// import api from '../../lib/api'

import './index.css'

const File = dynamic(() => import('../File'))
const Repository = dynamic(() => import('../Repository'))

const Content = dynamic(() => import('./Content'))
const Header = dynamic(() => import('./Header'))

const FileViewer = () => {
  // const [file, setFile] = useState<string[]>([])

  // useEffect(() => {
  //   const fetchFile = async () => {
  //     const { data } = await api.get<string>(url, {
  //       transformResponse: res => res,
  //       responseType: 'text'
  //     })

  //     setFile(data.split('\n'))
  //   }

  //   fetchFile()
  // }, [])

  return (
    <Repository className='FileViewer'>
      <File className='FileViewer-File'>
        <Header size='(4 347 bytes)' title='ya.make' />

        {/* <Content file={file} /> */}
        <Content file={[]} />
      </File>
    </Repository>
  )
}

export default FileViewer
