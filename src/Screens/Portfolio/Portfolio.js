import React from 'react';
import { Row, Container } from 'react-bootstrap';
import PortfolioSticky from './Portfolio-sticky';
import './Portfolio.css';

const workDone = [
    {
        "id": 1,
        "title": "Hire.me",
        "classes": "sticky-l",
        "background": "#ffc"
    },
    {
        "id": 2,
        "title": "Redux Tasker",
        "classes": "sticky-l",
        "background": "#cfc"
    },
    {
        "id": 3,
        "title": "Connect 3",
        "classes": "sticky-r",
        "background": "#e380bc"
    },
    {
        "id": 4,
        "title": "Whats the weather",
        "classes": "sticky-r",
        "background": "#ccf"
    },
    {
        "id": 5,
        "title": "Book-explorer",
        "classes": "sticky-r",
        "background": "#e380bc"
    },
    {
        "id": 6,
        "title": "gitHub user search",
        "classes": "sticky-r",
        "background": "#bf8"
    },
    {
        "id": 7,
        "title": "Customer-tracker",
        "classes": "sticky-l",
        "background": "#ffc"
    },
    {
        "id": 8,
        "title": "Portfolio",
        "classes": "sticky-r",
        "background": "#f3a456"
    }
];

const Portfolio = () => (
    <div className="section">
        <Container>
            <div className="heading">
                    <h2>Portfolio</h2>
            </div>
            <Row>
                {workDone.map(item => <PortfolioSticky key={item.id} attr={item}/>)}
            </Row>
        </Container>
    </div>
);

export default Portfolio;