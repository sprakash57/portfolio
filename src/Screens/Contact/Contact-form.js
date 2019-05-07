import React from 'react';
import { Col, Form } from 'react-bootstrap';
import './Contact.css';

const phoneRegex = RegExp(/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/);
const emailRegex = RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

class ContactForm extends React.Component{
    constructor(){
        super();
        this.state = {
            name: "",
            email: "",
            phone: "",
            feedback: "",
            formSubmitted: false,
            formErrors: {
                email: "",
                phone: ""
            }
        }
    }

    hasValidFormData = ({formErrors, email, phone}) => {
        let valid = true;
        Object.values(formErrors).forEach(val => val.length > 0 && (valid = false));
        if(email === "" && phone === "") {
            valid = false;
        }
        return valid;
    }

    handleValidation = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = {...this.state.formErrors};
        switch(name) {
            case "email":
                formErrors.email = emailRegex.test(value) ? "" : "Please enter a valid email id";
                break;
            case "phone":
                formErrors.phone = phoneRegex.test(value) ? "" : "Phone number is not valid";
                break;
            default:
                break;
        }

        this.setState({formErrors, [name]: value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if(this.hasValidFormData(this.state)) {
            console.log("success");
            const {
                REACT_APP_EMAILJS_RECEIVER: receiverEmail,
                REACT_APP_EMAILJS_TEMPLATEID: template
            } = this.props.env;
        
            this.sendFeedback(
                template,
                receiverEmail,
                this.state.name,
                this.state.email,
                this.state.phone,
                this.state.feedback
            );
        
            this.setState({
              formSubmitted: true
            });
        } else {
            //to do stuff
            console.log("Failed to validate form data");
        }
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
        const {formErrors} =  this.state;
        return (
                <Col md={6}>
                    <div className="form-title">
                        <h1>GET IN TOUCH</h1>
                    </div>
                    <Form onSubmit={this.handleSubmit} noValidate>
                        <Form.Group>
                            <Form.Control 
                                type="text"
                                name="name"
                                placeholder="Name/Company" 
                                onChange={this.handleValidation}
                                />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control
                                className={formErrors.email.length > 0 ? "error" : null}
                                type="email"
                                name="email"
                                placeholder="Email*" 
                                onChange={this.handleValidation}
                                noValidate
                                />
                            {formErrors.email.length > 0 && (
                                <small className="errorMsg">{formErrors.email}</small>
                            )}
                        </Form.Group>
                        <Form.Group>
                            <Form.Control
                                className={formErrors.phone.length > 0 ? "error" : null}
                                name="phone"
                                placeholder="Phone*"
                                onChange={this.handleValidation}
                                />
                            {formErrors.phone.length > 0 && (
                                <small className="errorMsg">{formErrors.phone}</small>
                            )}
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Control 
                                as="textarea"
                                rows="6"
                                name="feedback"
                                placeholder="Feedback/message"
                                onChange={this.handleValidation}
                                />
                        </Form.Group>
                        <button id="btn" className="send-btn" type="submit">Send</button>
                    </Form>
                </Col>
            );
    }
}

export default ContactForm;