import React from 'react';
import { Row, Container, Button } from 'react-bootstrap';
import PortfolioSticky from './Portfolio-sticky';
import './Portfolio.css';

const workDone = [
    {
        "id": 0,
        "title": "Hire.me",
        "classes": "sticky-l",
        "background": "#ffc",
        "tech":"Android"
    },
    {
        "id": 1,
        "title": "Redux Tasker",
        "classes": "sticky-l",
        "background": "#cfc",
        "tech":"Web"
    },
    {
        "id": 2,
        "title": "Connect 3",
        "classes": "sticky-r",
        "background": "#e380bc",
        "tech":"Android"
    },
    {
        "id": 3,
        "title": "Whats the weather",
        "classes": "sticky-r",
        "background": "#ccf",
        "tech":"Web"
    },
    {
        "id": 4,
        "title": "Book-explorer",
        "classes": "sticky-r",
        "background": "#e380bc",
        "tech":"Web"
    },
    {
        "id": 5,
        "title": "gitHub user search",
        "classes": "sticky-r",
        "background": "#bf8",
        "tech":"Web"
    },
    {
        "id": 6,
        "title": "Customer-tracker",
        "classes": "sticky-l",
        "background": "#ffc",
        "tech":"Web"
    },
    {
        "id": 7,
        "title": "Portfolio",
        "classes": "sticky-r",
        "background": "#f3a456",
        "tech":"Web"
    }
];

class Portfolio extends React.Component{ 
    constructor(){
        super();
        this.state = {
            workDone
        }
    }

    handleAll = () => {
        this.setState({workDone});
    }

    handleAndroid = () => {
        this.setState({workDone: workDone.filter(item => item.tech === "Android")});
    }

    handleWeb = () => {
        this.setState({workDone: workDone.filter(item => item.tech === "Web")});
    }

    render(){
        const {workDone} = this.state;
        return (
            <div className="section">
                <Container>
                    <div className="heading">
                        <h2>Portfolio</h2>
                    </div>
                    <div style={{marginBottom: 20}}>
                        <Button onClick={this.handleAll}>All</Button>
                        <Button onClick={this.handleAndroid}>Android</Button>
                        <Button onClick={this.handleWeb}>Web</Button>
                    </div>
                    <Row>
                        {workDone.map(item => <PortfolioSticky key={item.id} attr={item}/>)}
                    </Row>
                </Container>
            </div>
        );
    }

}

export default Portfolio;