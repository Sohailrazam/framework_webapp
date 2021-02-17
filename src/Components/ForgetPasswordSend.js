import React from 'react'
import { Jumbotron, Button, Container } from 'reactstrap';
import './forgetpasswordsend.css'
import {Link} from 'react-router-dom'
export const ForgetPasswordSend = () => {
    return (
        <Container className="themed-container" fluid={true}>
  <Jumbotron>
      <div style={{justifyContent:'center',padding:'4%',paddingTop:'20%'}}>
    
      <h4 className="style_head_two_med_sendforget" >
        {/* style={{display:'inline-block',fontWeight:'lighter'}} */}
    An email with a link to reset your password has been sent to you if the email address provided is valid. Please check your inbox and follow the instructions in the email.
              </h4>
{/* 
      <hr className="my-2" /> */}
    <p style={{display:'block',textAlign:'center',paddingTop:'2%'}}>

        <Link className="stylebuttloginps_sendforget btn btn-outline-secondary" to="/framework">Go to Landing Page</Link>
        <Link className="stylebuttloginps_sendforget btn btn-outline-secondary" to="/login">Login to <span style={{ color: "#E4DC00" }}>framework</span></Link>
    </p>
      </div>
    </Jumbotron>
      
      </Container>
        )
}
