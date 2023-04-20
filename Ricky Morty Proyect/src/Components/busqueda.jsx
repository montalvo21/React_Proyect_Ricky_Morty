import React, { Component } from 'react'

export default class busqueda extends Component {
    constructor(props){
        super(props)

        this.state = {
            //suponiendo que tenemos toda la lista de los personajes
            personajes: [],
            busqueda: ""
        }
    }

    buscarPersonajes = (evento) => {
        this.setState({
            busqueda: evento.target.value
        })
    }

    render() {
        return (
            <div>
                <input type="text" onChange={buscarPersonajes}/>
                <h1>Lista de personajes</h1>
                {
                    personajes.filter((valor) => {
                        return valor.name.includes(this.state.busqueda)
                    }).map((personaje, index) => {
                        return (
                            <div>
                                <h1>{personaje.name}</h1>
                                <p>{personaje.species}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
