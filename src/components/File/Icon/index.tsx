import React from 'react'

import FileIcon from 'components/FileIcon'

const Icon = ({ type = 'file' }: { type: string }) => (
  <div className='File-Icon'>
    <FileIcon type={type} />
  </div>
)

export default Icon
