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
  server.get('*', async (req, res, next) => {
    return handle(req, res)
    // try {
    //   if (isInternalUrl(req.url)) {
    //     return app.handleRequest(req, res, req.originalUrl)
    //   }

    //   req.locals = {}
    //   req.locals.context = {}
    //   const html = await app.renderToHTML(req, res, '/', {})

    //   // Handle client redirects
    //   const context = req.locals.context
    //   if (context.url) return res.redirect(context.url)

    //   // Handle client response statuses
    //   if (context.status) return res.status(context.status).send()

    //   // Request was ended by the user
    //   if (html === null) return

    //   app.sendHTML(req, res, html)
    // } catch (e) {
    //   next(e)
    // }
  })


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

// *TODO: move to utils | Created at: 05.Oct.2019
const internalPrefixes = [/^\/_next\//, /^\/static\//]

function isInternalUrl(url) {
  for (const prefix of internalPrefixes) {
    if (prefix.test(url)) {
      return true
    }
  }

  return false
}
