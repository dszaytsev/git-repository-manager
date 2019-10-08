import React, { FC } from 'react'
import Link from 'next/link'

import FileIcon from '../../FileIcon'

import { File as FileType } from '../'

const File: FC<FileType> = ({ name, type, link = '/404' }) => {
  return (
    <Link href={link}>
      <div className='Files-Icon'>
        <FileIcon type={type} />
        {name}
      </div>
    </Link>
  )
}

export default File
