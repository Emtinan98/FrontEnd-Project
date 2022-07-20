import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Fave() {
    const [comics ,setComics] = useState([]);

useEffect(() => {
    axios
    .get("http://127.0.0.1:8000/list_favorite/") 
    .then(res => {  
        console.log(res.data)
        console.log(res.data.Favorite[0].comic)
        setComics(res.data.Favorite)
})
.catch((err) => { 
    console.log(err);
});    
},[]);

  return (
    <>
      <div>Comic</div>
        <div className='comicCard'>
       {comics.map((e) => (
        <><h4>{e.comic}</h4>
        </>
      ))}
       </div>
   </>
  )

  }
export default Fave