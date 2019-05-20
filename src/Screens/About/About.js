import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import AboutAvatar from './About-avatar';
import AboutIntroduction from './About-introduction';
import AboutSkills from './About-skills';
import { CSSTransition } from 'react-transition-group';
import { Icon } from '@iconify/react';
import roundArrowForwardIos from '@iconify/react/ic/round-arrow-forward-ios';
import roundArrowBackIos from '@iconify/react/ic/round-arrow-back-ios';

import './About.css';

const Components = [<AboutIntroduction/>, <AboutSkills/>];

export default class About extends React.Component {
    state = {
            componentIndex: 0,
            btnClick: false
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
                        <Icon icon={roundArrowBackIos} className="prevBtn" onClick={this.handlePrev}>Prev</Icon>
                        <Icon icon={roundArrowForwardIos} className="nextBtn" onClick={this.handleNext}>Next</Icon>
                    </Col>
                    
                </Row>  
            </Container>
        );
    }
}
