import React from "react";

// reactstrap components
import { Row, Col } from "reactstrap";

// core components

function AboutUsHeader(props) {
  return (
    <>
      <div className="page-header page-header-small">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + props.source + ")",
            zIndex: "unset"
          }}
        ></div>
        <div className="content-center">
          <Row>
            <Col className="ml-auto mr-auto" md="8">
              
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default AboutUsHeader;
