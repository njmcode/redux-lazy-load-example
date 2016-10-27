import React from 'react'
import Signature from 'components/Signature'

const QuizContainer = React.createClass({
  render () {
    return (
      <div>
        <h2>{'Quiz'}</h2>
        <p>{'This is the page with the quiz on it.'}</p>
        <Signature />
      </div>
    )
  },
})

export default QuizContainer
