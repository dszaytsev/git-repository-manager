import React, { FC } from 'react'

import FileIcon from '../../FileIcon'

const File: FC<{ type: string }> = ({ children, type }) => (
  <div className="Files-Icon">
    <FileIcon type={type} />
    {children}
  </div>
)

export default File
