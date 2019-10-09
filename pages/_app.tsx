import App from 'next/app'
import React from 'react'
import { Store } from 'redux'
import { Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper'

import { makeStore, State, ActionType } from '../lib/redux'

import Layout from '../components/Layout'

import './app.css'
import api from '../lib/api'
import { AppContextType } from 'next/dist/next-server/lib/utils'

interface Props {
  store: Store<State>
}

class MyApp extends App<Props> {
  static async getInitialProps({ Component, ctx }: AppContextType) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    try {
      const { data: repositories = [] } = await api.get<string[]>('/')

      return { pageProps: { ...pageProps, repositories } }
    } catch (e) {
      console.error(e)
      return { pageProps: { ...pageProps, repositories: [] } }
    }
  }

  render() {
    const { Component, store, pageProps } = this.props
    const { repositories = [] } = pageProps

    store.dispatch({ type: ActionType.SetRepositories, repositories })

    return (
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    )
  }
}

export default withRedux(makeStore)(MyApp)
