import React from 'react'
import Signature from 'components/Signature'

const SettingsContainer = React.createClass({
  render () {
    return (
      <div>
        <h2>{'Settings'}</h2>
        <p>{'This is the settings page with the signature imported directly.'}</p>
        <Signature />
      </div>
    )
  },
})

export default SettingsContainer
