import React, { Component } from 'react'
import Alumnos from './Alumnos'
import Global from '../../Global'
import axios from 'axios'
export default class Cursos extends Component {
    url = Global.urlCursos
    selectCurso = React.createRef();
    state = {
        cursos: [],
        curso: 0
    }
    loadCursos = () => {
        let request = "api/Alumnos/Cursos"
        axios.get(this.url+request).then(response => {
            this.setState({
                cursos: response.data
            })
        })
    }
    buscarAlumnos = (event) => {
        event.preventDefault()
        let cursoActual = this.selectCurso.current.value
        this.setState({
            curso: cursoActual
        })
    }
    componentDidMount = () => {
        this.loadCursos();
    }
  render() {
    return (
      <div>
        <h1>Cursos</h1>
        <form>
            <select ref={this.selectCurso} onChange={this.buscarAlumnos}>
                {
                    this.state.cursos.map((curso,index) => {
                        return(
                            <option key={index}>{curso}</option>
                        )
                    })
                }
            </select>
        </form>
        {
            this.state.curso != 0 &&
            <Alumnos curso={this.state.curso}/>
        }
      </div>
    )
  }
}
