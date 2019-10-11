import fs from 'fs'
import path from 'path'
import low from 'lowdb'
import FileSync from 'lowdb/adapters/FileSync'
import { ObjectChain } from 'lodash'

const dbPath = path.join(__dirname, '../db.json')
fs.writeFileSync(dbPath, '{}')

const adapter = new FileSync(dbPath)
const db = low(adapter)

db.defaults({
  repos: {}
}).write()

export const repos = db.get('repos') as ObjectChain<any>

export default db

