const clientRoutes = require('./routes')
const initDb = require('./server/initializers/initDb')
import express from 'express'
import next from 'next'
import { parse } from 'url'
import path from 'path'
import bodyParser from 'body-parser'

//@ts-ignore
import initDb from './server/initializers/initDb'
//@ts-ignore
import routes from './server/routes'

const [pathArg = '.'] = process.argv.splice(2)
const pathToRepos = path.resolve(pathArg)

const port = parseInt(process.env.PORT || '', 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handler = clientRoutes.getRequestHandler(app)

app.prepare().then(() => initDb(pathToRepos)).then(() => {
  const server = express()

  server.use((req, res, next) => {
    res.reposPath = pathToRepos
    next()
  })

  server.use(bodyParser.json())
  server.use(bodyParser.urlencoded({ extended: true }))

  //ignore favicon
  server.use((req, res, next) => {
    req.originalUrl === '/favicon.ico'
      ? res.status(204).json({ nope: true })
      : next()
  })

  server.use('/', require('./server/routes'))
  server.get('*', async (req, res) => {
    handler(req, res)
  })

  // Error handler
  server.use((_, res) => res.sendStatus(404))
  //@ts-ignore
  server.use((err, _req, res, _next) => {
    const status = err.status || 500

    res.status(status)
    res.json({
      status: 'error',
      message: err.message
    })
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
