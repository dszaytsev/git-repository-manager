import Router from 'next-routes'

const routes = new Router()

routes.add('filesTree', '/:repository/tree/:path*', 'files')
routes.add('fileViewer', '/:repository/blob/:path*', 'fileViewer')
routes.add('files', '/:repository', 'files')

export const Link = routes.Link

export default routes
