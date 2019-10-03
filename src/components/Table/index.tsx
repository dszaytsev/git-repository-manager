import React, {  PropsWithChildren } from 'react'

import './index.css'

type Props = PropsWithChildren<{ className?: string, type?: string }>

function Table({ className = '', children }: Props) {
  return (
    <div className={`Table ${className}`}>
      {children}
    </div>
  )
}

function generateTableElement(element: string) {
  return ({ className = '', children, type = 'ordinary' }: Props) => (
    <div className={`Table-${element} Table-${element}_type_${type} ${className}`}>
      {children}
    </div>
  )
}

Table.Head = generateTableElement('Head')
Table.Body = generateTableElement('Body')
Table.Row = generateTableElement('Row')
Table.Cell = generateTableElement('Cell')

export default Table
