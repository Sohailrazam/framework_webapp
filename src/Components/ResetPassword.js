import React from "react";
import {Col , Row , CustomInput, Button , Container } from 'reactstrap';
import './reset.css'
import {useState, useEffect} from 'react';
import { useHistory } from "react-router-dom";
import APIService from "./api";
import { useAlert } from 'react-alert'

export const ResetPassword = (props) => {
    const [new_password1, setNewPassword1] = useState('');
    const [new_password2, setNewPassword2] = useState('');
    const [data, SetData] = useState([]);
    let history = useHistory();
    const alert = useAlert()
    const forgetPassword = () => {
      APIService.ForgetPasswordUser(props.match.params.uid, props.match.params.token,{
        "new_password1": new_password1,
        "new_password2": new_password2,
        "uid": props.match.params.uid,
        "token": props.match.params.token,
      })
      .then(response => {
        response.json().then(resp => {SetData(resp); console.log(resp); });
        console.log(response)
          if(response.status == 200){
              history.push("/login");
              alert.success('Password resets Successfully!');
          }
          else{
            alert.error('Something Wrong!');
          }
          })
      }
    
  return (
    <div className="card">
          <img
            className="logoclass"
            height="30px"
            width="27px"
            src="/instrumentm_framework.svg"
            alt="logo"
          />
      <form>
        
        <div className="form-group text-left">
          <label className="font_all_lbl" style={{color:'yellow'}}>Password</label>
          <input
            type="password"
            className="form-control style_input"
            placeholder="****"
            onChange={e => setNewPassword1(e.target.value)}
            />    
             {data.new_password1 && <span style={{color:'white', fontStyle:'italic', fontSize:'12px'}}>{data.new_password1}</span>}
        </div>
        <div className="form-group text-left">
          <label className="font_all_lbl" style={{color:'yellow'}}>Confirm Password</label>
          <input
            type="password"
            className="form-control style_input"
            placeholder="****" 
            onChange={e => setNewPassword2(e.target.value)}
          />
           {data.new_password2 && <span style={{color:'white', fontStyle:'italic', fontSize:'12px'}}>{data.new_password2}</span>}
        </div>
        <p style={{textAlign:'right'}} className="reset_btn_med">
        <Button color="secondary"style={{ color:"white",listStyle:'none' , backgroundColor:'#32324d'}} onClick={forgetPassword} >Submit</Button>
        </p>
      </form>
    </div>
  );
};