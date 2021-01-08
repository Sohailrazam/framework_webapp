import React from "react";
import "./Forget.css";
import { Col, Row, Button, Container } from "reactstrap";

export const ForgetPassword = () => {
  return (
    <Container className="themed-container" fluid={true}>
      <div>
        <div className="setforget">

      
        <h4 className="reg">Forget Password?</h4>

        <div className="cardforget">
          <div className="form-group text-left">
            <label style={{ color: "yellow" }}>Email</label>
            <input
              type="email"
              className="form-control style_input"
              placeholder="Enter your email"
            />
          </div>

          <Row></Row>
        </div>
        <Col>
          <p className="media_forget_btn" style={{ padding: "1%", textAlign: "right" }}>
            <Button
              color="secondary"
              style={{ width:'28%',color: "white", backgroundColor: "#32324d" }}
              className="submit_btn_forgt"
            >
              Send Email
            </Button>
          </p>
        </Col>
        </div>
      </div>
    </Container>
  );
};
