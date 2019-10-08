const nextRoutes = require('next-routes')

const routes = nextRoutes()

routes.add('/:repository/tree/:path*', 'files')
routes.add('/:repository/blob/:path*', 'fileViewer')
routes.add('/:repository', 'files')

module.exports = routes
