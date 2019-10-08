import dynamic from 'next/dynamic'
import React from 'react'
// import React, { useEffect } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { orderBy } from 'lodash'

// import api from '../../lib/api'
// import { State, ActionType } from '../../lib/redux'

import Table from '../Table'

import './index.css'
// import { Dispatch } from 'redux'

const Repository = dynamic(() => import('../Repository'))

const Head = dynamic(() => import('./Head'))
const Row = dynamic(() => import('./Row'))

export interface Record {
  file: File,
  branch?: { href: string, content: string },
  commit?: string
  committer?: string
  time?: string
}

export interface File {
  type: 'folder' | 'file'
  name: string
  link?: string
}

// interface Params {
//   repository: string
//   path: string
// }

const FILE_PATH_TYPE_MAP = {
  folder: 'tree',
  file: 'blob'
}

// const fetchFiles = (repository: string, url: string, hasPath: boolean) => (dispatch: Dispatch) => {
//   const reqUrl = hasPath ? url : `${repository}/tree`

//   api.get<File>(reqUrl)
//     .then(({ data = [] }) => {
//       const files = orderBy(data, ['type', 'name'], ['desc', 'asc'])

//       dispatch({
//         type: ActionType.SetRepositoriesContent,
//         id: repository,
//         path: `${repository}/${url}`,
//         files
//       })
//     })
// }

const convertWithLinks = (files: File[], repository: string, path = '') => {
  return files.map(file => {
    const pathFileType = FILE_PATH_TYPE_MAP[file.type]
    const link = `/${repository}/${pathFileType}/${path && `${path}/`}${file.name}`

    return { ...file, link }
  })
}

interface Props {
  files: File[]
  repository: string
  path: string
}

// const Files = ({ match: { url, params } }: RouteComponentProps<Params>) => {
const Files = ({ files, repository, path  }: Props) => {
  // const { repository, path } = params

  // const dispatch = useDispatch()
  // const files = useSelector<State, File[]>(state => {
  //   // const repo = state.repositoriesContent[repository]

  //   // const paths = repo && repo.paths
  //   // const files = paths && paths[`${repository}/${url}`]

  //   return files || []
  // })

  // useEffect(() => { dispatch(fetchFiles(repository, url, !!path)) }, [repository, path])

  const filesWithLinks = convertWithLinks(files, repository, path)

  return (
    <Repository className='Files'>
      <Table className='Files-Table'>
        <Head />

        {filesWithLinks && (
          <Table.Body>
            {filesWithLinks.map((file: File) => <Row key={file.name} file={file} />)}
          </Table.Body>
        )}
      </Table>
    </Repository>
  )
}

export default Files
