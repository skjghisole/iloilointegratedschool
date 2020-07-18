import React from "react";
// react plugin used to create DropdownMenu for selecting items
import Select from "react-select";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
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

function AboutUs() {
  const [specialitySelect, setSpecialitySelect] = React.useState(null);
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
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
                <Col className="ml-auto mt-5" md="5">
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
                <Col className="mr-auto" md="5">
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
                  <h2 className="title">We are nerd rockstars</h2>
                  <h4 className="description">
                    This is the paragraph where you can write more details about
                    your team. Keep you user engaged by providing meaningful
                    information.
                  </h4>
                </Col>
              </Row>
              <Row>
                <Col className="ml-auto mr-auto" lg="7" xl="6">
                  <Card className="card-profile card-plain">
                    <Row>
                      <Col md="5">
                        <div className="card-image">
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            <img
                              alt="..."
                              className="img img-raised rounded"
                              src={require("assets/img/olivia.jpg")}
                            ></img>
                          </a>
                        </div>
                      </Col>
                      <Col md="7">
                        <CardBody>
                          <CardTitle tag="h4">Ella Evelyn</CardTitle>
                          <h6 className="category">Air Crew Member</h6>
                          <p className="card-description">
                            Think in the morning. Act in the noon. Eat in the
                            evening. Sleep in the night......
                          </p>
                          <CardFooter>
                            <Button
                              className="btn-icon btn-neutral"
                              color="twitter"
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              <i className="fab fa-twitter"></i>
                            </Button>
                            <Button
                              className="btn-icon btn-neutral"
                              color="facebook"
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              <i className="fab fa-facebook-square"></i>
                            </Button>
                            <Button
                              className="btn-icon btn-neutral"
                              color="google"
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              <i className="fab fa-google"></i>
                            </Button>
                          </CardFooter>
                        </CardBody>
                      </Col>
                    </Row>
                  </Card>
                </Col>
                <Col className="ml-auto mr-auto" lg="7" xl="6">
                  <Card className="card-profile card-plain">
                    <Row>
                      <Col md="5">
                        <div className="card-image">
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            <img
                              alt="..."
                              className="img img-raised rounded"
                              src={require("assets/img/emily.jpg")}
                            ></img>
                          </a>
                        </div>
                      </Col>
                      <Col md="7">
                        <CardBody>
                          <CardTitle tag="h4">Mila Skylar</CardTitle>
                          <h6 className="category">Architect</h6>
                          <p className="card-description">
                            Love cures people - both the ones who give it and
                            the ones who receive it...
                          </p>
                          <CardFooter>
                            <Button
                              className="btn-icon btn-neutral"
                              color="linkedin"
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              <i className="fab fa-linkedin"></i>
                            </Button>
                            <Button
                              className="btn-icon btn-neutral"
                              color="facebook"
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              <i className="fab fa-facebook-square"></i>
                            </Button>
                            <Button
                              className="btn-icon btn-neutral"
                              color="dribbble"
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              <i className="fab fa-dribbble"></i>
                            </Button>
                            <Button
                              className="btn-icon btn-neutral"
                              color="google"
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              <i className="fab fa-google"></i>
                            </Button>
                          </CardFooter>
                        </CardBody>
                      </Col>
                    </Row>
                  </Card>
                </Col>
                <Col className="ml-auto mr-auto" lg="7" xl="6">
                  <Card className="card-profile card-plain">
                    <Row>
                      <Col md="5">
                        <div className="card-image">
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            <img
                              alt="..."
                              className="img img-raised rounded"
                              src={require("assets/img/james.jpg")}
                            ></img>
                          </a>
                        </div>
                      </Col>
                      <Col md="7">
                        <CardBody>
                          <CardTitle tag="h4">Daniel Carter</CardTitle>
                          <h6 className="category">Aviation Inspector</h6>
                          <p className="card-description">
                            Keep your face always toward the sunshine - and
                            shadows will fall behind you...
                          </p>
                          <CardFooter>
                            <Button
                              className="btn-icon btn-neutral"
                              color="youtube"
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              <i className="fa fab-youtube"></i>
                            </Button>
                            <Button
                              className="btn-icon btn-neutral"
                              color="twitter"
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              <i className="fab fa-twitter"></i>
                            </Button>
                            <Button
                              className="btn-icon btn-neutral"
                              color="instagram"
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              <i className="fab fa-instagram"></i>
                            </Button>
                          </CardFooter>
                        </CardBody>
                      </Col>
                    </Row>
                  </Card>
                </Col>
                <Col className="ml-auto mr-auto" lg="7" xl="6">
                  <Card className="card-profile card-plain">
                    <Row>
                      <Col md="5">
                        <div className="card-image">
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            <img
                              alt="..."
                              className="img img-raised rounded"
                              src={require("assets/img/michael.jpg")}
                            ></img>
                          </a>
                        </div>
                      </Col>
                      <Col md="7">
                        <CardBody>
                          <CardTitle tag="h4">Dylan Wyatt</CardTitle>
                          <h6 className="category">Conservation Scientist</h6>
                          <p className="card-description">
                            There is only one corner of the universe you can be
                            certain of improving, and that's your own self...
                          </p>
                          <CardFooter>
                            <Button
                              className="btn-icon btn-neutral"
                              color="linkedin"
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              <i className="fab fa-linkedin"></i>
                            </Button>
                            <Button
                              className="btn-icon btn-neutral"
                              color="facebook"
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              <i className="fab fa-facebook-square"></i>
                            </Button>
                            <Button
                              className="btn-icon btn-neutral"
                              color="google"
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              <i className="fab fa-google"></i>
                            </Button>
                          </CardFooter>
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
                <Col className="mr-auto ml-auto" md="8">
                  <h2 className="text-center title">Want to work with us?</h2>
                  <h4 className="text-center description">
                    Divide details about your product or agency work into parts.
                    Write a few lines about each one and contact us about any
                    further collaboration. We will get back to you in a couple
                    of hours.
                  </h4>
                  <Form className="contact-form">
                    <Row>
                      <Col md="4">
                        <label>First name</label>
                        <InputGroup
                          className={firstFocus ? "input-group-focus" : ""}
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="now-ui-icons users_circle-08"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            autoComplete="firstname"
                            placeholder="First Name..."
                            type="text"
                            onFocus={() => setFirstFocus(true)}
                            onBlur={() => setFirstFocus(false)}
                          ></Input>
                        </InputGroup>
                      </Col>
                      <Col md="4">
                        <label>Your email</label>
                        <InputGroup
                          className={emailFocus ? "input-group-focus" : ""}
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="now-ui-icons ui-1_email-85"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            autoComplete="email"
                            placeholder="Email Name..."
                            type="text"
                            onFocus={() => setEmailFocus(true)}
                            onBlur={() => setEmailFocus(false)}
                          ></Input>
                        </InputGroup>
                      </Col>
                      <Col md="4">
                        <FormGroup>
                          <label className="control-label">Speciality</label>
                          <Select
                            className="react-select react-select-primary"
                            onChange={(value) => setSpecialitySelect(value)}
                            classNamePrefix="react-select"
                            placeholder="Speciality"
                            value={specialitySelect}
                            name=""
                            options={[
                              {
                                value: "1",
                                label: "I'm a Designer",
                              },
                              { value: "2", label: "I'm a Developer" },
                              { value: "3", label: "I'm a Hero" },
                            ]}
                          ></Select>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="ml-auto mr-auto text-center" md="4">
                        <Button
                          className="btn-round mt-4"
                          color="info"
                          size="lg"
                        >
                          Let's talk
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default AboutUs;
