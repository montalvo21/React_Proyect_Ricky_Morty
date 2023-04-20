import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Personaje from './Personaje';

export default function ListaPersonajes() {
    /** declarando el estado */
    const [personajes, setPersonajes] = useState([]);

    /** declarando estado para busqueda */
    const [busqueda, setBusqueda] = useState("");

    const [filtro, setFiltro] = useState("");

    /** creando el metodo para obtener la informacion de los personajes de ricky and morty con axios */
    const getPersonajes = () => {
        /**
         * "https://rickandmortyapi.com/api/character/?page=2&orderBy=focDate&limit=6"
         */
        axios.get("https://rickandmortyapi.com/api/character/?page=2")
        .then((response) => {
            /** a diferencia de fetch no necesitamos convertir en JSON ya trae la informacion asi */
            //console.log(response.data.results);
            setPersonajes(response.data.results);
        }).catch((error) => {
            console.log(error);
        })
    }

    /** creando un metodo de busqueda */
    const buscarPersonajes = (e) => {
        console.log(e.target.value);
        setBusqueda(e.target.value);
    }

    const filtrarStatus = (e) => {
        console.log(e.target.value);
        setFiltro(e.target.value);
    }


    /** llamando la funcion de getPersonajes */
    useEffect(() => {
        getPersonajes();
    }, [])

    /** Probando el metodo de busqueda
    let personaje = personajes.filter(propiedad => {
        return propiedad.name.includes(busqueda)
    }) */

    //console.log(personaje)
    return (
        
        <div className='container'>
            <br></br>
            <label htmlFor="">Busqueda: </label>
            <input type="text" onChange={buscarPersonajes}/>

            <select name="" id="" onChange={filtrarStatus}>
                <option value="Alive">Alive</option>
                <option value="dead">Dead</option>
                <option value="unknown">Desconocido</option>
            </select>

            <div className='row'>
            {
                personajes.filter((valor_busqueda) => {
                    return valor_busqueda.name.includes(busqueda)
                
                    /** propiedad => que hace referencia a los elementos de los personajes */
                }).filter((propiedad) => {
                    return propiedad.status.includes(filtro)
                }).map((personaje, indice) => {
                    return <Personaje key={indice} figura={personaje} /> 
                })
            }
            </div>

            {/*
                ejemplo para obtener las imagenes de los personajes de la residencia de location
                location.map((lugar, i) => {
                    lugar.residents.map((residencia, llave) => {
                        residencia.image
                    })
                })
            */}
        </div>
        
    )
}
