import React, { FC } from 'react'
import Line from '../Line'

interface Props {
  file: string[]
}

const Lines: FC<Props> = ({ file }) => (
  <table className='FileViewer-Lines'>
    <tbody>
      {file.map((line, index) => <Line key={index} line={line} />)}
    </tbody>
  </table>
)

export default Lines
