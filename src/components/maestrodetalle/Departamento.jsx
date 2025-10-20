import React, { Component } from 'react'
import Empleados from './Empleados'
import axios from "axios";
import Global from '../../Global';
export default class Departamento extends Component {
    url = Global.urlDepartamentos;
    selectDepartamento = React.createRef();
    state = {
        departamentos: [],
        idDepartamento: 0
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
    buscarEmpleados = (event) => {
        event.preventDefault();
        let idDepartamento = this.selectDepartamento.current.value;
        this.setState({
            idDepartamento:idDepartamento
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
                <option value="0">Selecione Departamento</option>
                {this.state.departamentos.map((departamento, index) => {
                    return(
                        <option key={index} value={departamento.numero}>{departamento.nombre}</option>
                    )
                })}
            </select>
            <button onClick={this.buscarEmpleados}>
                Buscar Empleados
            </button>
        </form>
        {
            this.state.idDepartamento != 0 &&
            <Empleados iddepartamento={this.state.idDepartamento}/>
        }
      </div>
    )
  }
}
