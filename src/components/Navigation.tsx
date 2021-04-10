import React from 'react'
import { Link } from 'gatsby'
import './Navigation.scss'

export default function Navigation() {
  return (
    <div className="navigation">
      <Link to="/">Etusivu</Link>
      <Link to="/calendar/">Kalenteri</Link>
      <Link to="/form/">Ehdota päivää</Link>
    </div>
  )
}