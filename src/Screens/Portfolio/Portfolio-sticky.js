import React from 'react';
import { Col } from 'react-bootstrap';

const PortfolioSticky = (props) => {
    const { title, classes, background } = props.attr;
    return (
    <Col onClick={props.onClick} sm={6} md={3} className={classes} style={{background}}>
        <p><strong>{title}</strong></p>
    </Col>
);
}

export default PortfolioSticky;
