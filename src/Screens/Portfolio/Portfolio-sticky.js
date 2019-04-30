import React from 'react';
import { Col } from 'react-bootstrap';

const PortfolioSticky = (props) => {
    const { title, classes, background, image } = props.attr;
    return (
    <Col onClick={props.onClick} xs={6} md={3} className={classes} style={{background}}>
        <h6 className="stickyTitle">{title}</h6>
        <img className="sticky-image" src={image} alt="Project images"/>
    </Col>
);
}

export default PortfolioSticky;
