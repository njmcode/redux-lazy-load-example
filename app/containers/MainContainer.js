import React, { PropTypes } from 'react'
import { Nav, Footer } from 'components'

const MainContainer = React.createClass({
  propTypes: {
    children: PropTypes.element.isRequired,
  },
  render () {
    return (
      <div>
        <h1>{'Redux code splitting example'}</h1>
        <Nav />
        {this.props.children}
        <Footer />
      </div>
    )
  },
})

export default MainContainer
