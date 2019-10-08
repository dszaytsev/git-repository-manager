const nextRoutes = require('next-routes')

const routes = nextRoutes()

routes.add('filesTree', '/:repository/tree/:path*', 'files')
routes.add('fileViewer', '/:repository/blob/:path*', 'fileViewer')
routes.add('files', '/:repository', 'files')

module.exports = routes
