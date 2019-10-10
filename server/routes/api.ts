import { Router } from 'express'
const api = Router()

import * as reposController from '../api/repos'
import * as commitsController from '../api/commits'
import * as contentController from '../api/content'
import * as blobController from '../api/blob'

api.get('/', reposController.get)
api.post('/', reposController.post)
api.delete('/:repositoryId', reposController.repoDelete)
api.get('/:repositoryId/commits/:commitHash?', commitsController.getCommits)
api.get('/:repositoryId/commits/:commitHash/diff', commitsController.diff)
api.get('/:repositoryId/tree/:path([^/]*)?', contentController.repoContent) // *TODO: make (/tree...)? | Created at: 14.Sep.2019
api.get('/:repositoryId/blob/:pathToFile([^/]*)', blobController.show)
// api.get('/:repositoryId/blob/:commitHash/:pathToFile([^/]*)', blobController.show)

export default api
