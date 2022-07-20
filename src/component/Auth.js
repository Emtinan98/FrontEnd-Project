import './AuthStyle.css';
import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import vid1 from './vid1.mov';


function Auth() {
    //Sign up
    const [username1,setUsername1] = useState('')
    const [password1,setPassword1] = useState('')
    const [email1,setEmail1] = useState('')
    const navigate = useNavigate()

    useEffect (()=>{
      setUsername1(localStorage.getItem("username"));
      setPassword1(localStorage.getItem("password"));
      setEmail1(localStorage.getItem("email"));
  },[])
    const signup =()=>{
        axios.post (`http://127.0.0.1:8000/register/`,{
          username:username1,
          password:password1,
          email:email1
      
        }).then(res=>{console.log(res);
          navigate("/");
            })
            .catch(err=>{console.log(err)})
    }


    // Login
 
const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    axios
      .post(`http://127.0.0.1:8000/login/`, { username, password })
      .then((res) => {
        console.log(res);
        localStorage.setItem("id", res.data.id);
        localStorage.setItem("username", res.data.username);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

    

  return (
 <><div className='overlay'></div>
  <div className="login-wrap">
  <div className="login-html">
    <input id="tab-1" type="radio" name="tab" className="sign-in" checked/><label for="tab-1" className="tab">Login</label>
    <input id="tab-2" type="radio" name="tab" className="sign-up"/><label for="tab-2" className="tab">Sign Up</label>
    <div className="login-form">
      <div className="sign-in-htm">
        <div className="group">
          <label for="user" className="label" >Username</label>
          <input id="user" type="text" className="input" onChange={(e)=>{setUsername(e.target.value)}}/>
        </div>
        <div className="group">
          <label for="pass" className="label" >Password</label>
          <input id="pass" type="password" className="input" data-type="password" onChange={(e)=>{setPassword(e.target.value)}}/>
        </div>
        <div className="group">
          <input type="submit" className="button" value="Login" onClick={login}  />
        </div>
      </div>
      {/* /signUp */}
      <div className="sign-up-htm">
        <div className="group">
          <label className="label">Username</label>
          <input type="text" className="input" onChange={(e)=>{setUsername1(e.target.value)}} />
        </div>
        <div className="group">
          <label  className="label">Password</label>
          <input  type="password" className="input" data-type="password" onChange={(e)=>{setPassword1(e.target.value)}}/>
        </div>
        <div className="group">
          <label  className="label">Email Address</label>
          <input  type="text" className="input" onChange={(e)=>{setEmail1(e.target.value)}}/>
        </div>
        <div className="group">
          <input type="submit" className="button" value="Sign Up" onClick={signup}/>
        </div>
      </div>
    </div>
  </div>
</div>
</>
  )
}

export default Auth