import { RequestHandler } from 'express'

import { diff as gitDiff, getMainBranchHash, log } from '../services/git'

import { error } from '../utils'
import { repos } from '../services/db'

export const getCommits: RequestHandler = async (req, res, next) => {
  /* paginator start */
  const PER_PAGE = 20
  let { page = 1 } = req.query
  page = page < 1 ? 1 : page
  const range = [PER_PAGE * (page - 1), PER_PAGE * page]
  /* paginator end */

  // *TODO: add DRY Created at: 14.Sep.2019
  const { repositoryId, commitHash } = req.params

  const repo = repos.get(repositoryId).value()

  if (!repo) next(error('Repo not found', 422))

  try {
    const hash = commitHash || await getMainBranchHash(repo.path)

    const commitsPath = `${repositoryId}.commits.${hash}`
    const commitsFromDb = repos.get(commitsPath).value()
    const commits = commitsFromDb || await log(repo.path, hash)

    if (!commitsFromDb) repos.set(commitsPath, commits).write()

    res.json(commits.slice(...range))
  } catch (err) {
    next(error(err, 422))
  }
}

export const diff: RequestHandler = async (req, res, next) => {
  const { repositoryId, commitHash } = req.params

  const repo = repos.get(repositoryId).value()

  if (!repo) next(error('Repo not found', 422))

  try {
    const result = await gitDiff(repo.path, commitHash)

    res.json({ diff: result })
  } catch (err) {
    next(error(err, 422))
  }
}
