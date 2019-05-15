import React from 'react';
import {Modal, Button} from 'react-bootstrap';
import { Icon } from '@iconify/react';

class PortfolioModal extends React.Component {

    weatherBody = () => (
        <ul>
            <li>Country: {this.props.content.country}</li>
            <li>Weather: {this.props.content.weather}</li>
            <li>Temperature: {this.props.content.temp}</li>
            <li>Sunset: {this.props.content.sunset}</li>
            <li>Sunrise: {this.props.content.sunrise}</li>
        </ul>
    );

    render(){
        const { city, icon, title, stack, body } = this.props.content;
        const weatherIcon = `http://openweathermap.org/img/w/${icon}.png`;
        console.log(this.props.content);
        return (
            <Modal
                {...this.props}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        { city || title }
                        { icon && <img src={weatherIcon}/>}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    { stack !== undefined && stack.map(item => <Icon icon={item}/>)}
                    { city ? this.weatherBody() : (<p>{ body }</p>)}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={this.props.onHide}>close</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default PortfolioModal;