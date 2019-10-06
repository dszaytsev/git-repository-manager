import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { RouteComponentProps } from 'react-router'
import api from '../../lib/api'

import './index.css'

const File = dynamic(() => import('../File'))
const Repository = dynamic(() => import('../Repository'))

const Content = dynamic(() => import('./Content'))
const Header = dynamic(() => import('./Header'))

const FileViewer = ({ match: { url } }: RouteComponentProps) => {
  const [file, setFile] = useState<string[]>([])

  useEffect(() => {
    const fetchFile = async () => {
      const { data } = await api.get<string>(url, {
        transformResponse: res => res,
        responseType: 'text'
      })

      setFile(data.split('\n'))
    }

    fetchFile()
  }, [])

  console.log(file)

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

const FILE_STUB = [
  `#!/usr/bin/env python`,
  `import os`,
  `import sys`,
  `import platform`,
  `import json`,
  ``,
  `URLS = ['https://proxy.sandbox.yandex-team.ru/453818264', 'http://storage-int.mds.yandex.net/get-sandbox/110738/by_platform.json.453815347']`,
  `MD5 = '7f5a85f9c28d35c3a76d8cea7af51106'`,
  ``,
  `RETRIES = 5`,
  `HASH_PREFIX = 10`,
  ``,
  `HOME_DIR = os.path.expanduser('~')`,
  ``,
  ``,
  `def create_dirs(path):`,
  `    try:`,
  `        os.makedirs(path)`,
  `    except OSError as e:`,
  `        import errno`,
  ``,
  `        if e.errno != errno.EEXIST:`,
  `            raise`,
  ``,
  `    return path`,
  ``,
  ``,
  `def misc_root():`,
  `    return create_dirs(os.getenv('YA_CACHE_DIR') or os.path.join(HOME_DIR, '.ya'))`,
  ``,
  ``,
  `def tool_root():`,
  ``,
  ``,
  `def create_dirs(path):`,
  `    try:`,
  `        os.makedirs(path)`,
  `    except OSError as e:`,
  `        import errno`,
  ``,
  `        if e.errno != errno.EEXIST:`,
  `            raise`,
  ``,
  `    return path`
]
