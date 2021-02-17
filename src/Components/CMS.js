import React from 'react'
import './cms.css'
import {FormGroup,Container, Label, Input,Button,Row,Col } from 'reactstrap';
import  {useState, useEffect} from 'react';
import {useCookies} from 'react-cookie';
import APIService from "./api";
import { useAlert } from 'react-alert'
import { useHistory } from "react-router-dom";


export const CMS = (props) => {
  const [token, setToken, removeToken] = useCookies(['token'])
  const [data, SetData] = useState([]);
  const alert = useAlert();
  let history = useHistory();
  const [english_title, setEnglishTitle] = useState('');
  const [english_content, setEnglishContent] = useState('');
  const [german_title, setGermanTitle] = useState('');
  const [german_content, setGermanContent] = useState('');
  const [active, setActive] = useState(true);
  const [author , SetAuthor] = useState(0);

  
  useEffect(() => {
    APIService.detailPost(props.match.params.id)
    .then(resp => resp.json())
    .then(dat => {
      setEnglishTitle(dat.english_title);
      setEnglishContent(dat.english_content);
      setGermanTitle(dat.german_title);
      setGermanContent(dat.german_content);
      SetAuthor(dat.author.id);
      setActive(dat.active);
    })
    .catch(error => console.log(error));
}, [props.match.params.id])


  useEffect(() =>{
    APIService.CurrentUser(token['token'])
    .then(resp => resp.json())
    .then(dat => {
      SetAuthor(dat.userid);
      if(dat.blogger || dat.superblogger){
        setActive(true);
      }
      else{
        setActive(false)
      }
    })
    .catch(error => console.log(error));
  },[]);

  const AddPost = () => {
    return APIService.InsertPost({author,english_content,english_title,german_content,german_title,active})
    .then(response => {response.json().then(resp => {SetData(resp); console.log(resp)}) 
    if(response.status === 201)
      {
        history.push('/blog')
        active ? alert.success('Post successfully Added!') : alert.success('Post successfully Added! Admin will approve it')        
      }
      else{
        alert.error('Something Wrong!');
      }
    })
  }
  const UpdatePost = () => {
    return APIService.UpdatePost( props.match.params.id,{author,english_content, english_title,german_content,german_title,active})
    .then(response => {response.json().then(resp => {SetData(resp); console.log(resp)})
    
      if(response.status === 200)
      {
        history.push('/blog')
        alert.success('Post successfully Updated!');
      }
      else{
        alert.error('Something Wrong!');
      }
    })
  }

    return (
      <Container className="themed-container " fluid={true}>
       <h4 className="heading-4-cls-cms" style={{ textAlign:"left", marginTop:"25px", marginLeft:"15px"}}>What do you want to tell ? </h4>
<Row>
        <Col>
        <div className="card_cms">
        <div className="form-group text-left">

       
          <label className="content_title_cls_cms" style={{textAlign:'left'}}>Title</label>
          <label className="language_cls_cms" style={{float:'right'}}>English</label>
          
  
          <input
            type="name"
            className="form-control style_input_cms"
            onChange={e => setEnglishTitle(e.target.value)}
            value={english_title}
            />
            {data.english_title && <span style={{color:'#F0F0FF', fontStyle:'italic', fontSize:'12px'}}>{data.english_title}</span>}    
        </div>
        <FormGroup className="text-left"  style={{paddingTop:'20px'}}>
        <Label className="content_title_cls_cms" for="exampleText">Content</Label>
        <Input className="text_area_cms" type="textarea" name="text" id="exampleText" 
          onChange={e => setEnglishContent(e.target.value)}
          value={english_content}
        />
        {data.english_content && <span style={{color:'#F0F0FF', fontStyle:'italic', fontSize:'12px'}}>{data.english_content}</span>}    
      </FormGroup>
</div>
        </Col>
      
      <Col>
      <div className="card_cms">
      <div className="form-group text-left">
          <label className="content_title_cls_cms"  style={{textAlign:'left'}}>Title</label>
          <label className="language_cls_cms" style={{float:'right'}}>German</label>
          <input
            type="name"
            className="form-control style_input_cms"
            onChange={e => setGermanTitle(e.target.value)}
            value={german_title}
            />
            {data.german_title && <span style={{color:'#F0F0FF', fontStyle:'italic', fontSize:'12px'}}>{data.german_title}</span>}    
        </div>
        <FormGroup className="text-left"  style={{paddingTop:'20px'}}>
        <Label className="content_title_cls_cms" for="exampleText">Content</Label>
        <Input className="text_area_cms" type="textarea" name="text" id="exampleText" 
          onChange={e => setGermanContent(e.target.value)}
          value={german_content}
        />
        {data.german_content && <span style={{color:'#F0F0FF', fontStyle:'italic', fontSize:'12px'}}>{data.german_content}</span>}    
      </FormGroup>
      
      </div>
      </Col>
      
        </Row> 
     
        { props.match.params.id ? 
          <p style={{paddingBottom:'12px',paddingRight:'15px',textAlign:'right'}}>
         <Button color="secondary" className="submit_button_cms" onClick={UpdatePost}>Update</Button>
      
         </p>
       :
        <p style={{paddingBottom:'12px',paddingRight:'15px',textAlign:'right'}}>
         <Button color="secondary" className="submit_button_cms" onClick={AddPost}>Submit</Button>
         </p>
     }
       
            </Container>
    )
}
