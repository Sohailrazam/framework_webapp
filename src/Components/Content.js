import React from "react";
import { Jumbotron, Button } from "reactstrap";
import "./content.css";
import {Link} from 'react-router-dom'
import {useCookies} from 'react-cookie';

export const Content = () => {  

  const [token, setToken] = useCookies(['token'])

  return (
    <Jumbotron style={{marginTop:"17%"}}>
      <h1 className="display-6 btn-stl-new stylefontmed">Frame your work and see it thrive!</h1>
      <h5 className="styleheadmed btn2-stl-new ">
        Get on top of your project with{" "}
        <span style={{ color: "#E4DC00" }}>framework</span>
      </h5>
      <p className="lead">
        {token['token'] ? 
       " " :  <Link className="stylebuttmed btn-tryout btn" style={{backgroundColor:"#E4DC00", width: "163px"}} to="/signup">Try it out!</Link> }
        <Link style={{marginLeft:'9px'}} className="getToknow getToKnowf btn btn-secondary" to="/framework">Get to know framework</Link>
      </p>
    </Jumbotron>
  );
};
