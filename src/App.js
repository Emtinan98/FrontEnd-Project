import './App.css';
import Home from './component/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Comic from './component/Comic';
import ComicSearch from './component/ComicSearch';
import Top10 from './component/Top10';
import Login from './component/Login';
import Signup from './component/Signup';
import Auth from './component/Auth';
import ComicView from './component/ComicView';
import Fave from './component/Fave';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Fave' element={<Fave/>}></Route>
        <Route path='/comic' element={<Comic/>}></Route>
        <Route path='/auth' element={<Auth/>}></Route>
        <Route path='/top' element={<Top10/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/reg' element={<Signup/>}></Route>
        <Route path='/view' element={<ComicView/>}></Route>
        <Route path='/search' element={<ComicSearch/>}></Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
