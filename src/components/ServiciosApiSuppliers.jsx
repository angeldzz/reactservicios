import React, { Component } from 'react'
import axios from 'axios'
export default class ServiciosApiSuppliers extends Component {
    url = "https://services.odata.org/V4/Northwind/Northwind.svc/Suppliers"
    cajaID = React.createRef();
    state = {
        nombres: [],
        suppliers:{},
        supplier: {}
    }
    componentDidMount = () => {
        let nombresAux = [];
        axios.get(this.url).then(response => {
            this.setState({
                suppliers:response.data
            })
            response.data.value.forEach(cliente => {
                nombresAux.push(cliente.ContactName)
                this.setState({
                    nombres: nombresAux
                })
            });
        })
        
    }
    buscarSupplier = () => {
            this.state.suppliers.value.forEach(cliente => {
                if (cliente.SupplierID == this.cajaID.current.value) {
                    this.setState({
                        supplier: cliente
                    })
                }
            });
    }
    render() {
        return (
            <div>
                <h1>Busqueda con APIS</h1>
                <input type="text" ref={this.cajaID} />
                <button onClick={this.buscarSupplier}>Buscar Supplier</button>
                <h3>{this.state.supplier.SupplierID} - {this.state.supplier.ContactName}</h3>
                <h4>{this.state.supplier.Region} / {this.state.supplier.City} / {this.state.supplier.Country} / {this.state.supplier.Address}</h4>
                <h5>{this.state.supplier.PostalCode} / {this.state.supplier.CompanyName} / {this.state.supplier.HomePage}</h5>
                <h6>{this.state.supplier.ContactTitle} / {this.state.supplier.Fax} / {this.state.supplier.Phone}</h6>
                {this.state.nombres.map((nombre,index)=>{
                    return(
                            <p key={index}>{nombre}</p>
                    )
                })}
            </div>
        )
    }
}
