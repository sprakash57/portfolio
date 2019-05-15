import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import PortfolioSticky from './Portfolio-sticky';
import './Portfolio.css';
import PortfolioModal from '../App-modal';
import workDone from './Portfolio-api';

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
            <React.Fragment>
                <Container className="portfolioSection">
                    <Row>
                        <Col sm={12} className="toggleBtn">
                            <button className="allBtn" onClick={this.handleAll}>All</button>
                            <button className="androidBtn" onClick={this.handleAndroid}>Android</button>
                            <button className="webBtn" onClick={this.handleWeb}>Web</button>
                        </Col>
                    </Row>
                    <Row className="portfolioStickySection">
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
            </React.Fragment>
        );
    }

}

export default Portfolio;