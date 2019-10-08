import React from 'react'
// import { withRouter, RouteComponentProps } from 'react-router'

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

// const buildUrl = (repository: string, path = '', isBlob = false) => {
//   if (isBlob) return `/${repository}/blob/${path}`

//   return `/${repository}/tree/${path}`
// }

// const getPaths = (pathParts: string[], paths: Path[] = []): Path[] => {
//   if (pathParts.length === 0) return paths

//   const path = {
//     path: pathParts.join('/'),
//     name: pathParts[pathParts.length - 1]
//   }

//   return getPaths(pathParts.slice(0, -1), paths.concat(path))
// }

// const Navigation = ({ match: { params, path: pathPattern } }: RouteComponentProps<Params>) => {
const Navigation = () => {
  // const { repository, path } = params

  // const isBlob = pathPattern.indexOf('blob') !== -1
  const paths: Path[] = []


  // if (path) {
  //   const pathParts = path.split('/')
  //   getPaths(pathParts).forEach(path => paths.unshift(
  //     { name: path.name, path: buildUrl(repository, path.path, isBlob) }
  //   ))
  // }

  // const rootPath = { path: buildUrl(repository), name: repository }
  // paths.unshift(rootPath)

  return (
    <div className='Navigation'>
      {paths.map(path => <Item key={path.path} path={path.path}>{path.name}</Item>)}
    </div>
  )
}

export default Navigation
