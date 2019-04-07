import React from 'react';
import {Modal, Button} from 'react-bootstrap';

class PortfolioModal extends React.Component {
    render(){
        return (
            <Modal
                {...this.props}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {this.props.content.title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                        ac consectetur ac, vestibulum at eros.
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>close</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default PortfolioModal;