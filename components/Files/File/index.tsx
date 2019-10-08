import React, { FC } from 'react'
import { useRouter } from 'next/router'

//@ts-ignore
import { Link } from '../../../routes'
import FileIcon from '../../FileIcon'

import { File as FileType } from '../'

const File: FC<FileType> = ({ name, type }) => {
  const { query } = useRouter()
  const repository = query.repository as string

  const route = type === 'folder' ? 'filesTree' : 'fileViewer'

  return (
    <Link route={route} params={{ repository, path: name }}>
      <a className='Files-Icon'>
        <FileIcon type={type} />
        {name}
      </a>
    </Link>
  )
}

export default File
