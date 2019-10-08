// const mime = require('mime-types')
const git = require('../services/git')
const db = require('../services/db')
const { error } = require('../utils')

const MAX_FILE_SIZE = 100 // in KB

exports.show = async (req, res, next) => {
  const { repositoryId, commitHash = '', pathToFile } = req.params

  const repo = db.repos.get(repositoryId).value()

  if (!repo) next(error('Repo not found', 422))

  try {
    res.setHeader('Content-Type', 'text/plain')

    const file = await git.showFile(repo.path, commitHash, pathToFile)

    // res.type(mime.lookup(pathToFile))
    if (file.byteLength > 1024 * MAX_FILE_SIZE) res.send('Too large file to display')
    else res.send(file.toString())

  } catch (err) {
    next(error(err, 422))
  }
}
