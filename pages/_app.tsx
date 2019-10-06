import App from 'next/app'
import React from 'react'
import { Store } from 'redux'
import { Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper'

import withReactRouter from '../lib/with-react-router'
import { makeStore } from '../lib/redux'

import Layout from '../components/Layout'

import './index.css'

interface Props {
  store: Store
}

class MyApp extends App<Props> {
  render() {
    const { Component, pageProps, store } = this.props

    return (
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    )
  }
}

export default withReactRouter(withRedux(makeStore)(MyApp))
