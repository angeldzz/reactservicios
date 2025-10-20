import React, { Component } from 'react'

export default class TablaMultiplicar extends Component {
    state = {
        tabla: []
    }
    generarTablaMultiplicar = () => {
        let aux = []
        let numero = parseInt(this.props.numero)
        for (let i = 1; i < 10; i++) {
            aux.push(numero * i);
        }
        this.setState({
            tabla: aux
        })
    }
    componentDidMount = () => {
        this.generarTablaMultiplicar();
    }
  render() {
    return (
      <div>
            <h1>Tabla Multiplicar del {this.props.numero}</h1>
            <ul>
            {
                this.state.tabla.map((num, index) => {
                    return(<li key={index}>{num}</li>)
                })
            }
            </ul>
      </div>
    )
  }
}
