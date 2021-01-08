import React from "react";
import { Col, Row, Container } from "reactstrap";
import { Link } from "react-router-dom";

import "./blog.css";
export const Blog = () => {
  return (
    <Container className="themed-container" fluid={true}>

      <Row >
        <Col  className="col-12 col-sm-5" >
          <Row style={{marginTop:'15px'}} >
          <Col xs="6" >
              {/* <div className="languages" style={{ color: "white" }}>
                <a style={{ textDecoration: "none", color: "white" }} href="/">
                  English
                </a>{" "}
                {"| "}
                <a style={{ textDecoration: "none", color: "white" }} href="/">
                  German
                </a>
              </div> */}
            </Col>
            <Col xs="6">
                <p style={{ color: "white",textAlign:'right' }}>
                <Link style={{ fontSize:'30px', textDecoration: "none", color: "white" }} to="/cms">                
                <img src='/add.svg' height="20px" width='15px' alt="add"/>
                </Link>
                </p>
              </Col>
              
          </Row>
          <Row className="card-new-post">
       
 
          <Col  className="col-12 col-sm-5" >
                  <p className="username-post" style={{fontSize:'14px'}}>
                  Posted by &#x3c;username&#x3e;
                  </p>
                  </Col>
                  <Col className="col-12 col-sm-7"  >
                  <div className="toolblog">

<img src='/pen.svg' height="20px" width='15px' alt="add" />

<img style={{ marginLeft: '12px' }} src='/del.svg' height="20px" width='15px' alt="add" />
</div>
                  {/* <p>{(new Date()).toDateString()}</p> */}
                  <p className="dateset">Sunday, the 27th of december 2020
                  <br/>
          
                    
                    2:24 pm
                    {/* </code> */}
                    </p>
                  </Col>
        
        <h6  className="text_blog_post jstfy_content" style={{color:'#d2d2e3',paddingLeft:'25px'}}>Why framework matters? </h6>

  
        <p className="lead  jstfy_content sub-head-style">
        Because the headline only needs  one line here is space to displ(...)

        </p>

            </Row>         
            
          
          <Row className="card-new-post2">
            
 
                  <Col  className="col-12 col-sm-5" >
                  <p className="username-post" style={{fontSize:'14px'}}>
                  Posted by &#x3c;username&#x3e;
                  </p>
                  </Col>
                  <Col className="col-12 col-sm-7"  >
                  <div className="toolblog">

<img src='/pen.svg' height="20px" width='15px' alt="add" />

<img style={{ marginLeft: '12px' }} src='/del.svg' height="20px" width='15px' alt="add" />
</div>
                  {/* <p>{(new Date()).toDateString()}</p> */}
                  <p className="dateset">Sunday, the 27th of december 2020
                  <br/>
          
                    
                    2:24 pm
                    {/* </code> */}
                    </p>
                  </Col>
              
              <h6 className="text_blog_post" style={{color:'#d2d2e3',paddingLeft:'25px'}}>This heading is a lot bigger than the one above - <br/> at this point the text breaks and continues in th(...)</h6>

                  </Row>

                  
            <Row className="card-new-post3">
            
            </Row> 
        </Col>
        <Col className="col-12 col-sm-7">
          <div style={{ color: "white" }}>
        <p className="content-blog" style={{textAlign:'right'}}>
          Do you like this project? - Support us with bitcoin!:)
          <br/>Address: bc1qfadktyn987w3968gngf90fol2m36u4arsspfjn
        </p>
          <div className="content-div-col2">
            <h5 style={{
              textAlign:'left',
              paddingLeft:'19px',
              marginBottom:'0',
              paddingTop:'13px'
            }}>
            Why framework matters ?
            </h5>
            <p className="para">
            Because the headline only needs one line here is space to display Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
<p className="para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
<p className="para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
<p className="para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
<p className="para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
<p className="para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
<p className="para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
<p className="para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
<p className="para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
<p className="para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>

        <p className="para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
<p className="para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
<p className="para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
         
         
          </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
