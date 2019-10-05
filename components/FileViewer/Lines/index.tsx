import React, { FC } from 'react'
import Line from '../Line'

interface Props {
  file: string[]
}

const Lines: FC<Props> = ({ file }) => (
  <table className='FileViewer-Lines'>
    {file.map((line, index) => <Line key={index} line={line} />)}
  </table>
)

export default Lines
