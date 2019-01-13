import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  Form,
  Button
} from "reactstrap";
import "./ResumeHeader.css";
import MyPhoto from "./MyPhoto/MyPhoto";
import MyWorkIntro from "./MyWorkIntro/MyWorkIntro";
import MyContactInfo from "./MyContactInfo/MyContactInfo";
import ResumePreview from "./ResumePreview.js";

class ResumeHeader extends Component {
  state = {
    name: "Name",
    designation: "Software Engineer @ Google",
    email: "example@example.com",
    phone: "+919999999999",
    location: "Bengaluru",
    totalExperience: "2 years experience",
    role: "Full-stack developer",
    random: null,
    haveExpDet: false,
    indRole: null,
    indDuration: null,
    indCompany: null,
    haveEducationalInfo: false,
    courseName: null,
    collegeName: null,
    duration: null,
    aggregate: null,
    haveOtherInfo: false,
    socWebName: null,
    socWebLink: null,
    haveProjInfo: false,
    projTitle: null,
    software: null,
    features: null,
    responsibilities: null,
    haveSkills: false,
    skill: null,
    skills: ["Java/J2EE"],
    individualExperience: [
      {
        role: "Senior Software Engineer",
        duration: "02/2015 - Present",
        company: "Practo"
      }
    ],
    educationalInfo: [
      {
        courseName: "Bachelor Of Engineering",
        collegeName: "Global Academy Of Technology",
        duration: "2008 - 2012",
        aggregate: "75"
      }
    ],
    otherInfo: [
      {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/abc-8a74b8a2/"
      }
    ],
    projInfo: [
      {
        projTitle: "Chatbot",
        software:
          "Python, Flask, Sentry, log4j, ReactJs, Redux observable, CSS, Bootstrap, Data Structures & Algorithms, Nginx, Dialogflow, Github",
        features: "A chatbot which answers HR related questions",
        responsibilities:
          "End to End development for multiple modules, Code reviews. Built the rest client using reactjs and rest API using python, flask. Setting up questions in dialogflow. Dockerizing the entire application"
      }
    ],
    overview:
      "A senior software engineer involved in development of multiple cutting edge solutions on multiple environments across the enterprise. ",
    previewMode: false
  };

  toggleView = () => {
    const view = this.state.previewMode;
    console.log("view : " + view);
    this.setState({ previewMode: !view });
  };

  /*
  Add skills to the list and remove the default details present
  */
  addSkills = () => {
    let skillsArray;
    if (this.state.haveSkills) {
      skillsArray = [...this.state.skills];
    } else {
      skillsArray = [];
    }

    if (this.state.skill != "") {
      skillsArray.push(this.state.skill);
      this.setState({ skills: skillsArray });
      this.setState({ haveSkills: true });
      this.setState({ skill: "" });
    }
  };

  /*
  Add experience details to the list and remove the default details present
  */
  addExperience = () => {
    let expArray;
    if (this.state.haveExpDet) {
      expArray = [...this.state.individualExperience];
    } else {
      expArray = [];
    }

    const exp = { ...expArray[0] };
    if (
      !(
        this.state.indRole === "" ||
        this.state.indDuration === "" ||
        this.state.indCompany === ""
      )
    ) {
      this.setState({ haveExpDet: true });
      exp.role = this.state.indRole;
      exp.duration = this.state.indDuration;
      exp.company = this.state.indCompany;
      expArray.push(exp);
      this.setState({ individualExperience: expArray });
      this.setState({ indRole: "" });
      this.setState({ indDuration: "" });
      this.setState({ indCompany: "" });
    }
  };

  /*
  Add educational details to the list and remove the default details present
  */
  addEducationInfo = event => {
    let eduDetailsArray;
    if (this.state.haveEducationalInfo) {
      eduDetailsArray = [...this.state.educationalInfo];
    } else {
      eduDetailsArray = [];
    }

    const eduDetails = { ...eduDetailsArray[0] };
    if (
      !(
        this.state.courseName === "" ||
        this.state.collegeName === "" ||
        this.state.duration === "" ||
        this.state.aggregate == ""
      )
    ) {
      this.setState({ haveEducationalInfo: true });
      eduDetails.courseName = this.state.courseName;
      eduDetails.collegeName = this.state.collegeName;
      eduDetails.duration = this.state.duration;
      eduDetails.aggregate = this.state.aggregate;
      eduDetailsArray.push(eduDetails);
      this.setState({ educationalInfo: eduDetailsArray });
      this.setState({ courseName: "" });
      this.setState({ collegeName: "" });
      this.setState({ duration: "" });
      this.setState({ aggregate: "" });
    }
  };

  /*
  Add other details to the list and remove the default details present
  */
  addAdditionalInfo = event => {
    let addInfoArray;
    if (this.state.haveOtherInfo) {
      addInfoArray = [...this.state.otherInfo];
    } else {
      addInfoArray = [];
    }

    const addInfo = { ...addInfoArray[0] };
    if (!(this.state.socWebName === "" || this.state.socWebLink === "")) {
      this.setState({ haveOtherInfo: true });
      addInfo.name = this.state.socWebName;
      addInfo.link = this.state.socWebLink;
      addInfoArray.push(addInfo);
      this.setState({ otherInfo: addInfoArray });
      this.setState({ socWebName: "" });
      this.setState({ socWebLink: "" });
    }
  };

  /*
  Add project details to the list and remove the default details present
  */
  addProjectInfo = event => {
    let projDetailsArray;
    if (this.state.haveProjInfo) {
      projDetailsArray = [...this.state.projInfo];
    } else {
      projDetailsArray = [];
    }

    const projDetails = { ...projDetailsArray[0] };
    if (
      !(
        this.state.projTitle === "" ||
        this.state.software === "" ||
        this.state.features === "" ||
        this.state.responsibilities == ""
      )
    ) {
      this.setState({ haveProjInfo: true });
      projDetails.projTitle = this.state.projTitle;
      projDetails.software = this.state.software;
      projDetails.features = this.state.features;
      projDetails.responsibilities = this.state.responsibilities;
      projDetailsArray.push(projDetails);
      this.setState({ projInfo: projDetailsArray });
      this.setState({ projTitle: "" });
      this.setState({ software: "" });
      this.setState({ features: "" });
      this.setState({ responsibilities: "" });
    }
  };

  renderSkills = () => {
    const chunkSize = 3;
    let a = this.state.skills.reduce(
      (acc, item, idx) => {
        let group = acc.pop();
        if (group.length == chunkSize) {
          acc.push(group);
          group = [];
        }
        group.push(item);
        acc.push(group);
        return acc;
      },
      [[]]
    );

    // there is some problem here while rendering
    return a.map(skill => {
      return (
        <div>
          {skill.map(i => (
            <span className="skillContent">{i}</span>
          ))}
          <br />
          <br />
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        {this.state.previewMode ? (
          <ResumePreview
            name={this.state.name}
            designation={this.state.designation}
            email={this.state.email}
            phone={this.state.phone}
            location={this.state.location}
            totalExperience={this.state.totalExperience}
            role={this.state.role}
            individualExperience={this.state.individualExperience}
            overview={this.state.overview}
            educationalInfo={this.state.educationalInfo}
            otherInfo={this.state.otherInfo}
            projInfo={this.state.projInfo}
            toggleView={this.toggleView}
            renderSkills={this.renderSkills}
          />
        ) : (
          <div>
            <div className="split left">
              <Container className="container">
                <FormGroup>
                  <Label>Details :</Label>
                </FormGroup>

                <Row>
                  <Col xs="6">
                    <FormGroup>
                      <Label>Name</Label>
                      <Input
                        type="text"
                        onChange={event => {
                          this.setState({
                            name: event.target.value
                          });
                        }}
                      />
                    </FormGroup>
                  </Col>
                  <Col xs="6">
                    <FormGroup>
                      <Label>Designation</Label>
                      <Input
                        type="text"
                        onChange={event => {
                          this.setState({
                            designation: event.target.value
                          });
                        }}
                      />
                    </FormGroup>
                  </Col>
                </Row>

                <Row>
                  <Col xs="6">
                    <FormGroup>
                      <Label>Email</Label>
                      <Input
                        type="email"
                        onChange={event => {
                          this.setState({
                            email: event.target.value
                          });
                        }}
                      />
                    </FormGroup>
                  </Col>
                  <Col xs="6">
                    <FormGroup>
                      <Label>Contact number</Label>
                      <Input
                        type="text"
                        onChange={event => {
                          this.setState({
                            phone: event.target.value
                          });
                        }}
                      />
                    </FormGroup>
                  </Col>
                </Row>

                <Row>
                  <Col xs="6">
                    <FormGroup>
                      <Label>Location</Label>
                      <Input
                        type="text"
                        onChange={event => {
                          this.setState({
                            location: event.target.value
                          });
                        }}
                      />
                    </FormGroup>
                  </Col>
                  <Col xs="6">
                    <FormGroup>
                      <Label>Experience</Label>
                      <Row>
                        <Col xs="4">
                          <Input
                            type="number"
                            onChange={event => {
                              this.setState({
                                totalExperience:
                                  event.target.value + " years of experience"
                              });
                            }}
                          />
                        </Col>
                        <Col xs="2">as a</Col>
                        <Col xs="6">
                          <Input
                            type="text"
                            onChange={event => {
                              this.setState({
                                role: event.target.value
                              });
                            }}
                          />
                        </Col>
                      </Row>
                    </FormGroup>
                  </Col>
                </Row>
              </Container>
              <Container className="container">
                <FormGroup>
                  <Label>Individual Experiences :</Label>
                </FormGroup>
                <Form>
                  <Row>
                    <Col md={4}>
                      <FormGroup>
                        <Label>Role</Label>
                        <Input
                          type="text"
                          id="role"
                          value={this.state.indRole}
                          onChange={event => {
                            this.setState({
                              indRole: event.target.value
                            });
                          }}
                        />
                      </FormGroup>
                    </Col>
                    <Col md={4}>
                      <FormGroup>
                        <Label>Duration</Label>
                        <Input
                          type="text"
                          id="duration"
                          value={this.state.indDuration}
                          onChange={event => {
                            this.setState({
                              indDuration: event.target.value
                            });
                          }}
                        />
                      </FormGroup>
                    </Col>
                    <Col md={4}>
                      <FormGroup>
                        <Label>Company</Label>
                        <Input
                          type="text"
                          id="company"
                          value={this.state.indCompany}
                          onChange={event => {
                            this.setState({
                              indCompany: event.target.value
                            });
                          }}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Col sm={2}>
                    <Button onClick={this.addExperience}>Add Experience</Button>
                  </Col>
                </Form>
              </Container>
              <br />
              <Container className="container">
                <FormGroup>
                  <Label>Skills : </Label>
                </FormGroup>
                <Row>
                  <Col md={4}>
                    <Input
                      type="text"
                      id="company"
                      value={this.state.skill}
                      onChange={event => {
                        this.setState({
                          skill: event.target.value
                        });
                      }}
                    />
                  </Col>
                  <Col sm={2}>
                    <Button onClick={this.addSkills}>Add Skills</Button>
                  </Col>
                </Row>
              </Container>
              <Container className="container">
                <br />
                <FormGroup>
                  <Label>Overview :</Label>
                </FormGroup>
                <Input
                  type="text"
                  Row="5"
                  Col="100"
                  id="overview"
                  placeholder="Brief description of your work (within 500 characters)"
                  onChange={event => {
                    this.setState({
                      overview: event.target.value
                    });
                  }}
                />
              </Container>
              <Container className="container">
                <br />
                <FormGroup>
                  <Label>Educational Information :</Label>
                </FormGroup>
                <Row>
                  <Col md={7}>
                    <Label>Course name</Label>
                    <Input
                      type="text"
                      value={this.state.courseName}
                      onChange={event => {
                        this.setState({
                          courseName: event.target.value
                        });
                      }}
                    />
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col md={7}>
                    <Label>College Name</Label>
                    <Input
                      type="text"
                      value={this.state.collegeName}
                      onChange={event => {
                        this.setState({
                          collegeName: event.target.value
                        });
                      }}
                    />
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col md={4}>
                    <Label>Duration of Course</Label>
                    <Input
                      type="text"
                      value={this.state.duration}
                      placeholder="Ex: 2012-2018"
                      onChange={event => {
                        this.setState({
                          duration: event.target.value
                        });
                      }}
                    />
                  </Col>
                  <Col md={4}>
                    <Label>Aggregate</Label>
                    <Input
                      type="text"
                      placeholder="Aggregate in %"
                      value={this.state.aggregate}
                      onChange={event => {
                        this.setState({
                          aggregate: event.target.value
                        });
                      }}
                    />
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col sm={2}>
                    <Button onClick={this.addEducationInfo}>
                      Add Information
                    </Button>
                  </Col>
                </Row>
              </Container>
              <Container className="container">
                <br />
                <FormGroup>
                  <Label>Other Information :</Label>
                </FormGroup>
                <Row>
                  <Col md={4}>
                    <Label>Name</Label>
                    <Input
                      type="text"
                      value={this.state.socWebName}
                      onChange={event => {
                        this.setState({
                          socWebName: event.target.value
                        });
                      }}
                    />
                  </Col>
                  <Col md={8}>
                    <Label>Link</Label>
                    <Input
                      type="text"
                      value={this.state.socWebLink}
                      onChange={event => {
                        this.setState({
                          socWebLink: event.target.value
                        });
                      }}
                    />
                  </Col>
                </Row>
                <br />
                <Col sm={2}>
                  <Button onClick={this.addAdditionalInfo}>
                    Add Information{" "}
                  </Button>
                </Col>
              </Container>
              <Container className="container">
                <br />
                <FormGroup>
                  <Label>Project Information :</Label>
                </FormGroup>
                <Row>
                  <Col sm={4}>
                    <Label>Project Title</Label>
                    <Input
                      type="text"
                      value={this.state.projTitle}
                      onChange={event => {
                        this.setState({
                          projTitle: event.target.value
                        });
                      }}
                    />
                  </Col>
                </Row>
                <br />
                <Label>Softwares Used</Label>
                <Input
                  type="text"
                  Row="5"
                  Col="100"
                  placeholder="Comma seperated list of softwares used in the project"
                  value={this.state.software}
                  onChange={event => {
                    this.setState({
                      software: event.target.value
                    });
                  }}
                />
                <br />
                <Label>Features</Label>
                <Input
                  type="text"
                  Row="5"
                  Col="100"
                  value={this.state.features}
                  onChange={event => {
                    this.setState({
                      features: event.target.value
                    });
                  }}
                />
                <br />
                <Label>Roles and responsibilities</Label>
                <Input
                  type="text"
                  Row="5"
                  Col="100"
                  value={this.state.responsibilities}
                  onChange={event => {
                    this.setState({
                      responsibilities: event.target.value
                    });
                  }}
                />
                <br />
                <Button onClick={this.addProjectInfo}>
                  Add Project Information
                </Button>
                <br />
                <br />
                <br />
                <Row>
                  <Col sm={4} />
                  <Col sm={6}>
                    <Button onClick={this.toggleView}>Preview</Button>
                  </Col>
                </Row>
              </Container>
            </div>
            <div className="split right">
              <Container className="container">
                <Row>
                  <Col xs="3">
                    <MyPhoto
                      source="https://res.cloudinary.com/shreyas/image/upload/v1447835724/_20150603_122529_a3k9rn.jpg"
                      alt="Profile Picture"
                    />
                  </Col>
                  <Col>
                    <MyWorkIntro
                      name={this.state.name}
                      position={this.state.designation}
                    />
                  </Col>
                  <Col>
                    <MyContactInfo
                      email={this.state.email}
                      mobileNumber={this.state.phone}
                      place={this.state.location}
                    />
                  </Col>
                </Row>
                <Row style={{ marginTop: "1%" }}>
                  <Col>
                    <span>{this.state.totalExperience}</span>
                    <span> as a </span>
                    <span>{this.state.role}</span>
                  </Col>
                </Row>

                <Row style={{ marginTop: "1%" }}>
                  <Col>
                    <h2 className="contentHeading">WORK EXPERIENCE</h2>
                    {this.state.individualExperience.map(d => (
                      <div>
                        <h3 className="subContentHeading">{d.role}</h3>
                        <span className="contentDuration">{d.duration}</span>
                        <span className="contentLocation">{d.company}</span>
                        <br />
                        <br />
                      </div>
                    ))}
                  </Col>
                  <Col>
                    <h2 className="contentHeading">SKILLS</h2>
                    {this.renderSkills()}
                  </Col>
                </Row>
                <br />

                <Row style={{ marginTop: "1%" }}>
                  <Col>
                    <h2 className="contentHeading">Overview</h2>
                    <p>{this.state.overview}</p>
                    <br />
                    <br />
                    <h2 className="contentHeading">EDUCATION</h2>
                    {this.state.educationalInfo.map(d => (
                      <div>
                        <h3 className="subContentHeading">{d.courseName}</h3>
                        <h4>{d.collegeName}</h4>
                        <span className="contentDuration">{d.duration}</span>
                        <span className="contentLocation">
                          {d.aggregate + "%"}
                        </span>
                      </div>
                    ))}
                  </Col>
                  <Col>
                    <h2 className="contentHeading">CODING INTERESTS</h2>
                    <h4>Hacker Earth - An ultimate hub for programmers</h4>
                    <span className="contentDuration">
                      Have competitive percentile above 98% on HackerEarth
                    </span>

                    <br />
                    <br />
                    <br />
                    <h2 className="contentHeading">OTHER INFO</h2>
                    {this.state.otherInfo.map(d => (
                      <div>
                        <span className="projectContentHeading">{d.name}</span>
                        <br />
                        <span className="contentDuration">{d.link}</span>

                        <br />
                        <br />
                      </div>
                    ))}
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col>
                    <h2 className="contentHeading">PROJECT(S)</h2>
                    {this.state.projInfo.map(d => (
                      <div>
                        <h3 className="subContentHeading">{d.projTitle}</h3>
                        <span className="projectContentHeading">
                          - Software Used
                        </span>
                        <p>{d.software}</p>
                        <span className="projectContentHeading">
                          - Features
                        </span>
                        <p>{d.features}</p>
                        <span className="projectContentHeading">
                          - Roles & Responsibilities
                        </span>
                        <p>{d.responsibilities}</p>
                        <br />
                        <br />
                      </div>
                    ))}
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default ResumeHeader;
