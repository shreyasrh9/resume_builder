import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import "./ResumeHeader.css";
import MyPhoto from "./MyPhoto/MyPhoto";
import MyWorkIntro from "./MyWorkIntro/MyWorkIntro";
import MyContactInfo from "./MyContactInfo/MyContactInfo";

const resumePreview = props => {
  return (
    <div>
      <Container className="container">
        <Row>
          <Col xs="3">
            <MyPhoto
              source="https://res.cloudinary.com/shreyas/image/upload/v1447835724/_20150603_122529_a3k9rn.jpg"
              alt="Profile Picture"
            />
          </Col>
          <Col>
            <MyWorkIntro name={props.name} position={props.designation} />
          </Col>
          <Col>
            <MyContactInfo
              email={props.email}
              mobileNumber={props.phone}
              place={props.location}
            />
          </Col>
        </Row>
        <Row style={{ marginTop: "1%" }}>
          <Col>
            <span>{props.totalExperience}</span>
            <span> as a </span>
            <span>{props.role}</span>
          </Col>
        </Row>

        <Row style={{ marginTop: "1%" }}>
          <Col>
            <h2 className="contentHeading">WORK EXPERIENCE</h2>
            {props.individualExperience.map(d => (
              <div>
                <h3 className="subContentHeading">{d.role}</h3>
                <span className="contentDuration">{d.duration}</span>
                <span className="contentLocation">{d.company}</span>
                <br />
                <br />
              </div>
            ))}
          </Col>
          {/* <Col>
        <h2 className="contentHeading">SKILLS</h2>
        {this.renderSkills()} */}
          {/* <span className="skillContent">Java/J2EE</span>
                <span className="skillContent">Python</span>
                <span className="skillContent">ReactJS</span>

                <br />
                <br />
                <span className="skillContent">Redux</span>
                <span className="skillContent">Data Structures</span>
                <span className="skillContent">Microservices</span>
                <br />
                <br />
                <span className="skillContent">RESTful WebServices</span>
                <span className="skillContent">Struts2</span>
                <br />
                <br />
                <span className="skillContent">Spring/Spring Boot</span>
                <span className="skillContent">JPA</span>
                <span className="skillContent">HTML</span>
                <br />
                <br />
                <span className="skillContent">CSS</span>
                <span className="skillContent">Javascript</span>
                <span className="skillContent">Jquery</span>
                <br />
                <br />
                <span className="skillContent">PostgreSQL</span>
                <span className="skillContent">MySQL</span>
                <span className="skillContent">Github</span>
                <br />
                <br />
                <span className="skillContent">Docker</span>
                <span className="skillContent">Nginx</span>
                <span className="skillContent">Tomcat</span>
                <span className="skillContent">Solr</span> */}
          {/* </Col> */}
        </Row>
        <br />

        <Row style={{ marginTop: "1%" }}>
          <Col>
            <h2 className="contentHeading">Overview</h2>
            <p>{props.overview}</p>
            <br />
            <br />
            <h2 className="contentHeading">EDUCATION</h2>
            {props.educationalInfo.map(d => (
              <div>
                <h3 className="subContentHeading">{d.courseName}</h3>
                <h4>{d.collegeName}</h4>
                <span className="contentDuration">{d.duration}</span>
                <span className="contentLocation">{d.aggregate}</span>
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
            {props.otherInfo.map(d => (
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
            {props.projInfo.map(d => (
              <div>
                <h3 className="subContentHeading">{d.projTitle}</h3>
                <span className="projectContentHeading">- Software Used</span>
                <p>{d.software}</p>
                <span className="projectContentHeading">- Features</span>
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
        <Row>
          <Button onClick={props.toggleView}>Back</Button>
        </Row>
      </Container>
    </div>
  );
};

export default resumePreview;
