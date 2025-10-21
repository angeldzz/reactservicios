import React, { Component } from 'react'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from './Home';
import NotFound from './NotFound';
import TablaMultiplicar from './TablaMultiplicar';
import Collatz from "./Collatz";
import { useParams } from "react-router-dom";
import MenuRutas from './MenuRutas';
export default class Router extends Component {
  render() {
    function TablaMultiplicarElement () {
        // Esta funcion nos servira para capturar los paramentros
        //Recibidos en una ruta y enviarlos con props a nuestro component
        //voy a enviar un parametro llamado mi numero
        let {minumero} = useParams()
        //Devolvemos el componente tabla multiplicar con sus props
        return <TablaMultiplicar numero={minumero}/>
    }
    function CollatzElement () {
      let {numcollatz} = useParams()
      return <Collatz numCollatz={numcollatz}/>
    }
    return (
      <BrowserRouter>
      <MenuRutas/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/tabla/:minumero' element={<TablaMultiplicarElement/>}/>
        <Route path='/collatz/:numcollatz' element={<CollatzElement/>}/>
        {/* Para las rutas que no existen debemos utilizar el * y debe ser siempre la ultima ruta */}
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      </BrowserRouter>
    )
  }
}
