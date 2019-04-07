import React from 'react';
import { Row, Container, Button } from 'react-bootstrap';
import PortfolioSticky from './Portfolio-sticky';
import './Portfolio.css';
import PortfolioModal from './Portfolio-modal';

const workDone = [
    {
        "id": 0,
        "title": "Hire.me",
        "classes": "sticky-l",
        "background": "#ffc",
        "tech": "Android",
        "stack": ["android", "java"],
        "body": "lorem ipsum"
    },
    {
        "id": 1,
        "title": "Redux Tasker",
        "classes": "sticky-l",
        "background": "#cfc",
        "tech":"Web",
        "stack": ["react", "redux", "bootstrap"],
        "body": "todo app"
    },
    {
        "id": 2,
        "title": "Connect 3",
        "classes": "sticky-r",
        "background": "#e380bc",
        "tech":"Android",
        "stack": ["android", "java"],
        "body": "lorem ipsum"
    },
    {
        "id": 3,
        "title": "Whats the weather",
        "classes": "sticky-r",
        "background": "#ccf",
        "tech":"Web",
        "stack": ["react", "javascript", "weather"],
        "body": "lorem ipsum"
    },
    {
        "id": 4,
        "title": "Book-explorer",
        "classes": "sticky-r",
        "background": "#e380bc",
        "tech":"Web",
        "stack": ["react", "javascript", "google"],
        "body": "lorem ipsum"
    },
    {
        "id": 5,
        "title": "gitHub user search",
        "classes": "sticky-r",
        "background": "#bf8",
        "tech":"Web",
        "stack": ["angular", "typescript", "github"],
        "body": "lorem ipsum"
    },
    {
        "id": 6,
        "title": "Customer-tracker",
        "classes": "sticky-l",
        "background": "#ffc",
        "tech":"Web",
        "stack": ["java", "spring", "bootstrap", "jpa"],
        "body": "lorem ipsum"
    },
    {
        "id": 7,
        "title": "Portfolio",
        "classes": "sticky-r",
        "background": "#f3a456",
        "tech":"Web",
        "stack": ["react", "router", "bootstrap"],
        "body": "lorem ipsum"
    }
];

class Portfolio extends React.Component{ 
    constructor(){
        super();
        this.state = {
            workDone,
            showModal: false,
            portalContent: ""
        }
    }

    handleAll = () => {
        this.setState({...this.state, workDone});
    }

    handleAndroid = () => {
        this.setState({ ...this.state, workDone: workDone.filter(item => item.tech === "Android")});
    }

    handleWeb = () => {
        this.setState({ ...this.state, workDone: workDone.filter(item => item.tech === "Web")});
    }

    handleShowModal = (item) => {
        this.setState({...this.state, portalContent: item, showModal: true});
    }

    handleCloseModal = () => {
        this.setState({...this.state, showModal:false});
    }

    render(){
        const {workDone, showModal, portalContent} = this.state;
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
                        {
                            workDone.map(item => <PortfolioSticky 
                                                onClick={() => this.handleShowModal(item)} 
                                                key={item.id} 
                                                attr={item}
                                                />)
                        }
                    </Row>
                </Container>
                <PortfolioModal show={showModal} onHide={this.handleCloseModal} content={portalContent}/>
            </div>
        );
    }

}

export default Portfolio;