import React from 'react';
import { Container, Row } from 'react-bootstrap';
import ContactForm from './Contact-form';
import ContactInfo from './Contact-info';

class Contact extends React.Component{
    state = {
        mobileView: false
    }

    updateSize = () => {
        if(window.innerWidth < 768) this.setState({mobileView: true});
        else this.setState({mobileView:false});
    }

    componentWillMount(){
        window.removeEventListener("resize", this.updateSize);
    }

    componentDidMount(){
        this.updateSize();
        window.addEventListener("resize", this.updateSize);
    }

    render(){
        
        return  (
            <Container className="section">
                <Row>
                    {this.state.mobileView?(
                        <div>
                            <h2>Feedback/Message</h2>
                            <p>Use the favicon to submit any feedbacks</p>
                        </div>
                    ):(
                        <ContactForm env={this.props.env}/>
                    )}
                    <ContactInfo/>
                </Row>
            </Container>
        );
    }
    
}

export default Contact;