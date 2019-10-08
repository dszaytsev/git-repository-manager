import React from 'react'
import { NextPage, NextPageContext } from 'next'
import { orderBy } from 'lodash'
import { ParsedUrlQuery } from 'querystring'

import FilesComponent, { File } from '../components/Files'
import api from '../lib/api'

interface Props {
  files: File[]
  path?: string
  repository: string
}

interface Query extends ParsedUrlQuery {
  repository: string
  path: string
}

interface Context extends NextPageContext {
  query: Query
}

const buildUrl = (repository: string, path: string) => `/${repository}/tree${path ? `/${path}` : ''}`

const Files: NextPage<Props> = ({ files }) => {
  return <FilesComponent files={files || []} />
}

Files.getInitialProps = async ({ query }: Context): Promise<Props> => {
  try {
    const { repository, path } = query

    const url = buildUrl(repository, path)
    const { data } = await api.get<File[]>(url)

    const files = orderBy(data, ['type', 'name'], ['desc', 'asc'])

    return { files, repository, path }
  } catch {
    return { files: [], repository: '', path: '' }
  }
}

export default Files
