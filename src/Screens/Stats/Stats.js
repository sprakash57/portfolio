import React from 'react';
import {Col, Row, Container} from 'react-bootstrap';
import cognizant from '../../Assets/cogni.png';
import gslab from '../../Assets/gslab.jpg';
import './Stats.css';
import StatsClock from './Stats-clock';
import StatsAndroid from './Stats-android';
import StatsChrome from './Stats-chrome';
import StatsBriefcase from './Stats-briefcase';

const Stats = () => {
    return (
        <Container className="statsContainer">
            <Row>
                <StatsClock />
                <StatsAndroid />
                <StatsBriefcase />
                <StatsChrome />
            </Row>
            <Row className="employerSection">
                <Col md={4} sm={12}>
                    <h2>EMPLOYERS</h2>
                </Col>
                <Col md={{span:4}} sm={12}>
                    <img src={cognizant} alt="cognizant"/>
                </Col>
                <Col md={{span:4}} sm={12}>
                    <img src={gslab} alt="gslab"/>
                </Col>
            </Row>       
        </Container>
    );
}

export default Stats;