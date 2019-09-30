import React, { FC } from 'react'

import Table from 'components/Table'
import Layout from 'components/Layout'

const Files: FC = () => {
  return (
    <Layout className='Files'>
      <Table className='RepositoryFiles'>
        <Table.Head className='RepositoryFiles-Head'>
          <Table.Row type='head'>
            <Table.Cell>Name</Table.Cell>
            <Table.Cell>Last Commit</Table.Cell>
            <Table.Cell>Commit message</Table.Cell>
            <Table.Cell>Committer</Table.Cell>
            <Table.Cell>Updated</Table.Cell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Cell>
              <div className="RepositoryFiles-icon">
                <div className="FileIcon FileIcon_folder"></div>
              </div>api</Table.Cell>
            <Table.Cell><a className="Link" href="#">d53dsv</a></Table.Cell>
            <Table.Cell>[vcs] move http to arc</Table.Cell>
            <Table.Cell>
              <div className="Committer">noxoomo</div>
            </Table.Cell>
            <Table.Cell>4 s ago</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <div className="RepositoryFiles-icon">
                <div className="FileIcon FileIcon_folder"></div>
              </div>ci</Table.Cell>
            <Table.Cell><a className="Link" href="#">d53dsv</a></Table.Cell>
            <Table.Cell>[vcs] test for empty commit message</Table.Cell>
            <Table.Cell>
              <div className="Committer">nikitxskv</div>
            </Table.Cell>
            <Table.Cell>1 min ago</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </Layout>
  )
}

export default Files
