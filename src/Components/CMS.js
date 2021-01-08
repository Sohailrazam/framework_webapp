import React from 'react'
import './cms.css'
import {FormGroup,Container, Label, Input,Button } from 'reactstrap';

export const CMS = () => {
    return (
      <Container className="themed-container" fluid={true}>
        <div className="card_cms">
             <div className="form-group text-left">
          <label  style={{color:'#babad8'}}>Title</label>
          <input
            type="name"
            className="form-control style_input_cms"
            />
        </div>
        <FormGroup className="text-left">
        <Label style={{color:'#babad8'}}  for="exampleText">Content</Label>
        <Input className="text_area_cms" type="textarea" name="text" id="exampleText" />
      </FormGroup>
      

         <p style={{padding:'3px',textAlign:'right'}}>
         <Button color="secondary"style={{ color:"white",  backgroundColor:'#32324d'}} className="submit submit_button_cms">Submit</Button>
         </p>
        
        </div>
            </Container>
    )
}
