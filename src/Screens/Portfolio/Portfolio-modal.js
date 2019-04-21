import React from 'react';
import {Modal, Button} from 'react-bootstrap';
import { Icon } from '@iconify/react';

class PortfolioModal extends React.Component {

    handleClick = () => {
        window.open(this.props.content.url);
    }

    render(){
        const { title, stack, body } = this.props.content;
        return (
            <Modal
                {...this.props}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter" onClick={this.handleClick}>
                        { title }
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    { stack !== undefined && stack.map(item => <Icon icon={item}/>)}
                    <p>{ body }</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={this.props.onHide}>close</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default PortfolioModal;