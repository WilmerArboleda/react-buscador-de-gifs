import { useState } from "react"


const objeto = {
    title: "Probando Sharw",
    text: "Probando Compartir",
    url: "https://search-of-gifs.netlify.app/"
}

function Api(objeto){
    if(navigator.share){
        navigator.share(objeto)
        .then(()=>console.log("todo bien"))
        .catch(error => console.log("error", error))
    }else{
        console.log("no soportado por navegador");
    }
}

export const Compartir = () => {
    const [compar, setCompar] = useState()

    const compart = ()=>{
       setCompar( Api(objeto) );
    }

  return {
    compart,
  }
    
  
}
