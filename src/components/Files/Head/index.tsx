import React from 'react'

import Table from 'components/Table';

export default () => (
  <Table.Head className='Files-Head'>
    <Table.Row type='head'>
      <Table.Cell>Name</Table.Cell>
      <Table.Cell>Last Commit</Table.Cell>
      <Table.Cell>Commit message</Table.Cell>
      <Table.Cell>Committer</Table.Cell>
      <Table.Cell>Updated</Table.Cell>
    </Table.Row>
  </Table.Head>
)
