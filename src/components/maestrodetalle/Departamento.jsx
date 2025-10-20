import React, { Component } from 'react'
import Empleados from './Empleados'
import axios from "axios";
import Global from '../../Global';
export default class Departamento extends Component {
    url = Global.urlDepartamentos;
    selectDepartamento = React.createRef();
    state = {
        departamentos: [],
    }
    loadDepartamentos = () => {
        let request = "webresources/departamentos"
        axios.get(this.url+request).then(response => {
            console.log("leyendo...");
            this.setState({
                departamentos: response.data
            })
        })
    }
    componentDidMount = () => {
        this.loadDepartamentos()
    }
  render() {
    return (
      <div>
        <h1>Departamentos component</h1>
        <form>
            <select ref={this.selectDepartamento}>
                {this.state.departamentos.map((departamento, index) => {
                    return(
                        <option key={index}>{departamento.nombre}</option>
                    )
                })}
            </select>
        </form>
        <Empleados/>
        <Empleados/>
      </div>
    )
  }
}
