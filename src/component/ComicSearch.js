import React from 'react';
import { useEffect , useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DataComic from './DataComic';
import {Button,Container,Form,Navbar} from 'react-bootstrap';
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'

function ComicSearch() {

    const [comics, setComics] = useState('');
    const arr = DataComic.data.comic;
    const [found, setFound] = useState(arr);
    useEffect(() =>  {
        const filterres =arr.filter((per)=>
        per.name.toLowerCase().includes(comics));
         setFound(filterres);
    },[comics]);

  return (
    <div classNameName='header1'>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Form classNameName="d-flex" >
                <Form.Control variant="outline-secondary" style={{borderRadius: 40}}
                  type="search"
                  value={comics}
                  onChange={(e)=>{setComics(e.target.value)}}
                  classNameName="input"
                  placeholder="Filter"
                />
              </Form>
            </Navbar.Collapse>
        </Container>
      </Navbar>

        <div className="container1" >
        {found && found.length > 0 ? (
              found.map((arr) => (
                <li key={arr.name} >
        <div className="row row-cols-4 row-cols-md-4 g-4">
        <div className="card">
          <img src={arr.url} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h3 className="card-title">{arr.name}</h3>
            <Rater total={5} rating={arr.rating}/>
            <a  href={arr.pdf} target="_blank" rel="noreferrer">
        <svg className='a1' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-down-circle" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
</svg></a></div></div></div></li>
            ))
          ) : (
            <h3 className='search-filter'>No results found!</h3>
          )}
          
        </div>
        

  </div>
  );
}

export default ComicSearch