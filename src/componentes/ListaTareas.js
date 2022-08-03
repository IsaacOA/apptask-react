import React, { useState } from "react";
import TareaFormulario from "./TareaFormulario";
import '../estilos/ListaTarea.css'
import Tarea from "./Tareas";

function ListaTareas(){

  const[tareas, setTareas] = useState([])

  ///////////////////////////////////////////////////////////////////////////////////////////////////////

  const agregarTarea = tarea => {
    if(tarea.texto.trim()){     //Este if es para saber si esta vacio el input
      tarea.texto = tarea.texto.trim()  //quitamos los espacios

      const tareasActualizadas = [tarea, ...tareas]
      setTareas(tareasActualizadas)
    }
  }

////////////////////////////////////////////////////////////////////////////////////////////////////////

  const eliminarTarea = id => {
    const tareasActualizadas = tareas.filter(tarea => tarea.id !==id)
    setTareas(tareasActualizadas)
  }

////////////////////////////////////////////////////////////////////////////////////////////////////////

  const completarTarea = id => {
    const tareasActualizadas = tareas.map(tarea => {
      if(tarea.id === id){
        tarea.completada = !tarea.completada
      }
      return tarea
    })
    setTareas(tareasActualizadas)
  }

  ////////////////////////////////////////////////////////////////////////////////////////////////////////

    return (
      <>
        <TareaFormulario onSubmit={agregarTarea}/>
        <div className="tareas-lista-contenedor">
          {
            tareas.map((tarea) =>
              <Tarea 
                key={tarea.id}   //CUANDO MOSTRAMOS UNA LISTA Y SEPA EL ORDEN REACT, TENEMOS QUE PASAR ESTE ATRIBUTO
                id={tarea.id}  
                texto={tarea.texto}
                completada={tarea.completada}
                eliminarTarea={eliminarTarea}
                completarTarea={completarTarea}
              />
            )
          }
        </div>
      </>
    )
}

export default ListaTareas