import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class MenuRutas extends Component {
  render() {
    return (
      <div>
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/tabla/7">Tabla Multiplicar 7</NavLink></li>
            <li><NavLink to="/tabla/9">Tabla Multiplicar 9</NavLink></li>
            <li><NavLink to="/tabla/21">Tabla Multiplicar 21</NavLink></li>
            <li><NavLink to="/collatz/9">Collatz 9</NavLink></li>
            <li><NavLink to="/collatz/12431">Collatz 12431</NavLink></li>
            <li><NavLink to="/collatz/99999">Collatz 99999</NavLink></li>
        </ul>
      </div>
    )
  }
}
