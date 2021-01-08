import React from "react";
import {Col , Row , CustomInput, Button , Container } from 'reactstrap';
import './Signup.css'
export const Signup = () => {
  return (
    <Container className="themed-container" fluid={true}>
       <div className="setsignup">
      <h4 className="reg">Register</h4>

       <div className="cardsignup">
   
      <form>
        {/* <h3> */}
        
        {/* </h3> */}
        {/* <div className="fo" */}
        <Row>
      <Col>
      <div className="form-group text-left">
          <label className="font_all_lbl" style={{color:'yellow'}}>First Name</label>
          <input
          required
            type="Fname"
            className="form-control style_input"
            placeholder="Enter first name"
      
                      />
        </div>
      </Col>

      <Col>
      <div className="form-group text-left">
          <label className="font_all_lbl"  style={{color:'yellow'}}>Last Name</label>
          <input
            type="Lname"
            required
            className="form-control style_input"
            placeholder="Enter last name"
           
                      />
        </div>
      </Col>
      </Row>
        
        
        
        <div className="form-group text-left">
          <label className="font_all_lbl" style={{color:'yellow'}}>Email</label>
          <input
            type="email"
            required
            className="form-control style_input"
            placeholder="Enter your email"
          />    
        </div>
        <div className="form-group text-left">
          <label className="font_all_lbl" style={{color:'yellow'}}>Password</label>
          <input
            type="password"
            required
            className="form-control style_input"
            placeholder="Enter your password"
          />    
        </div>
        <div className="form-group text-left">
          <label className="font_all_lbl" style={{color:'yellow'}}>Confirm Password</label>
          <input
            type="password"
            required
            className="form-control style_input"
            placeholder="Confirm your password"
          />    
        </div>
        
        {/* <span style={{textAlign:'left'}} color="secondary"style={{ color:"white",  backgroundColor:'#32324d'}} className="btnedited">  */}
        {/* <input type="checkbox" id="periph2" name="peripherals" value="keyboard"></input> */}
        {/* <CustomInput type="checkbox" id="exampleCustomCheckbox2" label="I &#039; m not robot" />  */}
          {/* </span> */}
          <Row>
            <Col>
          <div className="robotclass" >
        <CustomInput type="checkbox" id="exampleCustomCheckbox2" label="I &#039;m not robot" /> 

          </div>
            </Col>
            <Col>
        <p style={{textAlign:'right'}}>
        <Button color="secondary"style={{ color:"white",  backgroundColor:'#32324d'  }} className="submit_reg">Register</Button>
        </p>
            </Col>
          </Row>
        
      </form>
    </div>
    </div>
    
    </Container>
  );
};
