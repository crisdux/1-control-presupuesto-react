import React, { Fragment } from 'react'
import {revisarPresupuesto} from '../helpers'
import PropTypes from 'prop-types'
function ControlPresupuesto({presupuesto,restante}) {
    return (
        <Fragment>
            <div className="alert alert-primary">
                <p>Presupuesto: ${presupuesto}</p>
            </div>
            <div className={revisarPresupuesto(presupuesto,restante)}>
                <p>Restante: ${restante}</p>
            </div>
        </Fragment>
    )
}

ControlPresupuesto.propTypes = {
    presupuesto: PropTypes.number.isRequired,
    restante: PropTypes.number.isRequired,
}

export default ControlPresupuesto
