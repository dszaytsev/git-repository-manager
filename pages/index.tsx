import React from 'react'
// import { Route, Switch } from 'react-router-dom'
// import { Redirect } from 'react-router'
// import dynamic from 'next/dynamic'
import { NextPage, NextPageContext } from 'next'
import { Store } from 'redux'
import api from '../lib/api'
import { State, ActionType } from '../lib/redux'

// const Index = () => {
//   return (
//     <>

//     </>
//   )
// }

const App: NextPage = () => {
  return (<h2>Select branch from dropdown above</h2>)
  //   <div>
  //     <Index
  //     <Switch>
  //       <Route path='/:repository/tree/:path+' component={dynamic(() => import('../components/Files'))} />
  //       <Route path='/:repository/blob/:path+' component={dynamic(() => import('../components/FileViewer'))} />
  //       <Route path='/:repository' component={dynamic(() => import('../components/Files'))} />
  //       <Route path='/' component={Index} />
  //       <Redirect to='/' />
  //     </Switch>
  //   </div>
  // )
}

interface Context extends NextPageContext {
  store: Store<State>
}

App.getInitialProps = async ({ store }: Context) => {
  try {
    const { data = [] } = await api.get<string[]>('/')

    const repositoryList = data.map(repo => ({
      href: encodeURI(repo),
      name: repo
    }))

    store.dispatch({ type: ActionType.SetRepositories, repositoryList })
  } catch (e) { console.error(e) }

  return {}
}

export default App
