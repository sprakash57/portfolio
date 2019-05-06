import React from 'react';
import { Col, Form } from 'react-bootstrap';
import cx from 'classnames';
import './Contact.css';

const phoneRegex = RegExp(/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/);
const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

class ContactForm extends React.Component{
    constructor(){
        super();
        this.state = {
            name: "",
            email: "",
            phone: "",
            feedback: "",
            formSubmitted: false,
            valid: true,
            formErrors: {
                email: "",
                phone: ""
            }
        }
    }

    formValid = ({formErrors, email, phone}) => {
        let valid = true;
        Object.values(formErrors).forEach(val => val.length > 0 && (valid = false));
        if(email === "" && phone === "") {
            valid = false;
        }
        console.log(valid);
        return valid;
    }

    //static sender = "12prakash.sunny@gmail.com";

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

    handleValidation = e => {
        e.preventDefault();
        const { name, value } = e.target;
        console.log(name, value);
        let formErrors = {...this.state.formErrors};
        switch(name) {
            case "Email":
                formErrors.email = emailRegex.test(value) ? "" : "Email is not valid";
                break;
            case "Phone":
                formErrors.phone = phoneRegex.test(value) ? "" : "Phone number is not valid";
                break;
            default:
                break;
        }

        this.setState({formErrors, [name]: value}, () => console.log("validattion data", this.state));
    }

    handleBtnAnimation = () => {
        let btn = document.getElementById('btn');
        btn.classList.remove("shake-btn");
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if(this.formValid(this.state)) {
            const {email, phone} = this.state;
            console.log("success", email, phone);
        } else {
            console.log("failure");
            this.setState({...this.state, valid: false});
            this.handleBtnAnimation();
        }
        // const {
        //     REACT_APP_EMAILJS_RECEIVER: receiverEmail,
        //     REACT_APP_EMAILJS_TEMPLATEID: template
        // } = this.props.env;
    
        // this.sendFeedback(
        //     template,
        // //   this.sender,
        //     receiverEmail,
        //     this.state.name,
        //     this.state.email,
        //     this.state.phone,
        //     this.state.feedback
        // );
    
        // this.setState({
        //   formSubmitted: true
        // });
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
        const {formErrors, valid} =  this.state;
        console.log('render', valid);
        return (
                <Col md={6}>
                    <div className="form-title">
                        <h1>GET IN TOUCH</h1>
                    </div>
                    <Form onSubmit={this.handleSubmit} noValidate>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control 
                                type="text" 
                                value={this.state.name} 
                                placeholder="Name/Company" 
                                onChange={this.handleName}
                                />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control
                                className={formErrors.email.length > 0 ? "error" : null}
                                type="email"
                                name="Email"
                                placeholder="Email*" 
                                onChange={this.handleValidation}
                                noValidate
                                />
                            {!valid && (
                                <span className="errorMsg">{formErrors.email}</span>
                            )}
                        </Form.Group>
                        <Form.Group>
                            <Form.Control
                                className={formErrors.phone.length > 0 ? "error" : null}
                                name="Phone"
                                placeholder="Phone*"
                                onChange={this.handleValidation}
                                />
                            {!valid && (
                                <span className="errorMsg">{formErrors.phone}</span>
                            )}
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Control 
                                as="textarea"
                                rows="6"
                                placeholder="Feedback/message"
                                onChange={this.handleFeedback} 
                                value={this.state.feedback}/>
                        </Form.Group>
                        <button id="btn" className={cx("send-btn")} type="submit">Send</button>
                    </Form>
                </Col>
            );
    }
}

export default ContactForm;