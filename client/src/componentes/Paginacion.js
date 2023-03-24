import React from 'react';

const Paginacion = props => {
    return (
        <div  className="py-3" style={{display: "flex" , justifyContent:"center"}} >

            <button onClick={props.paginaAnterior} type='button' className="btn btn-info m-1">&larr; Anterior </button>
            <button onClick={props.paginaSiguiente} type='button' className="btn btn-info m-1"> Siguiente &rarr;</button>

        </div>
    )

}  

export default Paginacion;
