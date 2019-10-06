import React, { FC } from 'react'

interface Props {
  isActive?: boolean
}

const Tabs: FC<Props> = ({ children, isActive }) => (
  <div className={`Tabs-Item ${isActive && 'Tabs-Item_isActive'}`}>
    {children}
  </div>
)

export default Tabs
