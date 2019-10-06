import React, { FC } from 'react'

import Item from './Item'

import './index.css'

const Tabs: FC = () => (
  <div className='Tabs'>
    <Item isActive>Files</Item>
    <Item>Branches</Item>
  </div>
)

export default Tabs
