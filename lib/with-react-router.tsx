import React from 'react'
import { NextPage } from 'next'
import { BrowserRouter } from 'react-router-dom'

const isServer = typeof window === 'undefined'

interface Props {
  initialProps: any
  originalUrl: string
  context: any
}

// // *TODO: fix incorrect types: NextPage, any | Created at: 05.Oct.2019
export default function (App: any) {
  const AppWithRouter: NextPage<Props> = ({ originalUrl, context, initialProps, ...props }) => {
    if (isServer) {
      const { StaticRouter } = require('react-router')

      return (
        <StaticRouter
          location={originalUrl}
          context={context}
        >
          <App {...props} {...initialProps} />
        </StaticRouter>
      )
    }
    return (
      <BrowserRouter>
        <App {...props} {...initialProps} />
      </BrowserRouter>
    )
  }

  AppWithRouter.getInitialProps = async (appContext: any) => {
    const { ctx: { req: { originalUrl = '', locals = {} } = {} } } = appContext

    const initialProps ='getInitialProps' in App
      ?  await App.getInitialProps.call(App, appContext)
      : {}

    return {
      originalUrl,
      initialProps,
      context: locals.context || {}
    }
  }

  return AppWithRouter
}
