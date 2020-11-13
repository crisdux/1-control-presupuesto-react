import React, {useState} from 'react'
import Error from './Error';
import shortid from 'shortid';
import PropTypes from 'prop-types'
function Formulario({gardarGasto,guardarCrearGasto}) {

    // state 
    const [nombre, guardarNombre] = useState('');
    const [cantidad, guardarCantidad] = useState(0);
    //stare de control de errores
    const [error, setError] = useState(false);

    const agregarGasto = e => {
        e.preventDefault();
        //validar
        if(cantidad < 1 || isNaN(cantidad) || nombre.trim() === ''){ //si hay errores
            setError(true);
            return;
        } else{ // sino hay errores
            setError(false);
            //construir el gasto
            let gasto = {
                nombre,
                cantidad,
                id: shortid.generate()
            };
            // pasar el gasto al componente principal
            gardarGasto(gasto);
            guardarCrearGasto(true);
            // resetear los campos
            guardarNombre('');
            guardarCantidad(0);
        }
        


        

        
    }
    return (
        <div>
            <form onSubmit={agregarGasto}>
                <h2>Agrega tus gastos aca</h2>
                {error ? <Error mensaje="Ambos campos son requeridos o gasto incorrecto"/> : ''}
                <div className="campo">
                    <label htmlFor="">Nombre Gasto</label>
                    <input type="text" 
                            className="u-full-width"
                            placeholder="Ej. Trasporte"
                            onChange = {e => guardarNombre(e.target.value)}
                            value={nombre}
                    />   
                </div>
                <div className="campo">
                    <label htmlFor="">Cantidad Gasto</label>
                    <input type="number" 
                            className="u-full-width"
                            placeholder="Ej. 700"
                            onChange={e => guardarCantidad(parseInt(e.target.value))}
                            value={cantidad}
                    />   
                </div>

                <input type="submit" 
                    value="Agregar Gasto"
                    className="u-full-width button-primary"
                />
            </form>
        </div>
    )
}

Formulario.propTypes = {
    gardarGasto:PropTypes.func.isRequired,
    guardarCrearGasto:PropTypes.func.isRequired,
}


export default Formulario
