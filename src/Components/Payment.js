import React, { useState } from "react";
import {  Modal, ModalHeader, ModalBody, ModalFooter,Col, Button, CustomInput, Form, FormGroup, Label, Input, FormText, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";
import "./payment.css";
import { Receipt } from "./Receipt";
import StripeCheckout from "react-stripe-checkout";
import StripeComp from "./StripeComp";
export const Payment = () => {
  const [show,setshowitem]=useState(true)

  const toggle = () => setModal(!modal);
 

  const [modal, setModal] = useState(false);

  return (
    <Container style={{ paddingTop: '5px', justifyContent: 'space-around' }} className="themed-container" fluid={true}>
      <Row>
        <Col className="col-12 summary col-sm-5" >
          <div className="border-cls p-2">
          {/* {show? <StripeComp/> : <><h4>$13</h4> <img src="/unch.svg" /> <button onClick={()=>setshowitem(true)}>purchse</button></>} */}

            <p className="payment-desc-cls" style={{ textAlign: 'left',paddingLeft:'12px', }}>
       
              <h3 className="heading_payment_cls" >
                Summary
        </h3>
              <p className="contentPayment">

                <span style={{ color: "#E4DC00" }}>framework</span> - Your project management tool for work from a birds eye view<br /><br />


        With the Maverick package you can achieve any of your personal goals!
        It is upto you whether your goal consists of several milestones, or of further sub-goals, which in turn contain their own milestones. Any complexity is represented in a way that makes it easy for you to keep the threads together and to always know how good your goal achievement probability is and which adjustment you should make at any given moment!<br /><br /> {' '}

        Ready for an adventure? :)<br />
        Take your goals in hand and start making them reality!

        </p>
            </p>
          </div>
        </Col>

        <Col className=" method text-white col-12 col-sm-7">
          <div className="border-cls main-cls-pmnt p-2" style={{ textAlign: 'left' }}>
            <h3 className="pay_method_headf_cls">
              Choose a payment method
           </h3>
            <FormGroup check className="set-payment-f-cls">
              <Label check>
                <Input className="style-in-cls" type="radio" name="radio2" />
                <p style={{ paddingLeft: '20px', display: 'inline-block' }}>
                  {/* <img src="/radio.svg" alt="" /> */}
                  <span className="payment_ways_cls" style={{ paddingLeft: '20px' }}>
                  
                  Stripe
                 </span>
                </p>
                <br />
                <p className="paypal_details_cls">
                If you continue you will be forwarded to Stripe where your purchase can be finalized.  
                </p>
                 <p style={{textAlign:'right'}}>

<Link className="submit_btn_pay btn btn-secondary" onClick={toggle} >Pay with Stripe</Link>
{/* to="/purchase-done"  */}
  {/* {
      show? */}
    <Modal isOpen={modal} toggle={toggle} >
{/* {
      :
      console.log('none pay')
      
}
show?  : */}
        <ModalHeader toggle={toggle}>Pay with stripe</ModalHeader>
        <ModalBody>
        Add your payment details
        </ModalBody>
        <StripeComp/>
        <ModalFooter>
          <Button color="primary" onClick={()=>setshowitem(false)} >Do Something</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
</p>
{/* style={{width:'20vw',padding:'7px',backgroundColor:'#373752', color:"#fff"}} */}
              </Label>

            </FormGroup>
            <FormGroup className="set-payment-f-cls" check>
              <Label check>
                {/* <CustomInput className="CustomInput" type="radio" id="exampleCustomRadio" name="customRadio" label="Select this custom radio" /> */}
                <Input className="style-in-cls" type="radio" name="radio2" />
                <p style={{ paddingLeft: '20px', display: 'inline-block' }}>
                  {/* <img src="/radio.svg" alt="" /> */}
                  <span className="payment_ways_cls" style={{ paddingLeft: '20px' }}>
 
                    Visa Card / Master Card
                 </span>
                </p>
                <br />
                <p>
                </p>
              </Label>

            </FormGroup>
            <FormGroup className="set-payment-f-cls" check>
              <Label check>
                <Input className="style-in-cls" type="radio" name="radio2" />
                <p style={{ paddingLeft: '20px', display: 'inline-block' }}>
                  {/* <img src="/radio.svg" alt="" /> */}
                  <span className="payment_ways_cls" style={{ paddingLeft: '20px' }}>

                    Bitcoin
                 </span>
                </p>
                <br />
                <p>

                </p>
              </Label>

            </FormGroup>
            <FormGroup className="set-payment-f-cls" check>
              <Label check>
                <Input className="style-in-cls" type="radio" name="radio2" />
                <p style={{ paddingLeft: '20px', display: 'inline-block' }}>
                  {/* <img src="/radio.svg" alt="" /> */}
                  <span className="payment_ways_cls" style={{ paddingLeft: '20px' }}>

                    Google Pay
                 </span>
                </p>
                <br />
                <p>
                </p>
              </Label>
            </FormGroup>
            <FormGroup className="set-payment-f-cls" check>
              <Label check>
                <Input className="style-in-cls" type="radio" name="radio2" />
                <p style={{ paddingLeft: '20px', display: 'inline-block' }}>
                  {/* <img src="/radio.svg" alt="" /> */}
                  <span className="payment_ways_cls" style={{ paddingLeft: '20px' }}>
                    Apple Pay
                 </span>
                </p>
                <br />
                <p>
                </p>
              </Label>
            </FormGroup>
            <Receipt />
          </div>
        </Col>
      </Row>
    </Container>
  );
};
