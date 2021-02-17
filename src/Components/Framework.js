import React from 'react'
import { Jumbotron, Button, Container, Row,Col } from 'reactstrap';
import './framework.css'
import {Link} from 'react-router-dom'
import SimpleSlider from './CustomCarousel'
import {useCookies} from 'react-cookie';

export const Framework = () => {

  const [token, setToken] = useCookies(['token'])

    return (
      <Container className="themed-container cont-cls" fluid={true}>
      <Jumbotron style={{marginTop:"5%"}}>
        <h1 className="display-5 head_frm_cs head_med_framework" style={{fontSize:' 2.5rem !important',
    fontWeight: 'normal !important'}}>Welcome to <span style={{color:"#E4DC00"}}>framework</span></h1>
        {'  '}
        {token['token'] ? 
       " " : 
        <div  className="line-set" style={{display:'flex',justifyContent:'center'}}>
        
        <h4 className="style_head_two_med" style={{display:'inline'}}>Do you already have an account?</h4>
        {"  "}
        <p className="setbuttonframe" style={{display:'inline'}}>
        <Link className="stylebuttmed btn-tryout btn" style={{backgroundColor:"#E4DC00",width: "163px",margin: '0px 10px'}} to="/signup">Try it out!</Link>
      <p className="or-cls" style={{display:"inline-block",fontSize:'25px',margin: '0px 10px'}}>or</p>   

        <Link  style={{width:"110px",margin: '0px 10px'}} className="login_btn_frme_cls btn btn-secondary" to="/login">
        {/* style={{height:"43px",margin: '0px 10px', width:"110px", backgroundColor:"rgba(99, 99, 128, 0.1)"}} */}
        {/* <Button style={{textDecoration:'none'}} className="stylebuttlogin" outline color="secondary">Login</Button> */}
        Login
        </Link>
        </p>
          </div>
        }
          <h4 className="my-2 frm-res-cls stylefontmed frm-resdef-cls text-white">
          framework does not try to simplify but to present complexity in a simple way!
                </h4>
      </Jumbotron>
      <SimpleSlider/>
      </Container>
      )
}
