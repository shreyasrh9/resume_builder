import React from 'react'
import { Container, Row, Col, Table } from 'reactstrap';
import './ResumeHeader.css'
import MyPhoto from './MyPhoto/MyPhoto'
import MyWorkIntro from './MyWorkIntro/MyWorkIntro'
import MyContactInfo from './MyContactInfo/MyContactInfo'


const resumeHeader = () => {
    return (
        <Container className="container">
            <Row>
                {/* <Col xs="2">
                    <MyPhoto source="https://res.cloudinary.com/shreyas/image/upload/v1447835724/_20150603_122529_a3k9rn.jpg" />
                </Col> */}
                <Col>
                    <MyWorkIntro name="Saptashree V Bennur" 
                    // position="Technical Lead Engineer @ FoundationAI" 
                    />
                </Col>
                <Col>
                    <MyContactInfo email="saptashree.vb17@gmail.com" mobileNumber="+919483746779" place="Bengaluru" />
                </Col>
            </Row>
            <Row style={{ marginTop: '1%' }}>
                <Col>
                    <span>Fresher - Looking out for opportunities</span>
                </Col>
            </Row>

            <Row style={{ marginTop: '1%' }}>
                <Col>
                    <h2 className="contentHeading">Objective</h2>
                    <p>To work in a challenging position which can utilize all my talents and grow along with the organization.</p>
                    <br />
                    <br />
                    {/* <h2 className="contentHeading">EDUCATION</h2>
                    <h3 className="subContentHeading">Bachelor Of Engineering</h3>
                    <h4>Global Academy Of Technology</h4>

                    <span className="contentDuration">2008 - 2012</span><span className="contentLocation"></span> */}


                </Col>
                <Col>
                    <h2 className="contentHeading">SKILLS</h2>
                    <span className="skillContent">C</span>
                    <span className="skillContent">C++</span>
                    <span className="skillContent">Windows XP</span>

                    <br />
                    <br />
                    <span className="skillContent">Windows 7</span>
                    <span className="skillContent">Windows 8</span>
                    <br />
                    <br />
                    <span className="skillContent">Microprocessor</span>
                    <span className="skillContent">Microcontroller</span>
                </Col>
            </Row>
            <br />
            <br/>
            <Row>
                <Col>
                    <h2 className="contentHeading">Education</h2>
                    <Table>
                        <thead>
                            <th>Qualification</th>
                            <th>Institution</th>
                            <th>Year of passing</th>
                            <th>Percentage</th>
                        </thead>

                        <tbody>
                            <tr>
                                <td>Bachelor of Engineering</td>
                                <td>Bangalore Institute of Technology College, Bangalore</td>
                                <td>2014</td>
                                <td>64.59%</td>
                            </tr>

                            <tr>
                                <td>12th</td>
                                <td>Jawahar Navodaya Vidyalaya, Haveri</td>
                                <td>2010</td>
                                <td>85.16%</td>
                            </tr>

                            <tr>
                                <td>10th</td>
                                <td>Jawahar Navodaya Vidyalaya, Haveri</td>
                                <td>2008</td>
                                <td>78.66%</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>

            <br />
            <Row>
                <Col>
                    <h2 className="contentHeading">PROJECT</h2>
                    <h3 className="subContentHeading">Embedded System Based Eye Movement Communicating                
                                                  Media for Paralyzed Person</h3>
                    <span className="projectContentHeading">- Duration</span><p>  3 months</p>
                    <span className="projectContentHeading">- Features</span><p>  Platform to access Tableau Dashboards based on user mappings</p>
                    <span className="projectContentHeading">- Team Size</span><p>  4</p>

                    <span className="projectContentHeading">- Software & Technologies</span><p>  Cube Suite Tool, Renesas Flash Programmer</p>
                    <span className="projectContentHeading">- Description</span><p>This project is designed to aid blind people through voice output. It consists of a Renesas microcontroller and an eye-ball sensor. The eye-ball sensor senses the direction of movement of eye-ball. Depending on the direction of movement of the eye-ball, the eye-ball sensor generates an output voltage proportional to the change in direction of the eye-ball of the user.</p>
                </Col>
            </Row>

            <br />
            <br/>

            <Row>
                <Col>
                    <h2 className="contentHeading">STRENGTHS</h2>

                    <span className="projectContentHeading">- Self confidence, Optimistic, Innovative</span><p></p>
                    <span className="projectContentHeading">- Result and quality oriented, with interpersonal skills</span><p></p>
                    <span className="projectContentHeading">- Detail-oriented, strong learning and organizing skills matched with the ability to manage time and people effectively</span><p></p>
                    <span className="projectContentHeading">- A good team player</span><p></p>
                    <span className="projectContentHeading">- Strong will power, flexible and hard working</span><p></p>
                </Col>
            </Row>

        </Container>
    )
}

export default resumeHeader