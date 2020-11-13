import React,{Fragment, useState} from 'react'
import Error from './Error'
import PropTypes from 'prop-types'
function Pregunta({guardarPresupuesto,guardarRestante,actualizarPregunta}) {

    //definir estado
    const [cantidad, guardarCantidad] = useState(0); //input de entrada
    const [error, guardarError] = useState(false); // inicialmente no hay errores

    const definirCantidad = e => {
        //la funcion del useState modifica el estado del componente
        guardarCantidad(+e.target.value , 10) 
    }

    const agregarPresupuesto = e => {
        e.preventDefault();
        //validacion
        if(cantidad < 1 || isNaN(cantidad)){
            guardarError(true) // hay errores
            return;
        }else{
            guardarError(false);
            guardarPresupuesto(cantidad);
            guardarRestante(cantidad);
            actualizarPregunta(false);
        }

    }
    return (
        <Fragment>
            <h2>Coloca tu presupuesto</h2>
            {error ? <Error mensaje="El presupuesto es incorrecto" /> :''}
            <form onSubmit={agregarPresupuesto}>
                <input type="text"  
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto..."

                    onChange={definirCantidad}
                />

                <input type="submit" 
                    className="button-primary u-full-width"
                    value="Definir presupuesto"
                />
            </form>
        </Fragment>
    )
}

Pregunta.propTypes = {
    guardarPresupuesto:PropTypes.func.isRequired,
    guardarRestante:PropTypes.func.isRequired,
    actualizarPregunta:PropTypes.func.isRequired,
}


export default Pregunta
