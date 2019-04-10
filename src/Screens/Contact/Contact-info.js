import React from 'react';
import { Col, Row } from 'react-bootstrap';

const ContactInfo = () => (
    <Col md={{span:5, offset:1}} sm={12}>
        <h2>Connect with me</h2>
        <div className="map">
            <iframe 
                width="100%" 
                src="http://maps.google.com/maps?q=18.60372692298375, 73.73677968978883&z=8&output=embed"
                frameBorder="0" 
                scrolling="no" 
                marginHeight="0" 
                marginWidth="0">
            </iframe>
        </div>
        <div className="address">
            <p>Lorem ipsum pune 411057</p>
        </div>
        <div className="phone">
            <p>7044080165</p>
        </div>
        <div className="email">
            <p>sunnypr12@outlook.com</p>
        </div>
        <Row>
            <Col sm={3}>
                <p>gitHub</p>
            </Col>
            <Col sm={3}>
                <p>Linkedin</p>
            </Col>
            <Col sm={3}>
                <p>Playstore</p>
            </Col>
            <Col sm={3}>
                <p>twitter</p>
            </Col>
        </Row>
    </Col>
);

export default ContactInfo;