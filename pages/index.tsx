import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Redirect } from 'react-router'
import dynamic from 'next/dynamic'
import { NextPage, NextPageContext } from 'next'
import { Store } from 'redux'
import http from '../lib/http'
import { State, ActionType } from '../lib/redux'

const Index = () => {
  return (
    <>
      <h2>Select branch from dropdown above</h2>
    </>
  )
}

const App: NextPage = () => {
  return (
    <div>
      <Switch>
        <Route path='/:repositoryId/:path+' component={dynamic(() => import('../components/FileViewer'))} />
        <Route path='/:repositoryId' component={dynamic(() => import('../components/Files'))} />
        <Route path='/' component={Index} />
        <Redirect to='/' />
      </Switch>
    </div>
  )
}

interface Context extends NextPageContext {
  store: Store<State>
}

App.getInitialProps = async ({ store }: Context) => {
  try {
    const { data = [] } = await http.get<string[]>('/api/repos')

    const repositories = data.map(repo =>  ({
      href: encodeURI(repo),
      name: repo
    }))

    store.dispatch({ type: ActionType.GetRepositories, repositories })
  } catch (e) { console.error(e) }

  return {
    state: store,
    custom: 'custom'
  }
}

export default App
