import React from 'react'
import { Link } from 'react-router'

const Nav = props => (
  <nav>
    <ul>
      <li><Link to='/'>{'Home'}</Link></li>
      <li><Link to='/quiz'>{'Quiz'}</Link></li>
      <li><Link to='/settings'>{'Settings'}</Link></li>
    </ul>
  </nav>
)

export default Nav
