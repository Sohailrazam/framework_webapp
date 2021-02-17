import React from 'react'
import { Jumbotron, Button, Container } from 'reactstrap';
import './linkexpire.css'

export const LinkExpired = () => {
    return (
        <Container className="themed-container" fluid={true}>
  <Jumbotron>
      <div style={{justifyContent:'center',padding:'15%'}}>
          
      <h4 className="style_head_two_med" style={{display:'block',fontWeight:'lighter'}}>
      Sorry, your link has been expired.
              </h4>
   <Button className="stylebuttloginac " >Resend verification e-mail
</Button>
      </div>
    </Jumbotron>
      
      </Container>
     )
    }
    