import React from 'react';
import { Col, Form, Button } from 'react-bootstrap';
import './Contact.css';

class ContactForm extends React.Component{
    constructor(){
        super();
        this.state = {
            name: "",
            email: "",
            phone: "",
            feedback: "",
            formSubmitted: false
        }
    }

    static sender = "12prakash.sunny@gmail.com";

    handleFeedback = (event) => {
        this.setState({
            ...this.state,
            feedback:event.target.value
        })
    }

    handleName = (event) => {
        this.setState({
            ...this.state,
            name:event.target.value
        })
    }

    handlePhone = (event) => {
        this.setState({
            ...this.state,
            phone:event.target.value
        })
    }

    handleEmail = (event) => {
        this.setState({
            ...this.state,
            email:event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
    
        const {
            REACT_APP_EMAILJS_RECEIVER: receiverEmail,
            REACT_APP_EMAILJS_TEMPLATEID: template
        } = this.props.env;
    
        this.sendFeedback(
            template,
        //   this.sender,
            receiverEmail,
            this.state.name,
            this.state.email,
            this.state.phone,
            this.state.feedback
        );
    
        this.setState({
          formSubmitted: true
        });
    }

    sendFeedback = (templateId, receiverEmail, name, phone, email, feedback) => {
        window.emailjs
        .send('gmail', templateId, {
            receiverEmail,
            name,
            phone,
            email,
            feedback
        })
        .then(res => {
          this.setState({
            name:'',
            email:'',
            phone:'',
            feedback:'',
            formSent: true
          });
        })
        // Handle errors here however you like
        .catch(err => console.error('Failed to send feedback. Error: ', err));
    }

    render(){
        return (
                <Col md={6}>
                    <div className="form-title">
                        <h1>Get in touch</h1>
                    </div>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="text" value={this.state.name} placeholder="Name/Company" onChange={this.handleName}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control type="email" value={this.state.email} placeholder="Email" onChange={this.handleEmail}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control
                                type="tel"
                                pattern="^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$"
                                value={this.state.phone}
                                placeholder="Phone e.g. +1 9XXXXXXXXX"
                                onChange={this.handlePhone}/>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Control 
                                as="textarea"
                                rows="5"
                                placeholder="Feedback/message"
                                onChange={this.handleFeedback} 
                                value={this.state.feedback}/>
                        </Form.Group>
                        <Button variant="primary" type="submit">Send</Button>
                    </Form>
                </Col>
            );
    }
}

export default ContactForm;