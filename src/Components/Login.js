import React from "react";
import { NavLink,Link } from "react-router-dom";
import "./login.css";
import {  Button } from 'reactstrap';
import  {useState, useEffect} from 'react';
import { useHistory } from "react-router-dom";
import {useCookies} from 'react-cookie';
import APIService from './api'
import { useAlert } from 'react-alert'

export const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [data, SetData] = useState([]);
  let history = useHistory();
  const [token, setToken] = useCookies(['token'])
  const alert = useAlert()



useEffect(() => {
  if(token['token']) {
    history.push("/")
  }
}, [token['token']])

const login = (e) => {
    e.preventDefault();
    console.log('clicked')
    return APIService.LoginUser({email, password})
    .then(response => {response.json().then(resp => {SetData(resp)
    if(response.status === 200)
    {
      setToken('token',resp.key)
      alert.success('You are successfully logged in!');
    }
  })
    })
  }
  return (
    <div className="card-login" >
       {/*media query class add to div CardLogin */}
         <p className="header-login-cls">
          <img
            className="logoclass-l-in"
            height="37px"
            width="37px"
            src="/instrumentm_framework.svg"
            alt="logo"
            />
          <span className="morning">Good Morning!</span>
            </p>
          {data.non_field_errors && <span style={{color:'white', fontStyle:'italic', fontSize:'12px'}}>{data.non_field_errors}</span>}
      
      <form onSubmit={login}>
       <div className=' form-login-bod'>


        <div className="form-group  text-left">
          <label className="font_all_lbl" style={{color:'#E4DC00'}}>Username</label>
          <input
            type="name"
            className="form-control style_input"
            placeholder="Enter Email"
            onChange={e => setEmail(e.target.value)}
            />
          {data.email && <span style={{color:'white', fontStyle:'italic', fontSize:'12px'}}>{data.email}</span>}    
        </div>
        
        <div className="form-group text-left">
          <label className="font_all_lbl" style={{color:'#E4DC00'}}>Password</label>
          <input
            type="password"
            className="form-control style_input"
            placeholder="************"
            onChange={e => setPassword(e.target.value)}
            />    
              
        </div>
        <p style={{textAlign:'right',paddingTop:'20px',paddingLeft:'8px'}} className="loginmed">
        <Button style={{ listStyle:'none' , width:"140px" }} type="submit"  className="btn login_btn">Login</Button>
        </p>
      <h5 style={{color:'white'}} className="text-right forgotpassword-cls ">
        {/* media qurery classes above forgot-password  forgotpassword*/}
        <Link to="/forgetpass" className="frget_pss" style={{textDecoration:'none'}}>
        Forgot Password?
        </Link>
        </h5>
        </div>
        </form>
        {/* <p style={{textAlign:'center'}}>
        <Link to="/signup"  style={{ color:"white",  backgroundColor:'#32324d'}} className="signup btn btn-outline-secondary">Signup Here
          </Link>
        </p> */}
    {/* </div> */}
  </div>
  );
};
