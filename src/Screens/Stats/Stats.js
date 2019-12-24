import React from 'react';
import { Row, Container } from 'react-bootstrap';
import cognizant from '../../Assets/cogni.png';
import gslab from '../../Assets/gslab.jpg';
import infosys from '../../Assets/infosys.png'
import './Stats.css';
import StatsClock from './Stats-clock';
import StatsAndroid from './Stats-android';
import StatsChrome from './Stats-chrome';
import StatsBriefcase from './Stats-briefcase';

const Stats = () => {
    return (
        <Container className="statsContainer">
            <h2 className="section-title">STATS</h2>
            <Row>
                <StatsClock />
                <StatsAndroid />
                <StatsBriefcase />
                <StatsChrome />
            </Row>
            <h2 className="section-title">EMPLOYERS</h2>
            <div className="employers">
                <img src={cognizant} alt="cognizant" />
                <img src={gslab} alt="gslab" />
                <img src={infosys} alt="infosys" />
            </div>
        </Container>
    );
}

export default Stats;