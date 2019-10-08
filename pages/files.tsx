import React from 'react'
import { NextPage, NextPageContext } from 'next'
import { orderBy } from 'lodash'

import FilesComponent from '../components/Files'
import api from '../lib/api'

const Files: NextPage = () => {
  return <FilesComponent files={[]} path='' repository='' />
}

// interface RouteContext extends NextPageContext {
//   query: string
// }

Files.getInitialProps = async ({ query }: NextPageContext) => {
  console.log(query.repository)
  const { repository, path } = query
  // const reqUrl = hasPath ? url : `${repository}/tree`
  const url = `/${repository}/tree/${path ? path : ''}`

  console.log(url)

  // const { data = [] } = await api.get(url)
  // const files = orderBy(data, ['type', 'name'], ['desc', 'asc'])
  // api.get<File>(reqUrl)
  //   .then(({ data = [] }) => {
  //     const files = orderBy(data, ['type', 'name'], ['desc', 'asc'])

  //     dispatch({
  //       type: ActionType.SetRepositoriesContent,
  //       id: repository,
  //       path: `${repository}/${url}`,
  //       files
  //     })
  //   })


  // debugger

  return { path: 'string' }
}

export default Files
