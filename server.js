const express = require('express')
const next = require('next')
const path = require('path')
const bodyParser = require('body-parser')
const initDb = require('./server/initializers/initDb')

const [pathArg = '.'] = process.argv.splice(2)
const pathToRepos = path.resolve(pathArg)

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => initDb(pathToRepos)).then(() => {
  const server = express()

  server.use((req, res, next) => {
    res.reposPath = pathToRepos
    next()
  })

  server.use(bodyParser.json())
  server.use(bodyParser.urlencoded({ extended: true }))

  // server.use(express.static(path.join(__dirname, 'public')))

  server.use('/', require('./server/routes'))
  server.get('*', (req, res) => handle(req, res))


  // server.use((_, res) => res.sendStatus(404))

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


// initDb(pathToRepos)
//   .then(() => {
//     const server = app.listen(process.env.PORT || 3000, function () {
//       console.log('Сервер запущен на портe: ' + server.address().port)
//     })
//   })
