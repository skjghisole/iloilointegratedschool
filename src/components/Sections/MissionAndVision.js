import React from "react";

// reactstrap components
import {
  Card,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col,
} from "reactstrap";
import Asset4 from 'assets/img/iisAssets/asset_4.jpg';
import Asset5 from 'assets/img/iisAssets/asset_5.jpg';

// core components
// 
// 

function AboutUsHeader(props) {
  return (
    <>
        <div className="projects-4">
          <Container fluid>
            <Row>
              <Col className="px-0" md="6">
                <Card
                  className="card-fashion card-background"
                  style={{
                    backgroundImage:
                      "url(" + Asset5 + ")",
                  }}
                >
                    <CardBody className="onlyMobile">
                      <CardTitle className="text-left" tag="div">
                        <h2>MISSION</h2>
                      </CardTitle>
                  </CardBody>
                </Card>
              </Col>
              <Col className="px-0" md="6">
                <div className="card-container">
                  <Card className="card-fashion card-fashion-asset-mobile">
                    <CardTitle tag="div">
                      <h5
                       style={{
                          textAlign: "justify",
                          textIndent: "50px"
                        }}
                      >
                        The IIS has a mission to develop a family of learners by awakening and strengthening their multiple intelligences in a nurturing and stimulating environment.
Learners will be equipped to integrate their intelligences into daily living and the appropriate application to solving problems and meeting the challenges of the real world.
                      </h5>
                    </CardTitle>
                  </Card>
                  <Card
                    className="card-fashion card-fashion-no-mobile"
                     style={{
                      backgroundColor: "#64a0dc"
                    }}
                  >
                    <CardTitle tag="h4" style={{ color: "white", letterSpacing: "2px", fontSize: "40px" }}>MISSION</CardTitle>
                  </Card>
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="px-0 card-with-order-2" md="6">
                <div className="card-container">
                  <Card
                    className="card-fashion card-fashion-no-mobile"
                    style={{
                      backgroundColor: "#64a0dc"
                    }}
                  >
                    <CardTitle tag="h4" style={{ color: "white", letterSpacing: "2px", fontSize: "40px" }}>VISION</CardTitle>
                  </Card>
                  <Card className="card-fashion arrow-left card-fashion-asset-mobile card-with-order-2">
                    <CardTitle tag="div">
                      <h5
                        style={{
                          textAlign: "justify",
                          textIndent: "50px"
                        }}
                      >
                        The IIS envisions every student to be aware of his/her innate intelligence, develop genuine love for learning and be equipped with life skills for him/her to be a socially responsive and productive member of society.
                      </h5>
                    </CardTitle>
                  </Card>
                </div>
              </Col>
              <Col className="px-0 card-with-order-1" md="6">
                <Card
                  className="card-fashion card-background card-background-modified"
                  style={{
                    backgroundImage:
                      "url(" + Asset4 + ")",

                  }}
                >
                   <CardBody className="onlyMobile">
                      <CardTitle className="text-left" tag="div">
                        <h2>VISION</h2>
                      </CardTitle>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
    </>
  );
}

export default AboutUsHeader;
