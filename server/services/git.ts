import { spawn } from 'child_process'

interface CommitEntity {
  hash: string
  data: string
  author: string
}

export const log = (path: string, commit = '') => {
  const SEPARATOR = ';separator;'
  const command = `log --pretty=format:"%H${SEPARATOR}%ad${SEPARATOR}%s" ${commit}`

  return git<CommitEntity[]>(command, { path, acc: [] },
    (data, acc) => {
      const commitEntities = data
        .toString()
        .split('\n')
        .filter(Boolean)
        .map(commit => {
          const [hash, data, author] = commit.split(SEPARATOR)
          return { hash, data, author }
        })

      acc.push(...commitEntities)
      return acc
    })
}

export const diff = (path: string, commit = '') => {
  return git(`diff ${commit}`,
    { path, acc: '' },
    (data, acc) => acc += data
  )
}

// git ls-tree HEAD --name-only | xargs -n1 git log HEAD -n 1 --pretty=oneline
export const tree = (path: string, commitHash = '') => {
  return git<string[]>(`ls-tree --name-only -r ${commitHash}`,
    { path, acc: [] },
    (data, acc) => {
      acc.push(...data.toString().split('\n'))
      return acc
    }
  )
}

export const showFile = async (path: string, commitHash: string, filePath: string) => {
  const chunks = await git<Buffer[]>(`--no-pager  show ${commitHash}:${filePath}`,
    { path, acc: [] },
    (data, acc) => {
      acc.push(Buffer.from(data))
      return acc
    }
  )

  return Buffer.concat(chunks)
}

export const getMainBranchHash = (path: string) => {
  return git('symbolic-ref --short HEAD | xargs git rev-parse',
    { path, acc: '' },
    (data, acc) => data += acc)
}

export const getRevHash = (path: string, commitHash: string) => git(`rev-parse ${commitHash}`,
  { path, acc: '' },
  (data, acc) => data += acc
)

export const clone = (repoUrl: string, path: string) => new Promise((resolve, reject) => {
  let errors = ''

  const child = spawn(`git clone ${repoUrl}`, { cwd: path, shell: true })

  child.stderr.on('data', data => {
    // horrible crutch cause git clone writes to stderr
    if (!data.includes('Cloning into')) errors += data
  })

  child.on('close', () => errors === '' ? resolve() : reject(errors))
  child.on('error', reject)
})

type Git = <A = any>(
  command: string,
  options: { path: string, acc: A },
  readFn: (data: string, acc: A) => A
) => Promise<A>

const git: Git = (command, options, readFn) => {
  let { path, acc } = options

  return new Promise((resolve, reject) => {
    let errors = ''

    const child = spawn(`git ${command}`, { cwd: path, shell: true })

    child.stdout.on('data', (data) => {
      acc = readFn(data, acc)
    })
    child.stderr.on('data', data => errors += data)

    child.on('close', () => errors === '' ? resolve(acc) : reject(errors))
    child.on('error', reject)
  })
}
