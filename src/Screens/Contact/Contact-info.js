import React from 'react';
import { Col } from 'react-bootstrap';
import { Icon } from '@iconify/react';
import locationIcon from '@iconify/react/dashicons/location';
import phoneIcon from '@iconify/react/fe/phone';
import baselineMail from '@iconify/react/ic/baseline-mail';

const ContactInfo = () => (
    <Col md={{span:5, offset:1}} sm={12} className="form-info">
        <div className="form-title">
            <h1>Contact me</h1>
        </div>
        <div className="form-map">
            <iframe 
                title="map"
                width="100%"
                height="100%" 
                src="https://maps.google.com/maps?q=18.60372692298375, 73.73677968978883&z=8&output=embed"
                frameBorder="0" 
                scrolling="no">
            </iframe>
        </div>
        <div className="address-section">
            <div>
                <Icon icon={locationIcon} />
                <span>Hinjawadi, Phase 1, Pune 411057, India</span>
            </div>
            <div>
                <Icon icon={phoneIcon} />
                <span>+91 7044080165/ +91 8084508679</span>
            </div>
            <div>
                <Icon icon={baselineMail} />
                <span>sunny.prakashgm@gmail.com</span>
            </div>
        </div>
    </Col>
);

export default ContactInfo;