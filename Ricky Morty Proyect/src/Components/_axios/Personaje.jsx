import React from 'react'

export default function Personaje({figura}) {

    return (
        <div className='col-md-4'>
            <div className='card mt-4'>
                <div className='card-header'>
                    <b>{figura.name}</b>
                </div>
                <img src={figura.image} alt="personaje" />
                <div className='card-body'>
                    <p><b>ID: </b>{figura.id}</p>
                    <p><b>Especie: </b>{figura.species}</p>
                    <p><b>Genero: </b>{figura.gender}</p>
                    <p><b>Locacion: </b>{figura.location.name}</p>
                    <p><b>Estado: </b>{figura.status}</p>
                    <p><b>Origin: </b>{figura.origin.name}</p>
                    <p><b>Creacion: </b>{new Date(figura.created).getFullYear()}</p>
                </div>
            </div>
        </div>
    )
}
