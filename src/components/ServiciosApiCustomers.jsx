import { Component } from "react";
import axios from 'axios'
export default class ServiciosApiCustomers extends Component{
    // https://services.odata.org/V4/Northwind/Northwind.svc/ 

    state = {
        customers:[],

    }
    url = "https://services.odata.org/V4/Northwind/Northwind.svc/Customers"
    //Creamos un metodo para cargar los clientes
    loadCustomers = () => {
        console.log("Antes del servicio")
        axios.get(this.url).then(response => {
            console.log("Leyendo servicios")
            this.setState({
                customers: response.data.value,
            })
        })
        console.log("Despues del servicio")
    }
    componentDidMount = () => {
        console.log("Creando component");
        this.loadCustomers();
    }
    render(){
        return(
            <div>
                <h1>Servicios de api</h1>
                <button> Cargar Customers</button>
                {this.state.customers.map((customer,index)=>{
                    return(
                        <h3 key={index} style={{color:"blue"}}>{customer.ContactName}</h3>
                    )
                })}
            </div>
        )
    }
}