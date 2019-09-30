import React, { FC, PropsWithChildren } from 'react'

type Props = PropsWithChildren<{ className?: string, type?: string }>

type TableElement = FC<Props>

function Table({ className, children }: Props) {
  return (
    <div className={`Table ${className}`}>
      {children}
    </div>
  )
}

function generateTableElement(element: string) {
  return ({ className, children, type }: Props) => (
    <div className={`Table-${element} Table-${element}_type_${type} ${className}`}>
      {children}
    </div>
  )
}

Table.Head = generateTableElement('Head')
Table.Body = generateTableElement('Body')
Table.Row = generateTableElement('Head')
Table.Cell = generateTableElement('Head')

export default Table

declare module Table {
  export let Head: TableElement
  export let Body: TableElement
  export let Row: TableElement
  export let Cell: TableElement
}
