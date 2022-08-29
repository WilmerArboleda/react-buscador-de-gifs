import React, { useEffect, useState } from 'react'
import { GifItem } from './GifItem';
import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';


export const GifGrid = ({ category }) => {

  const { images, isLoading } = useFetchGifs( category );

  return (
    <>
    <h3>{ category }</h3>
    {
      //isLoading && (<h2>Cargando...</h2>)
      isLoading ? (<h2>Cargando...</h2>) : null
    }
    
    <div className="card-grid">
      {/** asi funciona como yo se y el siguiente es destructurando
       images.map( image => (
        <li key={image.id}>{image.title}</li>

       ))
      */}
      {
        images.map(( image ) => (
          <GifItem key={ image.id } {...image}/> //asi se pasan todas la propiedades ... en el otro archivo solo debe llamar las que necesite
        ))
      }
      
    </div>
    </>
  )
}
