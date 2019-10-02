import React, { FC } from 'react'

const File: FC<{ type: string }> = ({ children, type }) => (
  <div className="Files-Icon">
    <div className={`FileIcon FileIcon_${type}`}></div>
    {children}
  </div>
)

export default File
