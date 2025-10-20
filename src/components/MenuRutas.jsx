import React, { Component } from 'react'

export default class MenuRutas extends Component {
  render() {
    return (
      <div>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/tabla/7">Tabla Multiplicar 7</a></li>
            <li><a href="/tabla/9">Tabla Multiplicar 9</a></li>
            <li><a href="/tabla/21">Tabla Multiplicar 21</a></li>
            <li><a href="/collatz/9">Collatz 9</a></li>
            <li><a href="/collatz/12431">Collatz 12431</a></li>
            <li><a href="/collatz/99999">Collatz 99999</a></li>
        </ul>
      </div>
    )
  }
}
