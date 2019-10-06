import React, { FC } from 'react'

import LineContent from '../LineContent'
import LineNumber from '../LineNumber'

interface Props {
  line: string
}

const Line: FC<Props> = ({ line }) => (
  <tr className='FileViewer-Line'>
    <LineNumber />
    <LineContent>{line}</LineContent>
  </tr>
)

export default Line
