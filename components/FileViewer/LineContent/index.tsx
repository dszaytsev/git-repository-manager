import React, { FC } from 'react'

const LineContent: FC = ({ children }) => (
  <td>
    <div className='FileViewer-LineContent'>
      <pre>
        {children}
      </pre>
    </div>
  </td>
)

export default LineContent
