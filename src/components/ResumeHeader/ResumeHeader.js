import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import './ResumeHeader.css'
import MyPhoto from './MyPhoto/MyPhoto'
import MyWorkIntro from './MyWorkIntro/MyWorkIntro'
import MyContactInfo from './MyContactInfo/MyContactInfo'


const resumeHeader = () => {
    return (
        <Container className="container">
            <Row>
                <Col xs="2">
                    <MyPhoto source="https://res.cloudinary.com/shreyas/image/upload/v1447835724/_20150603_122529_a3k9rn.jpg" />
                </Col>
                <Col>
                    <MyWorkIntro name="Shreyas R H" position="Senior Software Engineer @ Practo" />
                </Col>
                <Col>
                    <MyContactInfo email="shreyas.rh9@gmail.com" mobileNumber="+919986700691" place="Bengaluru" />
                </Col>
            </Row>
            <Row style={{ marginTop: '1%' }}>
                <Col>
                    <span>5+ years of experience as a Full Stack Developer</span>
                </Col>
            </Row>

            <Row style={{ marginTop: '1%' }}>
                <Col>
                    <h2 className="contentHeading">WORK EXPERIENCE</h2>
                    <h3 className="subContentHeading">Senior Software Engineer</h3>
                    <span className="contentDuration">02/2015 - Present</span><span className="contentLocation">Bengaluru</span>
                    <br />
                    <br />
                    <h3 className="subContentHeading">Software Engineer</h3>
                    <span className="contentDuration">03/2013 - 10/2015</span><span className="contentLocation">Bengaluru</span>
                </Col>
                <Col>
                    <h2 className="contentHeading">SKILLS</h2>
                    <span className="skillContent">Java/J2EE</span>
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
                    <span className="skillContent">Solr</span>

                </Col>
            </Row>
            <br/>

            <Row style={{ marginTop: '1%' }}>
                <Col>
                    <h2 className="contentHeading">EDUCATION</h2>
                    <h3 className="subContentHeading">Bachelor Of Engineering</h3>
                    <h4>Global Academy Of Technology</h4>
                    
                    <span className="contentDuration">2008 - 2012</span><span className="contentLocation">75%</span>
                    <br />
                    <br />
                    <h3 className="subContentHeading">Software Engineer</h3>
                    <span className="contentDuration">03/2013 - 10/2015</span><span className="contentLocation">Bengaluru</span>




                </Col>
                <Col>
                    <h2 className="contentHeading">CODING INTERESTS</h2>
                    <h4>Hacker Earth - An ultimate hub for programmers</h4>
                    <span className="contentDuration">Have competitive percentile above 98% on HackerEarth</span>

                    <br />
                    <br />
                    <br />
                    <h2 className="contentHeading">OTHER INFO</h2>
                    <span className="projectContentHeading">LinkedIn</span><br/>
                    <span className="contentDuration">https://www.linkedin.com/in/shreyas-r-h-8a74b8a2/</span>

                    <br />
                    <br />

                    <span className="projectContentHeading">Github</span><br/>
                    <span className="contentDuration">https://github.com/shreyasrh9</span>

                    <br />
                    <br />

                    <span className="projectContentHeading">Hacker Earth</span><br/>
                    <span className="contentDuration">https://www.hackerearth.com/@shreyas.rh151</span>



                </Col>
            </Row>
            <br/>
            <Row>
                <Col>
                <h2 className="contentHeading">PROJECT(S)</h2>
                    <h3 className="subContentHeading">QUERENT BI</h3>
                    <span className="projectContentHeading">- Software Used</span><p>Java/J2EE 1.8, Spring Boot, MySQL, OpenID, Sentry, log4j, ReactJs, Ajax, CSS, Bootstrap, Data Structures & Algorithms, Maven, Tomcat 8, Github</p>
                    <span className="projectContentHeading">- Features</span><p>Platform to access Tableau Dashboards based on user mappings</p>
                    <span className="projectContentHeading">- Roles & Responsibilities</span><p>Integration with multiple services, End to End development for multiple modules, Code reviews. Built the rest client using reactjs and rest API using spring boot. Dockerizing the entire application</p>

                    <br />
                    <br />

                    <h3 className="subContentHeading">Chatbot</h3>
                    <span className="projectContentHeading">- Software Used</span><p>Python, Flask, Sentry, log4j, ReactJs, Redux observable, CSS, Bootstrap, Data Structures & Algorithms, Nginx, Dialogflow, Github</p><br/>
                    <span className="projectContentHeading">- Features</span><p>A chatbot which answers hr related questions</p>
                    <span className="projectContentHeading">- Roles & Responsibilities</span><p>End to End development for multiple modules, Code reviews. Built the rest client using reactjs and rest API using python, flask. Setting up questions in dialogflow. Dockerizing the entire application</p>

                    <br />
                    <br />

                    <h3 className="subContentHeading">Document Search</h3>
                    <span className="projectContentHeading">- Software Used</span><p>Solr, Python, Flask, Sentry, log4j, ReactJs, Redux observable, CSS, Bootstrap, Data Structures & Algorithms, Nginx, Github</p>
                    <span className="projectContentHeading">- Features</span><p>An application which helps the hosptal staff to search the autopsy documents based on the search keyword. Image documents are extracted using OCR and the extracted data is indexed in Solr. The document of searched keyword is fetched from Solr.</p>
                    <span className="projectContentHeading">- Roles & Responsibilities</span><p>End to End development for multiple modules, Code reviews. Built the rest client using reactjs and rest API using python, flask. Setting up Solr and indexing the documents. Dockerizing the entire application.</p>

                    <br />
                    <br />

                    <h3 className="subContentHeading">Orders (An e-commerce web product)</h3>
                    <span className="projectContentHeading">- Software Used</span><p>Java/J2EE 1.8, Spring Boot, PostgreSQL, Sentry, log4j, JSP, JavaScript, RESTful web-services, Ajax, CSS, JSON, JPA, Bootstrap, Data Structures & Algorithms, Maven, Tomcat 8, Github</p>
                    <span className="projectContentHeading">- Features</span><p>An application which helps the user choose the Eletrolux products to order, review the orders, shipment, and tracking of orders</p>
                    <span className="projectContentHeading">- Roles & Responsibilities</span>
                    <p>1. Developed wireframes for the application using Apple Sketch and retrieved the CSS properties using Zeplin</p>
                    <p>2. Designed DB structure and application to make the application easily maintainable</p>
                    <p>3. Designed and developed client-side components as a separate entity to call the PUT/GET/DELETE/POST services and validate using jQuery/Javascript</p>
                    <p>4. Designed and developed the REST API which connects to DB using JPA and query using JPQL and JDBC template</p>
                    <p>5. Performed unit testing</p>
                    <p>6. Deployed the application on AWS and automated DB and WAR/JAR files backup</p>
                    <p>7. Entire application development ownership (End to End)</p>
                    <p>8. Dockerizing the entire application</p>
                </Col>
            </Row>

        </Container>
    )
}

export default resumeHeader