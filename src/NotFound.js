import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className='pade-not-found'>
        <h1>404 Page not Found</h1>
        <h2><Link to="/portal/home">Back to Home Page</Link></h2>
        <img src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"></img>
    </div>
  )
}
