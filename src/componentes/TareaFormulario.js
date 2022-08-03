import React, { useState } from "react";
import '../estilos/TareaFormulario.css'
//import uuidv4 from 'uuid'
import {v4 as uuidv4} from 'uuid'

function TareaFormulario({ onSubmit }){

    const [input, setInput] = useState('')

    const manejarCambio = e => {  //FUNCION PARA ENVIAR EL VALOR DEL INPUT
        setInput(e.target.value)
    }

    const manejarEnvio = e => {   //AL MOMENTO DE ENVIAR EL SUBMIT SE ENVIA TODO EL OBJETO QUE SE HACE EN ESTA FUNCION
        e.preventDefault()
        const tareaNueva = {
            id: uuidv4(),
            texto: input,
            completada: false
        }
        onSubmit(tareaNueva)
    
    }

    //AQUI ES DONDE AL PULSAR ENTER SE ENVIA EL OBJETO AL COMPONESTE LISTAREAS.JS 

    return (
        <form 
            className="tarea-formulario"
            onSubmit={manejarEnvio}>
            <input 
                className="tarea-input"
                type='text'
                placeholder="Escribe una tarea"
                name="texto"
                onChange={manejarCambio}
            />
            <button className="tarea-boton">
                Agregar Tarea
            </button>
        </form>
    )
}
export default TareaFormulario