import React, { FC } from 'react'

import File from '../../File'

import Download from '../Download'
import Size from '../Size'

interface Props {
  size: string
  title: string
}

const Header: FC<Props> = ({ title, size }) => (
  <File.Header className='FileViewer-Header'>
    <File.Icon type='file' />

    <File.Title>
      {title} <Size>{size}</Size>
    </File.Title>

    <Download />
  </File.Header>
)

export default Header
