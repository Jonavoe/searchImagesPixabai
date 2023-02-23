import React, { Component } from "react";
import Buscador from "./componentes/Buscador";
import Resultado from "./componentes/Resultado";

class App extends Component {

  state = {
    termino : "",
    imagenes: [],
    pagina: ""
  }

  scroll = () => {
    const elemento = document.querySelector('.jumbotron');
    elemento.scrollIntoView('smooth', "start");
  }

  paginaAnterior = () => {
    //leer el state de la pagina actual
    let pagina = this.state.pagina

    //leer si la pagina es 1, ya no ir hacia atras
    if(pagina === 1) return null;

    //Sumar uno a la pagina actual
    pagina -= 1;

    //Agregar el cambio a la pagina
    this.setState({
      pagina
    }, () => {
      this.consultarApi();
      this.scroll();
    });
  }

  paginaSiguiente = () => {
    //leer el state de la pagina actual
    let pagina = this.state.pagina

    //Sumar uno a la pagina actual
    pagina += 1;

    //Agregar el cambio a la pagina
    this.setState({
      pagina
    }, () => {
      this.consultarApi();
      this.scroll();
    });
  }

  consultarApi = () => { 
    const termino = this.state.termino;
    const pagina = this.state.pagina;
    const url = `https://pixabay.com/api/?key=31687395-f766257d8d1d91c23a1f0e58f&q=${termino}&per_page=28&page=${pagina}`

    // console.log(url)
    fetch(url)
    .then(respuesta => respuesta.json())
    .then(resultado => this.setState({ imagenes : resultado.hits }))
  }

  datosBusqueda = (termino) => {
    this.setState({
      termino : termino,
      pagina : 1
    }, () => {
      this.consultarApi();
    });
  }

  render() {
    return (
      <div className="app container">
      <div>
        <img className="" src="logo192.png" alt="logo" style={{height: "200px", position:"relative", left:"38%"}} /> 
      </div>
        
        <div className="jumbotron">
          <p className="lead text-center">Busca tu Imagen</p>
          <Buscador
            datosBusqueda = {this.datosBusqueda}
           />
        </div>
        <div className="">
          <Resultado 
          imagenes = {this.state.imagenes}
          paginaAnterior = {this.paginaAnterior}
          paginaSiguiente = {this.paginaSiguiente}
          />
        </div>
      </div>
    );
  }
}

export default App;
