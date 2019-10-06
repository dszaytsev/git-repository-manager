import React from 'react'
import { withRouter, RouteComponentProps } from 'react-router'

import Item from './Item'

import './index.css'

interface Params {
  repository: string
  path: string
}

export interface Path {
  name: string
  path: string
}

const buildUrl = (repository: string, path = '') => `/${repository}/tree/${path}`

const getPaths = (pathParts: string[], paths: Path[] = []): Path[] => {
  if (pathParts.length === 0) return paths

  const path = {
    path: pathParts.join('/'),
    name: pathParts[pathParts.length - 1]
  }

  return getPaths(pathParts.slice(0, -1), paths.concat(path))
}

const Navigation = ({ match: { params } }: RouteComponentProps<Params>) => {
  const { repository, path } = params
  const paths: Path[] = []

  if (path) {
    const pathParts = path.split('/')
    getPaths(pathParts).forEach(path => paths.unshift(
      { name: path.name, path: buildUrl(repository, path.path) }
    ))
  }

  const rootPath = { path: buildUrl(repository), name: repository }
  paths.unshift(rootPath)

  paths[paths.length - 1] = { ...paths[paths.length - 1], path: '' }

  return (
    <div className='Navigation'>
      {paths.map(path => <Item key={path.path} path={path.path}>{path.name}</Item>)}
    </div>
  )
}

export default withRouter(Navigation)
