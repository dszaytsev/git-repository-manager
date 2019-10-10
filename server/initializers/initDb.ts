import { repos as reposCollection } from '../services/db'
import { readDirsOnly } from '../utils/dir'

export default async (pathToRepos: string) => {
  const repos = await readDirsOnly(pathToRepos)

  repos.forEach(r => reposCollection
    .set(r.name, { path: r.path })
    .write()
  )
}
