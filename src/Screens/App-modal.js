import React from 'react';
import {Modal, Button, Col, Row, Container} from 'react-bootstrap';
import { Icon } from '@iconify/react';
import sunsetIcon from '@iconify/react/whh/sunset';
import sunriseIcon from '@iconify/react/whh/sunrise';

class PortfolioModal extends React.Component {
    
    weatherBody = () => {
        const weatherIcon = `https://openweathermap.org/img/w/${this.props.content.icon}.png`;
        return (
            <Container>
                <Row>
                    <Col xs={6} style={{paddingLeft: 0}}>
                        <Row className="weather-text">
                            <img src={weatherIcon}/>
                            <span>{this.props.content.weather}</span>
                        </Row>
                        <Row className="weather-sun">
                            <Col sm={6}><Icon icon={sunriseIcon}/><small>{this.props.content.sunrise}</small></Col>
                            <Col sm={6}><Icon icon={sunsetIcon}/><small>{this.props.content.sunset}</small></Col>
                        </Row>
                    </Col>
                    <Col xs={6} className="weather-temp">
                        <p>{this.props.content.temp}&#8451;</p>
                    </Col>
                </Row>
            </Container>
        );
    }

    render(){
        const { city, country, title, stack, body } = this.props.content;
        return (
            <Modal
                {...this.props}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        { city ? 
                            `${city}, ${country}`
                            : 
                            title
                        }
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    { stack !== undefined && stack.map(item => <Icon icon={item}/>)}
                    { city ? this.weatherBody() : (<p>{ body }</p>)}
                </Modal.Body>
                {city ? "" : (
                    <Modal.Footer>
                        <Button variant="danger" onClick={this.props.onHide}>close</Button>
                    </Modal.Footer>
                    )
                }
            </Modal>
        )
    }
}

export default PortfolioModal;