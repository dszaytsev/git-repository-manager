import fs from 'fs'
import path from 'path'
import { promisify } from 'util'

const readdir = promisify(fs.readdir)
const unlink = promisify(fs.unlink)
const rmdirPromise = promisify(fs.rmdir)

function readDir(dir: string) {
  const files: string[] = []
  const dirs: string[] = []

  const readDirFiles = (base: string, level: number) => {
    const entities = fs.readdirSync(base)

    entities.forEach(entity => {
      const localBase = path.join(base, entity)
      const state = fs.statSync(localBase)

      if (state.isDirectory()) {
        dirs.push(localBase)
        readDirFiles(localBase, level + 1)
      } else {
        files.push(localBase)
      }
    })
  }

  readDirFiles(dir, 0)

  return [files, dirs]
}

export const rmdir = async (path: string) => {
  const [files, dirs] = readDir(path)

  await Promise.all(files.map(file => unlink(file)))

  const dirsToRemove = [path, ...dirs]
    .reverse().map(d => rmdirPromise(d))

  return Promise.all(dirsToRemove)
}


export const readDirsOnly = (dirPath: string) =>
  readdir(dirPath, { withFileTypes: true })
    .then(dirents => dirents
      .filter(d => d.isDirectory())
      .map(d => ({ name: d.name, path: path.join(dirPath, d.name) }))
    )

export const parsePathToTree = <T>(paths: string[] = []) => {
  type ResultType = { [key: string]: ResultType }
  const result: ResultType = {}

  paths.forEach(p => p
    .split('/')
    .reduce((acc, curr) => acc[curr] = acc[curr] || {}, result)
  )

  return result
}
