import React from "react";
import "./Forget.css";
import { Col, Row, Button, Container } from "reactstrap";
import {useState, useEffect} from 'react';
import { useHistory } from "react-router-dom";
import APIService from "./api";
import { useAlert } from 'react-alert'

export const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  let history = useHistory();
  const [data, SetData] = useState([])
  const alert = useAlert()


  const submitEmail = () => {
    APIService.ResetPasswordUser({email})
    .then(response => response.json().then(resp => {
      console.log(data);
      if(response.status == 200){
        history.push('/forgetpasssend');
        alert.success('Email sent successfully Check Your MailBox!');
      }
      else {
        SetData(resp);
        alert.error(resp.email);
      }
    }))
  }
  return (
    <Container className="themed-container" fluid={true}>
      <div>
        <div className="setforget">

        <h4 className="reg">Forgot Password?</h4>

        <div className="cardforget">
          <div className="form-group text-left">
            <label style={{ color: "#E4DC00" }}>Email</label>
            <input
              type="email"
              className="form-control style_input"
              placeholder="Enter your email"
              onChange={e => setEmail(e.target.value)}
            />
            {data.email && <span style={{color:'#F0F0FF', fontStyle:'italic', fontSize:'12px'}}>{data.email}</span>}
          </div>

          <Row></Row>
        </div>
        <Col>
          <p className="media_forget_btn" style={{ padding: "1%", textAlign: "right" }}>
            <Button
              color="secondary"
        
              style={{ borderRadius:'5px',color:"#F0F0FF", backgroundColor: "rgba(99, 99, 128, 0.1)" }}
              className="submit_btn_forgt btn-cls-cmpfrgt"
            onClick={submitEmail}
            >
              Send Email
            </Button>
          </p>
        </Col>
        </div>
      </div>
    </Container>
  );
};
