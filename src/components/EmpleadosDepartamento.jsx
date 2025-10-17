import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios';

export default class EmpleadosDepartamento extends Component {
    urlEmpleados = Global.urlEmpleados;
    urlDepartamentos = Global.urlDepartamentos;
    selectDepartamento = React.createRef();
    buscarEmpleados = (event) => {
        event.preventDefault();
        let idDepartamento = this.selectDepartamento.current.value
        let request = "api/Empleados/EmpleadosDepartamento/" + idDepartamento
        axios.get(this.urlEmpleados + request).then(response => {
            console.log("Leyendo empleados")
            console.log(response.data)
            this.setState({
                empleados: response.data
            })
        })
    }

    state = {
        empleados: [],
        departamentos: [],

    }
    loadDepartamentos = () => {
        let request = "webresources/departamentos"
        axios.get(this.urlDepartamentos + request).then(response => {
            console.log("Cargando departamentos");
            this.setState({
                departamentos:response.data
            })
        })
    }
    componentDidMount = () => { this.loadDepartamentos() }
  render() {
    return (
      <div>
        <h1>API Empleados Departamento</h1>
        <form>
            <label>Seleccione Departamento</label>
            <select ref={this.selectDepartamento}>
                {
                    this.state.departamentos.map((departamento,index) => {
                        return(
                            <option key={index} value={departamento.numero}>{departamento.nombre}</option>
                        )
                    })
                }
            </select>
            <button  onClick={this.buscarEmpleados}>Buscar Empleados</button>
        </form>
        <ul>
            {
                this.state.empleados.map((empleado,index)=>{
                    return(
                        <li key={index}>{empleado.apellido}</li>
                    )
                })
            }
        </ul>
      </div>
    )
  }
}
