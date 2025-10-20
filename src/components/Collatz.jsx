import React, { Component } from 'react'

export default class Collatz extends Component {
    state ={
        collatz: []
    }
    generarCollatz = () => {
        let aux = []
        let num = parseInt(this.props.numCollatz);
        while(num !== 1) {
            if(num % 2 === 0){
                num = num / 2;
                aux.push(num)
            }else{
                num = num * 3 + 1
                aux.push(num)
            }
            this.setState({
                collatz:aux
            })
        }
    }
    componentDidMount = () => this.generarCollatz();
  render() {
    return (
      <div>
        <h1>Collatz de {this.props.numCollatz}</h1>
        {
            this.state.collatz.map((num, index) =>  {
                return(
                    <p key={index}>{num}</p>
                )
            })
        }
      </div>
    )
  }
}
