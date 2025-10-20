import React, { Component } from 'react'
import Global from '../../Global'
import axios from 'axios'

export default class Alumnos extends Component {
    url = Global.urlCursos;
    state = {
        alumnos: [],
        DetalleAlumno: []
    }
    componentDidUpdate = (oldProps) => {
        if(oldProps.curso != this.props.curso){
            this.loadAlumnos();
        }
    }
    loadAlumnos = () => {
        console.log("Cargando Alumnos");
        let request = "api/Alumnos/FiltrarCurso/" + this.props.curso
        axios.get(this.url + request).then(response => {
            this.setState({
                alumnos: response.data,
                idAlumno:0
            })
        })
    }
    cargarAlumno = (idalumno) => {
        console.log("Cargano Alumno " + idalumno);
        let request = "api/Alumnos/FindAlumno/" + idalumno
        axios.get(this.url + request).then(response => {
            console.log(response.data);
            this.setState({
                DetalleAlumno: response.data
            })
        })
    }
    componentDidMount = () => {
        this.loadAlumnos()
    }
  render() {
    return (
      <div>
        <h1>Alumnos de: {this.props.curso}</h1>
        {
                this.state.DetalleAlumno.idAlumno &&
                <>
                <h1>{this.state.DetalleAlumno.nombre}</h1>
                <h1>IdAlumno: {this.state.DetalleAlumno.idAlumno}</h1>
                <img key={this.state.DetalleAlumno.idAlumno} src={this.state.DetalleAlumno.imagen}/>
                </>
            }
        <ul>
        {this.state.alumnos.map((alumno,index) => {
            return (
                <li key={index}>{alumno.nombre} - <button onClick={() => this.cargarAlumno(alumno.idAlumno)}>Detalles</button></li>
            )
        })}
        </ul>
      </div>
    )
  }
}
