import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class MenuRutas extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <ul className="navbar-nav">
        <li className="nav-item"><NavLink className="nav-link" to="/">Home</NavLink></li>
        <li className="nav-item"><NavLink className="nav-link" to="/tabla/7">Tabla Multiplicar 7</NavLink></li>
        <li className="nav-item"><NavLink className="nav-link" to="/collatz/9">Collatz 9</NavLink></li>
        <li className="nav-item"><NavLink className="nav-link" to="/hospitales">Hospitales</NavLink></li>
      </ul>
      </nav>
    )
  }
}
