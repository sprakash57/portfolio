import React from 'react';
import {Col, Row, Container} from 'react-bootstrap';
import { FaClock, FaAndroid, FaBriefcase, FaChrome } from 'react-icons/fa';
import {IconContext} from 'react-icons';
import cognizant from '../../Assets/cogni.png';
import gslab from '../../Assets/gslab.jpg';
import './Stats.css';

const Stats = () => (
    <div className="statsSection section">
        <Container>
            <Row>
                <div className="heading">
                    <h2>Stats - number game</h2>
                </div>
                <Col md={3} sm={6}>
                    <div className="squareItem">
                        <div className="squareInnerContainer">
                            <IconContext.Provider value={{color: "blue", className: "global-class-name"}}>
                                <div className="squareIcon">
                                    <FaClock/> 
                                </div>         
                            </IconContext.Provider>
                            <div className="squareContent">
                                <h2 className="counter plus">4+</h2>
                                <h3>Years of experience</h3>
                            </div>
                        </div>
                    </div>
                </Col>

                <Col md={3} sm={6}>
                    <div className="squareItem">
                        <div className="squareInnerContainer">
                            <IconContext.Provider value={{color: "blue", className: "global-class-name"}}>
                                <div className="squareIcon">
                                    <FaAndroid/> 
                                </div>         
                            </IconContext.Provider>
                            <div className="squareContent">
                                <h2 className="counter">32</h2>
                                <h3>App downloads</h3>
                            </div>
                        </div>
                    </div>
                </Col>

                <Col md={3} sm={6}>
                    <div className="squareItem">
                        <div className="squareInnerContainer">
                            <IconContext.Provider value={{color: "white", className: "global-class-name"}}>
                                <div className="squareIcon">
                                    <FaBriefcase/> 
                                </div>         
                            </IconContext.Provider>
                            <div className="squareContent">
                                <h2 className="counter">6</h2>
                                <h3>Projects worked on</h3>
                            </div>
                        </div>
                    </div>
                </Col>

                <Col md={3} sm={6}>
                    <div className="squareItem">
                        <div className="squareInnerContainer">
                            <IconContext.Provider value={{color: "blue", className: "global-class-name"}}>
                                <div className="squareIcon">
                                    <FaChrome/> 
                                </div>         
                            </IconContext.Provider>
                            <div className="squareContent">
                                <h2 className="counter">5</h2>
                                <h3>Webapps made</h3>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <div className="heading">
                    <h2>Companies served</h2>
                </div>
                <Col sm={{span:3, offset:3}} className="company">
                    <img src={cognizant} alt="cogmizant"/>
                </Col>
                <Col sm={{span:3}} className="company">
                    <img src={gslab} alt="gslab"/>
                </Col>
            </Row>

              
        </Container>
        

    </div>
);

export default Stats;