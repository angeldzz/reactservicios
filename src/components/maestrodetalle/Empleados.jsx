import { Component } from 'react'
import axios from 'axios'
import Global from "../../Global";
export default class Empleados extends Component {
    url = Global.urlEmpleados
    state = {
        empleados: [],
    }
    loadEmpleados = () => {
        let idDepartamento = this.props.iddepartamento;
        let request = "api/Empleados/EmpleadosDepartamento/" + idDepartamento
        axios.get(this.url + request).then(response => {
            this.setState({
                empleados: response.data
            })
        })
    }
    componentDidUpdate = (oldProps) => {
        //Dibujamos las nuevas props y las antiguas
        console.log("Current: " + this.props.iddepartamento);
        console.log("Old: " + oldProps.iddepartamento);
        //solamente actualizamos state si props a cambiado
        if(oldProps.iddepartamento != this.props.iddepartamento){
            this.loadEmpleados();
        }
    }
    componentDidMount = () => {
        this.loadEmpleados();
    }
  render() {
    return (
      <div>
        <h1 style={{color:"blue"}}>{this.props.iddepartamento}</h1>
        <ul>
            {
                this.state.empleados.map((empleado, index) => {
                    return(
                        <li key={index}>{empleado.apellido} - {empleado.oficio}
                        - {empleado.departamento}</li>
                    )
                })
            }
        </ul>
        <h1>{this.state.texto}</h1>
      </div>
    )
  }
}
