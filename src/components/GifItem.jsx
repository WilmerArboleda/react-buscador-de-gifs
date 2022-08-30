import React from 'react'
import { Compartir } from '../helpers/Compartir'

export const GifItem = ({title,url}) => {

    //console.log({title, url})
    const { compart } = Compartir();

  return (
    <div className='card'>
        <img src={url} alt={title}/>
        <p>{title}</p>
        <button onClick={compart}> Compartir </button>
    </div>
  )
}
