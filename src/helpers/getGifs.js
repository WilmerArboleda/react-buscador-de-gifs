
export const getGifs = async ( category )=>{

    const url = `https://api.giphy.com/v1/gifs/search?api_key=jco4xBxdMkEHcaaSF00xP1U8wII7hWIB&q=${category}&limit=40`

    const resp= await fetch(url);
    
    const { data } = await resp.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    console.log("esto es " + gifs);
    
    return gifs;
}
