import React, { useEffect, useState } from 'react';
import Character from './Character';

export default function Lista() {
    const [characters, setCharacters] = useState([]);

    /** cuando trabajamos con fetch tenemos que declarar la informacion con json */
    const getCharacters = async () => {
        let resultado = await fetch("https://rickandmortyapi.com/api/character/");
        let datos = await resultado.json();
        console.log(datos);
        setCharacters(datos.results);
    }

    //getCharacters();
    useEffect(() => {
        getCharacters()
    }, [])

    //console.log(characters)
    return (
        <div className='container'>
            <br></br>
            <div className='row'>
            {
                characters.map((personaje, indice) => {
                    return <Character key={indice} {...personaje} /> 
                })
            }
            </div>
        </div>
    )
}
