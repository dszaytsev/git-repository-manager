import React, { FC } from 'react'
import { Link } from 'react-router-dom'

import FileIcon from '../../FileIcon'

import { File as FileType } from '../'

const File: FC<FileType> = ({ name, type, link = '/404' }) => {
  return (
    <Link className='Files-Icon' to={link}>
      <FileIcon type={type} />
      {name}
    </Link>
  )
}

export default File
