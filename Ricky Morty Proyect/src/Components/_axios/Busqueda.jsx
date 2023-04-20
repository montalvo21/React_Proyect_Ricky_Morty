import React from 'react'

export default function Busqueda(props) {

    return (
        <div>
            <label htmlFor="">Busqueda: </label>
            <input type="text" onChange={(evento) => props.buscar(evento.target.value)}/>
        </div>
    )
}
