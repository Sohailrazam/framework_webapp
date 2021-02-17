import React from 'react'
import { Jumbotron, Button, Container } from 'reactstrap';
import './activation.css'
// import  {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'

export const ActivationPage = () => {

  //  const key = props.match.params.key,
    return (
      <Container className="themed-container" fluid={true}>
  <Jumbotron>
      <div style={{justifyContent:'center',padding:'10%',paddingTop:'20%'}}>
          
      <h4 className="style_head_two_med" style={{display:'inline',fontWeight:'lighter'}}>
      You have successfully activated your account!  
              </h4>

      <hr className="my-2" />
    
      <Link className="stylebuttloginps btn btn-outline-secondary" to="/framework">Go to Landing Page</Link>
        <Link className="stylebuttloginps btn btn-outline-secondary" to="/login">Login to <span style={{ color: "#E4DC00" }}>framework</span></Link>
      </div>
    </Jumbotron>
      
      </Container>
      )
}

