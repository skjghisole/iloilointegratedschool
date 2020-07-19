import React from "react";
// react plugin used to create DropdownMenu for selecting items

import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

// reactstrap components
import {
  Card,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import NavBar from "components/Navbars/ScrollTransparentNavbar.js";
import AboutUsHeader from "components/Headers/AboutUsHeader.js";
import AssetHeader from "components/Headers/AssetHeader.js";
import MissionAndVision from "components/Sections/MissionAndVision.js";
import Footer from "components/Footers/Footer.js";
import Asset1 from "assets/img/iisAssets/asset_1.jpg";
import Asset2 from "assets/img/iisAssets/asset_2.jpg";
import Asset3 from "assets/img/iisAssets/asset_3.jpg";
import AccountPlaceholder from "assets/img/iisAssets/account_placeholder.png"

const MapWrapper = withScriptjs(
  withGoogleMap((props) => (
    <GoogleMap
      defaultZoom={13}
      defaultCenter={{ lat: 40.748817, lng: -73.985428 }}
      defaultOptions={{
        scrollwheel: false,
        styles: [
          {
            featureType: "water",
            elementType: "geometry",
            stylers: [{ color: "#e9e9e9" }, { lightness: 17 }],
          },
          {
            featureType: "landscape",
            elementType: "geometry",
            stylers: [{ color: "#f5f5f5" }, { lightness: 20 }],
          },
          {
            featureType: "road.highway",
            elementType: "geometry.fill",
            stylers: [{ color: "#ffffff" }, { lightness: 17 }],
          },
          {
            featureType: "road.highway",
            elementType: "geometry.stroke",
            stylers: [{ color: "#ffffff" }, { lightness: 29 }, { weight: 0.2 }],
          },
          {
            featureType: "road.arterial",
            elementType: "geometry",
            stylers: [{ color: "#ffffff" }, { lightness: 18 }],
          },
          {
            featureType: "road.local",
            elementType: "geometry",
            stylers: [{ color: "#ffffff" }, { lightness: 16 }],
          },
          {
            featureType: "poi",
            elementType: "geometry",
            stylers: [{ color: "#f5f5f5" }, { lightness: 21 }],
          },
          {
            featureType: "poi.park",
            elementType: "geometry",
            stylers: [{ color: "#dedede" }, { lightness: 21 }],
          },
          {
            elementType: "labels.text.stroke",
            stylers: [
              { visibility: "on" },
              { color: "#ffffff" },
              { lightness: 16 },
            ],
          },
          {
            elementType: "labels.text.fill",
            stylers: [
              { saturation: 36 },
              { color: "#333333" },
              { lightness: 40 },
            ],
          },
          { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
          {
            featureType: "transit",
            elementType: "geometry",
            stylers: [{ color: "#f2f2f2" }, { lightness: 19 }],
          },
          {
            featureType: "administrative",
            elementType: "geometry.fill",
            stylers: [{ color: "#fefefe" }, { lightness: 20 }],
          },
          {
            featureType: "administrative",
            elementType: "geometry.stroke",
            stylers: [{ color: "#fefefe" }, { lightness: 17 }, { weight: 1.2 }],
          },
        ],
      }}
    >
      <Marker position={{ lat: 40.748817, lng: -73.985428 }} />
    </GoogleMap>
  ))
);

function AboutUs() {
  React.useEffect(() => {
    document.body.classList.add("about-us");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("about-us");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <NavBar />
      <div className="wrapper">
        <AboutUsHeader />
        <div className="section">
          <div className="about-description text-center">
            <div className="features-3">
              <Container>
                <Row>
                  <Col className="mr-auto ml-auto" md="8">
                    <h2 className="title">Creativity begins with Affinity</h2>
                    <h4 className="description">
                     We believe that every child is a unique individual with strengths, weaknesses, aptitudes, interests and capabilities
                    </h4>
                  </Col>
                </Row>
                <Row>
                   <Col md="4">
                    <div className="info info-hover">
                      <div className="icon icon-info icon-circle">
                        <i className="now-ui-icons education_atom"></i>
                      </div>
                      <h4 className="info-title">Multiple Intelligences</h4>
                      <p className="description">
                        Breaking from traditional definitions of intelligence through a non-linear way of learning.
                      </p>
                    </div>
                  </Col>
                  <Col md="4">
                    <div className="info info-hover">
                      <div className="icon icon-success icon-circle">
                        <i className="now-ui-icons business_bulb-63"></i>
                      </div>
                      <h4 className="info-title">Experiential Learning</h4>
                      <p className="description">
                        Learning through reflection on hands-on activities.
                      </p>
                    </div>
                  </Col>
                  <Col md="4">
                    <div className="info info-hover">
                      <div className="icon icon-warning icon-circle">
                        <i className="now-ui-icons users_single-02"></i>
                      </div>
                      <h4 className="info-title">Child Centered</h4>
                      <p className="description">
                        Promoting the development of a child's personal qualities rather than training or information.
                      </p>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
          <div className="projects-5">
            <Container>
              <Row>
                <Col className="ml-auto mr-auto text-center" md="8">
                  <h2 className="title">What are our Goals?</h2>
                  <h4 className="description">
                    Iloilo Integrated School is the pioneer school in advocating the Multiple Intelligences theory in the City. We aim to facilitate the growth of the children's Multiple Intelligences through activity based hands-on learning.
                  </h4>
                  <div className="section-space"></div>
                </Col>
              </Row>
              <Row>
                <Col className="ml-auto" md="5">
                  <Card
                    className="card-raised"
                  >
                  <div className="card-image">
                    <img
                      alt="..."
                      className="img rounded"
                      src={Asset1}
                    ></img>
                  </div>
                  </Card>
                </Col>
                <Col className="mr-auto" md="5">
                  <div className="info info-horizontal">
                    <div className="icon icon-warning">
                      <i className="now-ui-icons education_agenda-bookmark"></i>
                    </div>
                    <div className="description">
                      <h4 className="info-title">
                        Knowledge
                      </h4>
                      <p className="description">
                        Build Knowledge and depth for understanding in the core disciplines and Multiple Intelligences.
                      </p>
                    </div>
                  </div>
                  <div className="info info-horizontal">
                    <div className="icon icon-warning">
                      <i className="now-ui-icons ui-2_chat-round"></i>
                    </div>
                    <div className="description">
                      <h4 className="info-title">Communication</h4>
                      <p className="description">
                        Communicate effectively through listening, speaking, writing, reading, visual, musical and symbolic forms.
                      </p>
                    </div>
                  </div>
                 
                </Col>
              </Row>
              <hr></hr>
              <Row>
                <Col className="ml-auto mt-5 card-with-order-2" md="5">
                   <div className="info info-horizontal">
                    <div className="icon icon-danger">
                      <i className="now-ui-icons users_circle-08"></i>
                    </div>
                    <div className="description">
                      <h4 className="info-title">Independence</h4>
                      <p className="description">
                        Become Independent learners who can think critically and creatively, undestand complex topics and apply knowledge to novel situations.
                      </p>
                    </div>
                  </div>
                  <div className="info info-horizontal">
                    <div className="icon icon-danger">
                      <i className="now-ui-icons ui-2_favourite-28"></i>
                    </div>
                    <div className="description">
                      <h4 className="info-title">Values</h4>
                      <p className="description">
                        Understand and value our connection to earth, spirit and humanity; and act as responsible global citizens who value diversity.
                      </p>
                    </div>
                  </div>
                </Col>
                <Col className="mr-auto card-with-order-1" md="5">
                  <Card
                    className="card-raised"
                  >
                    <div className="card-image">
                      <img
                        alt="..."
                        className="img rounded"
                        src={Asset3}
                      ></img>
                    </div>
                  </Card>
                </Col>
              </Row>
              <hr />
            </Container>
          </div>
          <AssetHeader source={Asset2} />
          <div className="about-team team-4">
            <Container>
              <Row>
                <Col className="ml-auto mr-auto text-center" md="8">
                  <h2 className="title">Here are our Rockstars</h2>
                  <h4 className="description">
                    
                  </h4>
                </Col>
              </Row>
              <Row>
                <Col className="ml-auto mr-auto" md="6" xl="4">
                  <Card className="card-profile card-plain">
                    <Row>
                      <Col md="12">
                        <div className="card-image">
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            <img
                              alt="..."
                              className="img img-raised rounded"
                              src={AccountPlaceholder}
                            ></img>
                          </a>
                        </div>
                             <CardBody>
                          <CardTitle tag="h4">RONNIE Z. SAMORO</CardTitle>
                          <h6 className="category">President, Board of Trustees</h6>
                        </CardBody>
                      </Col>
                    </Row>
                  </Card>
                </Col>
                <Col className="ml-auto mr-auto" lg="6" xl="4">
                  <Card className="card-profile card-plain">
                    <Row>
                      <Col md="12">
                        <div className="card-image">
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            <img
                              alt="..."
                              className="img img-raised rounded"
                              src={AccountPlaceholder}
                            ></img>
                          </a>
                        </div>
                        <CardBody>
                          <CardTitle tag="h4">FREDILYN G. SAMORO</CardTitle>
                          <h6 className="category">Chief Operating Officer</h6>
                        </CardBody>
                      </Col>
                    </Row>
                  </Card>
                </Col>
                <Col className="ml-auto mr-auto" lg="6" xl="4">
                  <Card className="card-profile card-plain">
                    <Row>
                      <Col md="12">
                        <div className="card-image">
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            <img
                              alt="..."
                              className="img img-raised rounded"
                              src={AccountPlaceholder}
                            ></img>
                          </a>
                        </div>
                        <CardBody>
                          <CardTitle tag="h4">CHRISTINE JOY D. MONTERO</CardTitle>
                          <h6 className="category">School Administrator</h6>
                        </CardBody>
                      </Col>
                    </Row>
                  </Card>
                </Col>
                <Col className="ml-auto mr-auto" lg="6" xl="4">
                  <Card className="card-profile card-plain">
                    <Row>
                      <Col md="12">
                        <div className="card-image">
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            <img
                              alt="..."
                              className="img img-raised rounded"
                              src={AccountPlaceholder}
                            ></img>
                          </a>
                        </div>
                        <CardBody>
                          <CardTitle tag="h4">JENNIFER MAE B. LOOD</CardTitle>
                          <h6 className="category">Administrative Assistant</h6>
                        </CardBody>
                      </Col>
                    </Row>
                  </Card>
                </Col>
                <Col className="ml-auto mr-auto" lg="6" xl="4">
                  <Card className="card-profile card-plain">
                    <Row>
                      <Col md="12">
                        <div className="card-image">
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            <img
                              alt="..."
                              className="img img-raised rounded"
                              src={AccountPlaceholder}
                            ></img>
                          </a>
                        </div>
                        <CardBody>
                          <CardTitle tag="h4">KAREN MARIE THELMA C. JESENA</CardTitle>
                          <h6 className="category">School Director</h6>
                        </CardBody>
                      </Col>
                    </Row>
                  </Card>
                </Col>
              </Row>
              <hr/>
            </Container>
          </div>
          <MissionAndVision />
          <div className="about-office">
            <Container>
              <Row className="text-center">
                <Col className="ml-auto mr-auto" md="8">
                  <h2 className="title">Our office is our second home</h2>
                  <h4 className="description">
                    Here are some pictures from our office. You can see the
                    place looks like a palace and is fully equiped with
                    everything you need to get the job done.
                  </h4>
                </Col>
              </Row>
              <Row>
                <Col md="4">
                  <img
                    alt="..."
                    className="rounded img-raised"
                    src={require("assets/img/bg27.jpg")}
                  ></img>
                </Col>
                <Col md="4">
                  <img
                    alt="..."
                    className="rounded img-raised"
                    src={require("assets/img/bg24.jpg")}
                  ></img>
                </Col>
                <Col md="4">
                  <img
                    alt="..."
                    className="rounded img-raised"
                    src={require("assets/img/bg28.jpg")}
                  ></img>
                </Col>
                <Col md="6">
                  <img
                    alt="..."
                    className="rounded img-raised"
                    src={require("assets/img/project6.jpg")}
                  ></img>
                </Col>
                <Col md="6">
                  <img
                    alt="..."
                    className="rounded img-raised"
                    src={require("assets/img/project14.jpg")}
                  ></img>
                </Col>
              </Row>
              <hr/>
            </Container>
          </div>
          <div className="about-contact">
            <Container>
              <Row>
              <Col className="ml-auto mr-auto">
                  <div className="info info-horizontal">
                    <div className="icon icon-info">
                      <i className="now-ui-icons location_pin"></i>
                    </div>
                    <div className="description">
                      <h4 className="info-title">Find us at</h4>
                      <p>
                        59 Taft St, <br></br>
                        Mandurriao, Iloilo City,, <br></br>
                        5000 Iloilo
                      </p>
                    </div>
                  </div>
                  </Col>
              <Col className="ml-auto mr-auto">

                  <div className="info info-horizontal">
                    <div className="icon icon-info">
                      <i className="now-ui-icons tech_mobile"></i>
                    </div>
                    <div className="description">
                      <h4 className="info-title">Give us a ring</h4>
                      <p>
                        Jennifer Mae B. Lood <br></br>
                        (033) 321 3326 <br></br>
                        Hours or services may differ due to COVID-19 pandemic
                      </p>
                    </div>
                  </div>
                  </Col>
              <Col className="ml-auto mr-auto">

                  <div className="info info-horizontal">
                    <div className="icon icon-info">
                      <i className="business_briefcase-24 now-ui-icons"></i>
                    </div>
                    <div className="description">
                      <h4 className="info-title">Legal Information</h4>
                      <p>
                        Creative Tim Ltd. <br></br>
                        VAT · EN2341241 <br></br>
                        IBAN · EN8732ENGB2300099123 <br></br>
                        Bank · Great Britain Bank
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        <div className="big-map" id="contactUs2Map">
          <MapWrapper
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAzhD73-qEGmMliWUdQW7OCAkxsT8Ov7-Q"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `100%` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default AboutUs;
