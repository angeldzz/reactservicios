import React, { Component } from 'react'
import Empleados from './Empleados'

export default class Departamento extends Component {
  render() {
    return (
      <div>
        <h1>Departamentos component</h1>
        <Empleados/>
        <Empleados/>
      </div>
    )
  }
}
