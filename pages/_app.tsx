import App from 'next/app'
import React from 'react'

import withReactRouter from '../next/with-react-router'

import Layout from '../components/Layout'

import './index.css'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    )
  }
}

export default withReactRouter(MyApp)
