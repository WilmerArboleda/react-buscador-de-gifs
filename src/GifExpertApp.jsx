import React from 'react'
import { useState } from 'react';
import { AddCategory, GifGrid } from './components'; // debiste de crear el archivo de barril
//import { AddCategory } from './components/AddCategory'
//import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([])

    const onAddCategory = (newCategory)=>{
      if(categories.includes(newCategory)) return

        setCategories([newCategory, ...categories ]) 
        //setCategories(['batman',...categories ]) 
        //setCategories(cat => [...cat, 'batman'])
    }

  return (
    <>
    {/**titulo */}
    <div className="titulo"><h1>GifExpertApp</h1></div>

    {/**input */}
    <AddCategory onNewCategory={ onAddCategory }
      //setCategories={ setCategories } 
      />

    {/**listado de gif */}
        
        {categories.map((category) => {
            return <GifGrid key={category} category={category}/>
        }) }
    
    </>
  )
}

