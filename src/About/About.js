import React from 'react';
import {Container, Col, Row} from 'react-bootstrap';
import AboutAvatar from './AboutAvatar';
import AboutIntroduction from './AboutIntroduction';
import AboutSkills from './AboutSkills';
import AboutAcademics from './AboutAcademics';
import AboutCert from './AboutCert';


const About = () => (
    <div className="section">
        <Container>
            <Row>
                <Col md={4} className="card">
                    <AboutAvatar/>
                </Col>

                <Col md={{span:7, offset:1}} className="card" style={{paddingLeft:20}}>
                    <AboutIntroduction/>
                    <AboutSkills/>
                    <AboutAcademics/>
                    <AboutCert/>
                    <h5 className="intro" style={{marginTop:0}}>&nbsp;I do have hobbies</h5>
                    <ul className="textColor">
                        <li>Worked as a volunteer for Outreach Cognizant</li>
                        <li>Never ending appetite for new technologies and gadgets</li>
                        <li>Big time Anime lover</li>
                        <li>Bathroom singer</li>
                        <li>Exothermic activities like Cricket and Table Tennis</li>
                    </ul>
                </Col>
                
            </Row>
        </Container>
    </div>
);

export default About;