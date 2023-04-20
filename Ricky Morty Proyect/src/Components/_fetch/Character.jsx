import React from 'react'

export default function Character(props) {

    return (
        <div className='col-md-4'>
            <div className='card mt-4'>
                <div className='card-header'>
                    <b>{props.name}</b>
                </div>
                <img src={props.image} alt="personaje" />
                <div className='card-body'>
                    <p><b>ID: </b>{props.id}</p>
                    <p><b>Especie: </b>{props.species}</p>
                    <p><b>Genero: </b>{props.gender}</p>
                    <p><b>Locacion: </b>{props.location.name}</p>
                    <p><b>Estado: </b>{props.status}</p>
                    <p><b>Origin: </b>{props.origin.name}</p>
                    <p><b>Creacion: </b>{new Date(props.created).getFullYear()}</p>
                </div>
            </div>
        </div>
    )
}
