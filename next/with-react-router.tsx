import React from 'react'
import { NextPage } from 'next'
import { BrowserRouter } from 'react-router-dom'

interface Props {
  originalUrl: string
  context: any
}

// // *TODO: fix incorrect types: NextPage, any | Created at: 05.Oct.2019
export default function (App: any) {
  const AppWithRouter: NextPage<Props> = ({ originalUrl, context, ...props }) => {
    if (!process.browser) {
      const { StaticRouter } = require('react-router')

      return (
        <StaticRouter
          location={originalUrl}
          context={context}
        >
          <App {...props} />
        </StaticRouter>
      )
    }
    return (
      <BrowserRouter>
        <App {...props} />
      </BrowserRouter>
    )
  }

  AppWithRouter.getInitialProps = async (appContext: any) => {
    const {
      ctx: {
        req: {
          originalUrl = '',
          locals = {}
        } = {}
      }
    } = appContext

    return {
      originalUrl,
      context: locals.context || {}
    }
  }

  return AppWithRouter
}
