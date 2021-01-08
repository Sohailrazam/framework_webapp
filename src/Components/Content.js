import React from "react";
import { Jumbotron, Button } from "reactstrap";
import "./content.css";
export const Content = () => {
  return (<div>
    <Jumbotron>
      <h1 className="display-5 stylefontmed">Frame your work and see it thrive!</h1>

      <h3 className="styleheadmed">
        Get on top of your project with{" "}
        <code style={{ color: "yellow" }}>framework</code>
      </h3>

      <hr className="my-2" />
      <p className="lead">
        <Button className="stylebuttmed" color="warning">Try it out!</Button>{" "}
        <Button className="getToknow" color="secondary">Get to know framework</Button>
      </p>
    </Jumbotron>
  </div>
  );
};
