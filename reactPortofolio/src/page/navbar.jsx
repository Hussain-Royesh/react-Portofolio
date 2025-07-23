import React from 'react'
import {Link} from 'react-router-dom'


const navbar = () => {
  return (
    <div>
      <h1>Navbar Components</h1>
      <ul>
        <li>
            <Link to="/navbar">navbar</Link> <br />
            <Link to='/jflsdjf'> Not FOUnd </Link> <br />
            <Link to='/home'> Home</Link>
        </li>
      </ul>

    </div>
  )
}

export default navbar

