import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ContactForm from './Contact-form';
import ContactInfo from './Contact-info';
import { Icon } from '@iconify/react';
import githubOctocat from '@iconify/react/logos/github-octocat';
import linkedinFill from '@iconify/react/ant-design/linkedin-fill';

import googleIcon from '@iconify/react/flat-ui/google';
import facebookWithCircle from '@iconify/react/entypo-social/facebook-with-circle';


class Contact extends React.Component{
    state = {
        mobileView: false
    }

    // updateSize = () => {
    //     if(window.innerWidth < 768) this.setState({mobileView: true});
    //     else this.setState({mobileView:false});
    // }

    // componentWillMount(){
    //     window.removeEventListener("resize", this.updateSize);
    // }

    // componentDidMount(){
    //     this.updateSize();
    //     window.addEventListener("resize", this.updateSize);
    // }

    render(){
        
        return  (
            <Container className="form-section">
                <Row>
                    <ContactForm env={this.props.env}/>
                    <ContactInfo/>
                </Row>
                <Row className="form-social">
                    <Col xs={3}>
                        <a href="https://github.com/sprakash57" target="_blank"><Icon icon={githubOctocat}/></a>
                    </Col>
                    <Col xs={3}>
                        <a href="https://www.linkedin.com/in/sunny-prakash-3780ba49/" target="_blank"><Icon icon={linkedinFill} style={{color: "#395181"}}/></a>
                    </Col>
                    <Col xs={3}>
                        <a href="https://play.google.com/store/apps/developer?id=Sunny+Prakash" target="_blank"><Icon icon={googleIcon} style={{fontSize: "2rem"}}/></a>                       
                    </Col>
                    <Col xs={3}>
                        <a href="https://www.facebook.com/sprgm" target="_blank"><Icon icon={facebookWithCircle} style={{color: "#395185"}}/></a>   
                    </Col>
                </Row>
            </Container>
        );
    }
    
}

export default Contact;