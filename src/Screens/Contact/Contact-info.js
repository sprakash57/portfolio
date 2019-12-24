import React from 'react';
import { Col } from 'react-bootstrap';
import { Icon } from '@iconify/react';
import ContactSocial from './Contact-social';
import locationIcon from '@iconify/react/icomoon-free/location';
import phoneIcon from '@iconify/react/entypo/phone';
import baselineMail from '@iconify/react/ic/baseline-mail';
import ContactMap from './Contact-map';

const ContactInfo = (props) => (
    <Col md={{ span: 5, offset: 1 }} sm={12} className="form-info">
        <div className="form-title">
            <h1>CONTACT ME</h1>
        </div>
        <ContactMap loc={props.loc} />
        <div className="address-section">
            <div>
                <Icon icon={locationIcon} color="rgb(223, 67, 40)" />
                <span>Hinjawadi, Phase 1, Pune 411057, India</span>
            </div>
            <div>
                <Icon icon={phoneIcon} color="rgb(223, 67, 40)" />
                <span>+91 7044080165/ +91 8084508679</span>
            </div>
            <div>
                <Icon icon={baselineMail} color="rgb(223, 67, 40)" />
                <span>sunny.prakashgm@gmail.com</span>
            </div>
        </div>
        <ContactSocial />
    </Col>
);

export default ContactInfo;