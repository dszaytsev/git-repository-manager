import React from 'react'
import { NextPage, NextPageContext } from 'next'

import FileViewerComponent from '../components/FileViewer'
import api from '../lib/api'

interface Props {
  file: string[]
}

const FileViewer: NextPage<Props> = ({ file }) => {
  return <FileViewerComponent file={file} />
}

FileViewer.getInitialProps = async ({ asPath = '' }: NextPageContext) => {
  try {
    const { data } = await api.get<string>(asPath, {
      transformResponse: res => res,
      responseType: 'text'
    })

    return { file: data.split('\n') }
  } catch (e) {
    console.error(e)
    return { file: [] }
  }
}

export default FileViewer
