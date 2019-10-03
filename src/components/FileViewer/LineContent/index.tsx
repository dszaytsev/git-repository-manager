import React, { FC } from 'react'

const LineContent: FC = ({ children }) => (
  <div className='FileViewer-LineContent'>
    <pre>
      {children}
    </pre>
  </div>
)

export default LineContent
