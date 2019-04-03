import React from 'react';
import {Container, Col, Row, Button} from 'react-bootstrap';
import AboutAvatar from './AboutAvatar';
import AboutIntroduction from './AboutIntroduction';
import AboutSkills from './AboutSkills';
import AboutAcademics from './AboutAcademics';
import AboutCert from './AboutCert';
//import { CSSTransition } from 'react-transition-group';

const Components = [<AboutIntroduction/>, <AboutSkills/>, <AboutAcademics/>, <AboutCert/>];

export default class About extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            componentIndex: 0
        }
    }

    handleShowMore = () => {
        if(this.state.componentIndex >= Components.length - 1){
            this.setState({componentIndex: 0});
        }else {
            this.setState(({componentIndex}) => ({
                componentIndex: componentIndex + 1
            }));
        }
    }

    render(){
        return(
            <div className="section">
            <Container>
                <Row>
                    <Col md={4} className="card">
                        <AboutAvatar/>
                    </Col> 
                    <Col md={{span:7, offset:1}} className="card">
                            {Components[this.state.componentIndex]}
                            <Button variant="primary" onClick={this.handleShowMore}>Show more...</Button>
                    </Col>    
                </Row>
            </Container>
        </div>
        );
    }
}
