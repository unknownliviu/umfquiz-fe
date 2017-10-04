import React from 'react'
import {Link} from 'react-router-dom'

export default () => (
  <div>
    <h3>This is the header.</h3>
    <Link to="/">Home</Link>
    <br />
    <Link to="/about">About</Link>
    <br />
    <Link to="/salam">Florin Salam</Link>
  </div>
)
