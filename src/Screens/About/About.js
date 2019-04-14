import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import AboutAvatar from './AboutAvatar';
import AboutIntroduction from './AboutIntroduction';
import AboutSkills from './AboutSkills';
import AboutAcademics from './AboutAcademics';
import AboutCert from './AboutCert';
import { CSSTransition } from 'react-transition-group';

const Components = [<AboutIntroduction/>, <AboutSkills/>, <AboutAcademics/>, <AboutCert/>];

export default class About extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            componentIndex: 0,
            btnClick: false
        }
    }

    handleNext = () => {
        let toggleNext = !this.state.btnClick;
        if(this.state.componentIndex >= Components.length - 1){
            this.setState({
                componentIndex: 0, 
                btnClick: toggleNext
            });
        }else {
            this.setState(({componentIndex}) => ({
                componentIndex: componentIndex + 1,
                btnClick: toggleNext
            }));
        }
    }

    handlePrev = () => {
        let togglePrev = !this.state.btnClick;
        if(this.state.componentIndex <= 0){
            this.setState({
                componentIndex: Components.length - 1, 
                btnClick: togglePrev
            })
        }else {
            this.setState(({componentIndex}) => ({
                componentIndex: componentIndex - 1, 
                btnClick: togglePrev
            }));
        }
    }

    render(){
        return(
            <Container>
                <Row>
                    <Col md={4} className="card">
                        <AboutAvatar/>
                    </Col> 
                    <Col md={{span:7, offset:1}} className="card">
                        <CSSTransition
                            in={this.state.btnClick}
                            timeout={300}
                            classNames="renderAbout"
                        >
                            <div className="renderAbout">
                                {Components[this.state.componentIndex]}
                            </div>
                        </CSSTransition>
                        <div className="toggleChildBtn">
                            <button className="prevBtn" onClick={this.handlePrev}>Prev</button>
                            <button className="nextBtn" onClick={this.handleNext}>Next</button>
                        </div>  
                    </Col>    
                </Row>  
            </Container>
        );
    }
}
