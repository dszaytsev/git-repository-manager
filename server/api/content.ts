import { RequestHandler } from 'express'

import { getRevHash, tree, getMainBranchHash } from '../services/git'

import { error, dir as dirUtil } from '../utils'

import { repos } from '../services/db'

export const repoContent: RequestHandler = async (req, res, next) => {
  const { repositoryId, commitHash = null, path } = req.params

  const repo = repos.get(repositoryId).value()

  if (!repo) next(error('Repo not found', 422))

  try {
    const hash = commitHash
      ? await getRevHash(repo.path, commitHash)
      : await getMainBranchHash(repo.path)

    const paths = await tree(repo.path, hash)

    const hashFilesPath = `${repositoryId}.hashes.${hash}.files`
    const treeFromDb = repos.get(hashFilesPath).value()
    const rootDir = treeFromDb || dirUtil.parsePathToTree(paths)

    if (!treeFromDb) repos.set(hashFilesPath, rootDir).write()

    let files = rootDir

    if (path) {
      files = repos.get(`${hashFilesPath}.${path.split('/').join('.')}`).value() // :)
    }

    // как же это костыльно
    res.json(Object.keys(files).filter(Boolean).map(key => {
      return {
        type: Object.entries(files[key]).length === 0 ? 'file' : 'folder', // check if object is empty; empty object means file
        name: key
      }
    }))
  } catch (err) {
    next(error(err, 422))
  }
}
