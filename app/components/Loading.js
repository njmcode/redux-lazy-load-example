import React, { PropTypes } from 'react'

const Loading = props => (
  <div className={'overlay' + (props.isActive) ? ' active' : ''}>
    <span>{'Loading...'}</span>
  </div>
)

Loading.propTypes = {
  isActive: PropTypes,
}

export default Loading
