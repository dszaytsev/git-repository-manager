import { RequestHandler } from 'express'

import { clone } from '../services/git'

const db = require('../services/db')
const { dir, error } = require('../utils')

export const get: RequestHandler = (req, res) => {
  res.json(Object.keys(db.repos.value()))
}

export const repoDelete: RequestHandler = async (req, res, next) => {
  const { repositoryId } = req.params

  const repo = db.repos.get(repositoryId).value()

  if (!repo) next(error('Repo not found', 422))

  try {
    await dir.rmdir(repo.path)

    res.json({ status: 'ok', message: 'Repo deleted' })
  } catch (e) {
    next(error(e, 500))
  }
}

export const post: RequestHandler = async (req, res, next) => {
  const { url } = req.body

  try {
    await clone(url, res.reposPath)
    res.json({ status: 'ok', message: 'Repo cloned' })
  } catch (err) {
    next(error(err, 500))
  }
}
