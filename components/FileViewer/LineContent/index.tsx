import React, { FC } from 'react'

const LineContent: FC = ({ children }) => (
  <td className='FileViewer-LineContent'>
    <pre>
      {children}
    </pre>
  </td>
)

export default LineContent
