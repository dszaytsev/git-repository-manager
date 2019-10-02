import React from 'react'

import Table from 'components/Table';

export default () => (
  <Table.Head type='' className='Files-Head'>
    <Table.Row type='head'>
      <Table.Cell type='head'>Name</Table.Cell>
      <Table.Cell type='head'>Last Commit</Table.Cell>
      <Table.Cell type='head'>Commit message</Table.Cell>
      <Table.Cell type='head'>Committer</Table.Cell>
      <Table.Cell type='head'>Updated</Table.Cell>
    </Table.Row>
  </Table.Head>
)
