import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Comic() {
    const [comics ,setComics] = useState([]);

useEffect(() => {
    axios
    .get("http://127.0.0.1:8000/all_comic/") // git data
    .then(res => {  // bring data to borwser
        console.log(res.data)
        console.log(res.data.Comics[0].title)
        setComics(res.data.Comics)
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
        <><h4>{e.title}</h4>
        <img src={e.image}></img>
        <p>{e.rating}</p>
        </>
      ))}
       </div>
   </>
  )

  }
export default Comic