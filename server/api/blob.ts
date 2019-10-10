import {  RequestHandler } from 'express'

import { showFile } from '../services/git'

//js files
import { repos } from '../services/db'
import { error } from '../utils'
// const mime = require('mime-types')

const MAX_FILE_SIZE = 100 // in KB

export const show: RequestHandler = async (req, res, next) => {
  const { repositoryId, commitHash = '', pathToFile } = req.params

  const repo = repos.get(repositoryId).value()

  if (!repo) next(error('Repo not found', 422))

  try {
    res.setHeader('Content-Type', 'text/plain')

    const file = await showFile(repo.path, commitHash, pathToFile)

    // res.type(mime.lookup(pathToFile))
    if (file.byteLength > 1024 * MAX_FILE_SIZE) res.send('Too large file to display')
    else res.send(file.toString())

  } catch (err) {
    next(error(err, 422))
  }
}
