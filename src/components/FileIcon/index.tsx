import React from 'react'

import './index.css'

const FileIcon = ({ type }: { type: string }) => (
  <div className={`FileIcon FileIcon_${type}`} />
)

export default FileIcon
