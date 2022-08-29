import React from 'react'
import { useState } from 'react'


export const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setInputValue] = useState('')

    const onInputChange = (event)=>{
        //console.log(event.target.value)
        setInputValue(event.target.value)

    }

    const onSubmit = (event)=>{
        event.preventDefault();
        if(inputValue.trim().length <= 1) return;

      //setCategories(categories=> [...categories, inputValue])
      onNewCategory(inputValue.trim())
      setInputValue("");

    }



  return (
    <form onSubmit={onSubmit}>    {/**se puede asi  */}
        <input type="text"
         placeholder="Buscar Gif"
          value={inputValue}
           onChange={(event) => onInputChange(event)}/>   {/** o se puede asi  */}

    </form>
    
  )
}
