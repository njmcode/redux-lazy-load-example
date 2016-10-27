import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'

// Initial payload
import { MainContainer, HomeContainer } from 'containers'

// Lazy load functions
import lazyLoad from './lazyLoad'

const routeChangeCb = (prev, next, replace, cb) => {
  // TODO: show loader
  cb()
}

export default function getRoutes (history) {
  return (
    <Router history={history}>
      <Route path='/' component={MainContainer} onChange={routeChangeCb}>
        <IndexRoute component={HomeContainer} />
        <Route path='quiz' getComponent={lazyLoad.quiz} />
        <Route path='settings' getComponent={lazyLoad.settings} />
      </Route>
    </Router>
  )
}
