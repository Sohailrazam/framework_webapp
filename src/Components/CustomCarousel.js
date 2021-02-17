
import React from "react";
import Slider from "react-slick";
// import { Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap'
import "./custom-carousel.css";
import  {useState, useEffect} from 'react';
import { useHistory } from "react-router-dom";
import {useCookies} from 'react-cookie';

import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Container,
  CustomInput,
} from "reactstrap";
import { BorderAll } from "@material-ui/icons";
export default function SimpleSlider() {
  let history = useHistory();
  const [token, setToken] = useCookies(['token'])
  const [cusActive,checkHandler]=useState(false);
  const [cusActivetwo,checkHandlertwo]=useState(false);
  const [cusActivethr,checkHandlerthr]=useState(false);


  //

 const checkUser = () =>{
    if(token['token']) {
      history.push("/payment");
    }
    else{
      history.push("/signup");
    }
  }

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Container  fluid={true} style={{ width: "97%", position: "relative" }}>
      <Slider {...settings}>

        <Card className="p-0 c-card-h-cls">
          <CardBody>
            <CardTitle className="cardINFO_head card_cls_left" tag="h1">
              Info 1
            </CardTitle>
            <CardText className="cardINFO_SubHead_inactive card_cls_left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              exercitation ullamco laboris nisi ut aliquip ex ea commo..
            </CardText>
            <CardText className="display-on-active  card_cls_left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor inc In ante metus dictum at dictum.
            </CardText>
          </CardBody>
        </Card>
        <Card className="p-0 c-card-h-cls">
          <CardBody>
            <CardTitle className="cardINFO_head card_cls_left" tag="h5">
              Info 2
            </CardTitle>
            <CardText className="cardINFO_SubHead_inactive card_cls_left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              exercitation ullamco laboris nisi ut aliquip ex ea commo..
            </CardText>
            <CardText className="display-on-active  card_cls_left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor inc In ante metus dictum at dictum.
            </CardText>
          </CardBody>
        </Card>
        <Card className="p-0 c-card-h-cls">
          <CardBody>
            <CardTitle className="cardINFO_head card_cls_left" tag="h5">
              Info 3
            </CardTitle>
            <CardText className="cardINFO_SubHead_inactive card_cls_left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              exercitation ullamco laboris nisi ut aliquip ex ea commo..
            </CardText>
            <CardText className="display-on-active  card_cls_left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor inc In ante metus dictum at dictum.
            </CardText>
          </CardBody>
        </Card>
        <Card className="p-0 c-card-h-cls">
          <CardBody>
            <CardTitle className="cardINFO_head card_cls_left" tag="h5">
              Info 4
            </CardTitle>
            <CardText className="cardINFO_SubHead_inactive card_cls_left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              exercitation ullamco laboris nisi ut aliquip ex ea commo..
            </CardText>
            <CardText className="display-on-active  card_cls_left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor inc In ante metus dictum at dictum.
            </CardText>
          </CardBody>
        </Card>
        <Card className="p-0 c-card-h-cls">
          <CardBody>
            <CardTitle className="cardINFO_head card_cls_left" tag="h5">
              Info 5
            </CardTitle>
            <CardText className="cardINFO_SubHead_inactive card_cls_left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              exercitation ullamco laboris nisi ut aliquip ex ea commo..
            </CardText>
            <CardText className="display-on-active  card_cls_left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor inc In ante metus dictum at dictum.
          
            </CardText>
          </CardBody>
        </Card>
        <Card className="p-0 c-card-h-cls">
          <CardBody>
            <CardTitle className="cardINFO_head card_cls_left" tag="h5">
              Info 6
            </CardTitle>
            <CardText className="cardINFO_SubHead_inactive card_cls_left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              exercitation ullamco laboris nisi ut aliquip ex ea commo..
            </CardText>
            <CardText className="display-on-active  card_cls_left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor inc In ante metus dictum at dictum.
            </CardText>
          </CardBody>
        </Card>

        <Card className="p-0 c-card-h-cls">
          <CardBody>
            <CardTitle className="cardINFO_head card_cls_left" tag="h5">
              Info 7
            </CardTitle>
            <CardText className="cardINFO_SubHead_inactive card_cls_left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              exercitation ullamco laboris nisi ut aliquip ex ea commo..
            </CardText>
            <CardText className="display-on-active  card_cls_left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor inc In ante metus dictum at dictum.
            </CardText>
          </CardBody>
        </Card>
        <Card className="p-0 c-card-h-cls">
          <CardBody>
            <CardTitle className="cardINFO_head card_cls_left" tag="h5">
              Info 8
            </CardTitle>
            <CardText className="cardINFO_SubHead_inactive card_cls_left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              exercitation ullamco laboris nisi ut aliquip ex ea commo..
            </CardText>
            <CardText className="display-on-active  card_cls_left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor inc In ante metus dictum at dictum.
            </CardText>
          </CardBody>
        </Card>
      </Slider>
      <h4 className="my-5 text-white resppkg-cls  respkg-cls2">
        Choose the right package for your needs
      </h4>

      <div style={{ position: "relative" }}>
        <div
          className="row cus-bdr-cls mb-1 m-l-c-16-cls rounded new-cls-med-pkgs"
          style={{ height: 130
             ,background:'rgba(99, 99, 128, 0.1)',
          border: '3px solid rgba(240, 240, 255, 0.1)',
          boxSizing:'border-box',
          borderRadius:'5px',
         }}
        >
      
          <div className="col-4 text-left cls-prob">
            <h3 className="pt-3 pl-3 f-s-cls f-s-clsq text-white">Free Version</h3>
            <span className="pkg-price-lp">{ }</span>
            <div className="pt-2 pl-3 btn-pl">
            <Button className="btn-sub-cls btn btn-secondary"   onClick={checkUser}>Subscribe</Button>
            </div>
          </div>
          <div className="col-4 text-left">
            <h3 className="pt-3 pl-3 f-s-cls f-s-clsq text-white">Maverick</h3>
            <span className="pkg-price-lp">2€ / month</span>
            <div className="pt-2 pl-3 btn-pl">
            <Button className="btn-sub-cls btn-sub-cls-new btn btn-secondary"  onClick={checkUser}>Subscribe</Button>
            </div>
          </div>
          <div className="col-4 text-left">
            <h3 className="pt-3 pl-3  f-s-cls f-s-clsq text-white">Supporter</h3>
            <span className="pkg-price-lp">5€ / month</span>
            <div className="pt-2 pl-3 btn-pl">
            <Button className="btn-sub-cls btn-sub-cls-new btn btn-secondary"  onClick={checkUser}>Subscribe</Button>
            </div>
          </div>
        </div>
        <div className="row cus-bdr-cls-pkg mb-1 m-l-c-16-two-cls rounded new-cls-med-pkgs" style={{background:'rgba(99, 99, 128, 0.1)',
          border: '3px solid rgba(240, 240, 255, 0.1)',
          boxSizing:'border-box',
          borderRadius:'5px',}}>
          <div className="col-sm-2 ">
            <div className="pt-2 text-white text-left">
              <p className="f-14-c-cls">All MVP Features Available</p>
            </div>
          </div>
          <div className="col ">
            <div className="pt-2">
            {/* <i class="fa fa-check" aria-hidden="true"></i> */}
              {/* <CustomInput type="checkbox" id="exampleCustomCheckbox"  /> */}
              {/* <img src={cusActive?"/icon-c.svg" :"/unch.svg"} onClick={()=>checkHandler(!cusActive)} alt=""/> */}
              <img src="/icon-c.svg" alt=""/>

            
            </div>
          </div>
          <div className="col ">
            <div className="pt-2">
              {/* <CustomInput
                type="checkbox"
          
                id="exampleCustomCheckbox2"
              /> */}
              <img src="/icon-c.svg" alt=""/>

              {/* <img src={cusActivetwo?"/icon-c.svg" :"/unch.svg"} onClick={()=>checkHandlertwo(!cusActivetwo)} alt=""/> */}
            </div>
          </div>
          <div className="col ">
            <div className="pt-2">
              {/* <CustomInput
                type="checkbox"
                
                id="exampleCustomCheckbox1"
              /> */}
              
              {/* <img src={cusActivethr?"/icon-c.svg" :"/unch.svg"} onClick={()=>checkHandlerthr(!cusActivethr)} alt=""/> */}
              <img src="/icon-c.svg" alt=""/>

            </div>
          </div>
        </div>
        <div className="row cus-bdr-cls-pkg mb-1 m-l-c-16-two-cls  rounded new-cls-med-pkgs" style={{background:'rgba(99, 99, 128, 0.1)',
          border: '3px solid rgba(240, 240, 255, 0.1)',
          boxSizing:'border-box',
          borderRadius:'5px',}}>
          <div className="col-sm-2">
            <div className="pt-2 text-white text-left">
              <p className="f-14-c-cls">Number of Projects</p>
            </div>
          </div>
          <div className="col ">
            <div className="pt-2 text-white">
              <p className="f-15-c-cls">2</p>
            </div>
          </div>
          <div className="col ">
            <div className="pt-2 text-white">
              <p className="f-15-c-cls">unlimited</p>
            </div>
          </div>
          <div className="col ">
            <div className="pt-2 text-white">
              <p className="f-15-c-cls">unlimited</p>
            </div>
          </div>
        </div>
        <div
          className="row cu-med-cls-pkg crd-brdr-cls"
          style={{ position: "absolute", top: -40 , zIndex:'-1'}}
        >
          <div className="col-sm-2"></div>
          <div className="col">
            <Card
              className="cus-bdr-cls cus-bdr-cls-un"
              style={{background:'rgba(99, 99, 128, 0.1)',
              border: '3px solid rgba(240, 240, 255, 0.1)',
              boxSizing:'border-box',
              borderRadius:'5px', width: "100%", padding: 0, minHeight: 200, height: 290 }}
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
          <div className="col" >
            <Card
              className="cus-bdr-cls cus-bdr-cls-un"
              style={{background:'rgba(99, 99, 128, 0.1)',
              border: '3px solid rgba(240, 240, 255, 0.1)',
              boxSizing:'border-box',
              borderRadius:'5px', width: "100%", padding: 0, minHeight: 200, height: 290 }}
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
          <div className="col">
            <Card
              className="cus-bdr-cls cus-bdr-cls-un"
              style={{ background:'rgba(99, 99, 128, 0.1)',
              border: '3px solid rgba(240, 240, 255, 0.1)',
              boxSizing:'border-box',
              borderRadius:'5px', width: "100%", padding: 0, minHeight: 200, height: 290 }}
            >
              <CardBody style={{
               visibility: "hidden" }}>
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
      </div>
      <div className="mb-5" style={{ height: 100 }}></div>
    </Container>
  );
}
