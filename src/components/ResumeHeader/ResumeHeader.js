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
                    <MyContactInfo email="shreyas.rh9@gmail.com" mobileNumber="+919986700691" />
                </Col>
                

            </Row>

        </Container>
    )
}

export default resumeHeader