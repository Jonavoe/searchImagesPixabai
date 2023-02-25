import React, { Component } from 'react';


class Buscador extends Component {

    busquedaRef = React.createRef();

    obtenerDatos = (e) => {
        e.preventDefault();

        //Tomamos el valor del input
        const termino = this.busquedaRef.current.value;

        //Lo enviamos al componente principal
        this.props.datosBusqueda(termino);
    }

    render() {
        return (
            <form onSubmit={this.obtenerDatos}>
                <div className="row gap-1" style={{display: "flex", alignItems:"center", justifyContent:"center"}}>
                    <div className="form-group col-md-6">
                        <input ref={this.busquedaRef} type="text" className="form-control form-control-lg" placeholder="Busca tu imagen. Ejemplo: Shitzu..." />
                    </div>
                    <div className="form-group row col-md-2">
                        <input type="submit" className="btn btn-lg btn-block btn-danger" value="Buscar..." />
                    </div>
                </div>
            </form>
        );
    }
}

export default Buscador;