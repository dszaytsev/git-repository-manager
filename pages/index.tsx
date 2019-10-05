import React, { FC } from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import { Redirect } from 'react-router'
import dynamic from 'next/dynamic'

const Index = () => (
  <>
    <h2>Select branch from dropdown above</h2>
    <Link to='/files'>To files</Link>
    <br />
    <Link to='/file/viewer'>To FileViewer</Link>
  </>
)

const App: FC = () => {
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

export default App
