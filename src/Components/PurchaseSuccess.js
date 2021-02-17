import React from 'react'
import { Jumbotron, Button, Container } from 'reactstrap';
import './purchasesuccess.css'

import {Link} from 'react-router-dom'
export const PurchaseSuccess = () => {
    return (
        <Container className="themed-container" fluid={true}>
  <Jumbotron>
      <div style={{justifyContent:'center',padding:'4%',paddingTop:'20%'}}>
          <img style={{paddingRight:'19px',marginBottom:'5px'}} src="/success.svg" alt=""/>
      <h4 className="style_head_two_med" style={{display:'inline-block'}}>
      Your purchase was successful. Thank you very much!
              </h4>
{/* 
      <hr className="my-2" /> */}
    <p style={{display:'block',textAlign:'center'}}>

    <Link className="stylebuttloginps btn btn-outline-secondary" to="/framework">Go to Landing Page</Link>
        <Link className="stylebuttloginps btn btn-outline-secondary" to="/login">Login to <span style={{ color: "#E4DC00" }}>framework</span></Link>
    </p>
      </div>
    </Jumbotron>
      
      </Container>
        )
}
