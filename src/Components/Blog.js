import React from "react";
import { Col, Row, Container, Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Link } from "react-router-dom";
import "./blog.css";
import  {useState, useEffect} from 'react';
import {useCookies} from 'react-cookie';
import APIService from "./api";
import { useHistory } from "react-router-dom"
import { useAlert } from 'react-alert'


export const Blog = () => {
  const [token, setToken, removeToken] = useCookies(['token'])
  const [data, SetData] = useState([]);
  const [latest, LatestData] = useState([]);
  const[posts ,SetPosts] = useState([]);
  const [modal, setModal] = useState(false);
  const [language, setLanguage] = useState(false);
  const toggle = () => setModal(!modal);
  const alert = useAlert();
  let history = useHistory();


  useEffect(() => {
    APIService.CurrentUser(token['token']).then(response => response.json().then(resp => SetData(resp)));
  },[])

  useEffect(() => {
    APIService.CurrentPost().then(response => response.json().then(resp => LatestData(resp)));
  },[])


  useEffect(() => {
    APIService.Posts().then(response => response.json()).then(resp => {
      console.log(resp);
      SetPosts(resp);
    });
  }, [])



  const deleteBtn = (postId) => {
    APIService.DeletePost(postId).then(response => {
      console.log(response);
      if(response.status === 204)
      {
        history.push('/');
        setModal(false);
        alert.success('Post Deleted Successfully!');
      }
    })
  }



  return (
    <Container className="themed-container fonts_all" fluid={true}>

      <Row >
        <Col  className="col-12 col-sm-5" >
          <Row style={{marginTop:'15px'}} >
          <Col xs="6" >
              <div className="languages" style={{ color: "##F0F0FF", cursor:"pointer" }}>
                <p style={{ display: "inline-block", color: "##F0F0FF" }}  onClick={() => {
                  setLanguage(false);
                }}>
                  English
                </p>
                {" "}
                {"|"}
                {" "}
                <p style={{ display: "inline-block", color: "##F0F0FF",cursor:"pointer"  }} onClick={()=>{
                  setLanguage(true);
                }}>
                  German
                </p>
              </div>
            </Col>
            
            {token['token'] && 
            <Col xs="6">
                <p style={{ color: "##F0F0FF",textAlign:'right' }}>
                <Link style={{ fontSize:'30px', textDecoration: "none", color: "##F0F0FF" }} to="/cms">                
                <img src='/add.svg' height="20px" width='15px' alt="add"/>
                </Link>
                </p>
              </Col>
            }
          </Row>
      
    {posts.map(post => {
      return (
        // <div className="allposts" style={{margin:'auto'}}>

        <div >
          
        <Row className="card-new-post" onClick={()=> {
          LatestData(post);
        }}>

          <Col className="col-12 col-sm-3" >
                  <p className="username-post">
                  Posted by {post.author.username}
                  </p>
                  </Col>
                
                  <Col className="col-12 col-sm-9"  >
                    <div style={{display:'flex',justifyContent:'flex-end'}}>
                  {token['token'] && 
                  (data.userid === post.author.id || data.superblogger) &&
                  <div className="toolblog">
                  <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle} className="modal_header">Delete Post</ModalHeader>
        <ModalBody>
        Are you sure you want to delete this post ?
        </ModalBody>
        <ModalFooter>
        <Button style={{ listStyle:'none' , width:"100px" }} type="submit" onClick={() => {
          deleteBtn(post.id);
        }} className="btn blog_btn_del">Delete</Button>
          {' '}
          <Button style={{ listStyle:'none' , width:"100px" }} type="submit" className="btn blog_btn_cancel" onClick={toggle}>Cancel</Button>
          {/* <Button color="secondary" style={{backgroundColor: "rgba(99, 99, 128, 0.1)" }} >Cancel</Button> */}
        </ModalFooter>
      </Modal>
        <Link style={{textDecoration: "none", color: "##F0F0FF"}} to={"/cms/"+post.id} >
        <img src='/pen.svg' height="20px" width='15px' alt="edit" />
        </Link>

        <Link style={{textDecoration: "none", color: "##F0F0FF"}} onClick={
          () => {
            setModal(true);
          }
        }>
        
        <img style={{ marginLeft: '12px' }} src='/del.svg' height="20px" width='15px' alt="add" />
        </Link>
        </div> 
                  }
                  
        <p className="dateset" style={{justifyContent:'flex-end'}} >
        {post.timestamp}
          </p>
          </div>
          </Col>

       
       <h6 className="Side_title" style={{color:'#d2d2e3',paddingLeft:'25px'}}>
    
       { language ?
         post.german_title: post.english_title
        }
      
       </h6>
 
        <p className=" jsds jstfy_content sub-head-style post_paragraph">
        { language ?  post.german_content : post.english_content}
        </p>

        
            </Row>  
          </div>
          
          )})}
      
        </Col>
        <Col className="col-12 col-sm-7">
          <div style={{ color: "#F0F0FF" }}>
        <p className="content-blog" style={{textAlign:'right'}}>
          Do you like this project? - Support us with bitcoin!:)
          <br/>Address: bc1qfadktyn987w3968gngf90fol2m36u4arsspfjn
        </p>
          <div className="content-div-col2">
            <h5 className="titlepost" style={{
              textAlign:'left',
              paddingLeft:'19px',
              marginBottom:'0',
              paddingTop:'13px'
            }}>
             { language ? latest.german_title : latest.english_title }
            </h5>
            <div>

            <pre style={{ fontFamily: 'FontMe !important'}} className="para para_blg">
            { language ? latest.german_content : latest.english_content }
            </pre>
            </div>
          </div>
          </div>
        </Col>
      </Row>
     
    </Container>

     
  );
};
