import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Rater from 'react-rater'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-rater/lib/react-rater.css';





function Top10() {
    const [comics ,setComics] = useState([]);
    const pic=["https://cdn-icons.flaticon.com/png/128/3840/premium/3840581.png?token=exp=1658334058~hmac=718f485eb99fb3615a15718f2780c0af","https://cdn-icons.flaticon.com/png/128/3841/premium/3841714.png?token=exp=1658334058~hmac=cf742edec5e117ee52dee658c66b6b10","https://cdn-icons.flaticon.com/png/128/3841/premium/3841715.png?token=exp=1658334058~hmac=6632cbb3c0dd227c9e260b20a9a6ae50","https://cdn-icons.flaticon.com/png/128/3841/premium/3841729.png?token=exp=1658334058~hmac=0dec0bf2b32be8fbe31f2b0ad60a6e2e","https://cdn-icons.flaticon.com/png/128/3841/premium/3841730.png?token=exp=1658334058~hmac=e69a7f860e34adf8077ad05e84188b6c"]
    
useEffect(() => {
    axios
    .get("http://127.0.0.1:8000/top10_comic/") 
    .then(res => {  
        console.log(res.data.TOP_10)
        console.log(res.data.TOP_10[0].title)
         setComics(res.data.TOP_10)
})
.catch((err) => { 
    console.log(err);
});    
},[]);

  return (
    <>
    <div className='containerh1'><h1 className='hh'>TOP 5</h1></div>

       <div className="container1">
        {comics.map((e) => (
        <div className="row row-cols-4 row-cols-md-4 g-4">
        <div className="card">
          <img src={e.image} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h3 className="card-title">{e.title}</h3>
            <Rater total={5} rating={e.rating}/> 
            </div></div></div>
            ))}
        </div>
   </>
  )
  }
export default Top10