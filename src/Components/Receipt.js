import React from 'react'
import { Col, Button, CustomInput, Form, FormGroup, Label, Input, FormText, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";
import "./payment.css";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,

} from "reactstrap";
export const Receipt = () => {
  return (
    <div style={{ position: "relative", padding: '19px' }}>
      <div className="row cus-bdr-payment-cls mb-1 rounded new-cls-row-st">
        <div className="col-6">
          <div className="pt-2 p-l-c-3-5-cls text-white">
            <p className="f-14-c-cls_payment text-left">Supporter</p>
          </div>
        </div>
        <div className="col-6">
          <div className="pt-2  p-l-2-0-c-cls text-white">
            <p className="f-14-c-cls_payment text-left">5€</p>
          </div>
        </div>
      </div>
      <div className="row cus-bdr-payment-cls mb-1 rounded new-cls-row-st" >
        <div className="col-6">
          <div className="pt-2 p-l-c-3-5-cls text-white">
            <p className="f-14-c-cls_payment text-left">Discount</p>
          </div>
        </div>
        <div className="col-6">
          <div className="pt-2 p-l-2-0-c-cls text-white ">
            <p className="f-14-c-cls_payment text-left">0,5€</p>
          </div>
        </div>
      </div>
      <div className="row cus-bdr-payment-cls rounded new-cls-row-st">
        <div className="col-6">
          <div className="pt-2 p-l-c-3-5-cls text-white">
            <p className="f-14-c-cls_payment text-left" style={{ color: '#E4DC00' }}>Total</p>
          </div>
        </div>
        <div className="col-6">
          <div className="pt-2 p-l-2-0-c-cls text-white">
            <p className="f-14-c-cls_payment text-left" style={{ color: '#E4DC00' }}>4,5€</p>
          </div>
        </div>
      </div>
      <div
        className="row cu-med-cls crd-brdr-cls"
        style={{ position: "absolute", top: -10 }}
      >

        
{/* , zIndex: -1 */}
        <div className="col-3">
          <Card
            className="cus-bdr-payment-cls"
            style={{ width: "336px", padding: 0, minHeight: 142, height: 150, marginRight: '-8px', marginLeft: 'auto' }}
          >
            <CardBody style={{ visibility: "hidden" }}>
              <CardTitle tag="h5">Card title</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                Card subtitle
                </CardSubtitle>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
                </CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </div>
        <div className="col-3">
          <Card
            className="cus-bdr-payment-cls"
            style={{ width: "336px", padding: 0, minHeight: 142, height: 150, marginRight: 'auto', marginLeft: '149px' }}
          >
            <CardBody style={{ visibility: "hidden" }}>
              <CardTitle tag="h5">Card title</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                Card subtitle
                </CardSubtitle>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
                </CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </div>

      </div>
      {/* <div className="mb-5" style={{ height: 100 }}></div> */}
    </div>
  )
}
