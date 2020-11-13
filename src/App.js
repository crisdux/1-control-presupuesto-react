import React, {useState, useEffect} from 'react';
import './App.css';
import Pregunta from './components/Pregunta'
import Formulario from './components/Formulario'
import Listado from './components/Listado'
import ControlPresupuesto from './components/ControlPresupuesto'
function App() {

  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);
  //carga condicional de componentes:
  const [mostrarpregunta, actualizarPregunta] = useState(true); //por defecto la pregunta se muestra
  const [gastos, guardarGastos] = useState([]);
  //
  const [gasto, gardarGasto] = useState({});
  const [creargasto, guardarCrearGasto] = useState(false);


  useEffect(() => {
    if(creargasto){
      //agrega el nuevo presupuesto
      guardarGastos([
        ...gastos, gasto
      ]);
      //actualiza el restante
      const presupuestoRestante = restante - gasto.cantidad;
      guardarRestante(presupuestoRestante);

      guardarCrearGasto(false);
    }
  }, [gasto,creargasto,gastos,restante]);

 

  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>
      </header>

      <div className="contenido-principal contenido">
        { mostrarpregunta ? 
          (
              <Pregunta guardarPresupuesto={guardarPresupuesto} 
                      guardarRestante={guardarRestante}
                      actualizarPregunta={actualizarPregunta}
              />
          ) : 
          (
              <div className="row">
              <div className="one-half column">
                <Formulario gardarGasto={gardarGasto}
                            guardarCrearGasto={guardarCrearGasto}
                />
              </div>
              <div className="one-half column">
                <Listado gastos={gastos}/>
                <ControlPresupuesto presupuesto={presupuesto} restante={restante}/>
              </div>
            </div>
          )
        }
      
      </div>
    </div>
  );
}

export default App;
