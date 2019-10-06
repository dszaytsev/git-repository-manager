import React, { FC } from 'react'

import File from '../../File'

import Lines from '../Lines'

interface Props {
  file: string[]
}

const Content: FC<Props> = ({ file }) => (
  <File.Content className='FileViewer-Content'>
    <Lines file={file}></Lines>
  </File.Content>
)

export default Content
