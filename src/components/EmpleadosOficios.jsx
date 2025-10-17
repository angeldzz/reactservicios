import React, { Component } from 'react'
import  axios  from "axios";
import Global from '../Global';
export default class EmpleadosOficios extends Component {
    urlEmpleados = Global.urlEmpleados
    selectOficios = React.createRef()
    state = {
        oficios: [],
        empleadosOficio: []
    }
    componentDidMount = () => {
        axios.get(this.urlEmpleados + "api/Empleados").then(response => {
            let oficios = []
            response.data.map((empleado,index) => {
                if(!oficios.find(ofi => ofi === empleado.oficio)){
                    oficios.push(empleado.oficio)
                }
            });
            this.setState({ oficios: oficios })
        })
    }
    buscarEmpleados = (event) => {
        event.preventDefault();
        let seleccionOficio = this.selectOficios.current.value
        axios.get(this.urlEmpleados + "api/Empleados/EmpleadosOficio/" + seleccionOficio).then((response) => {
            this.setState({
                empleadosOficio: response.data
            })
        })
    }
  render() {
    return (
      <div>
        <form>
            <select ref={this.selectOficios}>
                {this.state.oficios.map((oficio,index) => {
                    return(
                        <option key={index} value={oficio}>{oficio}</option>
                    )
                })}
            </select>
            <button onClick={this.buscarEmpleados}>Buscar Empleados de oficio</button>
        </form>
        <table border="1">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Apellido</th>
                    <th>Oficio</th>
                    <th>Salario</th>
                </tr>
            </thead>
            <tbody>
                {this.state.empleadosOficio.map((empleado,index) => {
                    return(
                        <tr key={index}>
                            <td>{empleado.idEmpleado}</td>
                            <td>{empleado.apellido}</td>
                            <td>{empleado.oficio}</td>
                            <td>{empleado.salario}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
      </div>
    )
  }
}
