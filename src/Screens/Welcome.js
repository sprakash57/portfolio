import React from 'react';
import Typed from 'react-typed';
import {Container, Col, Row} from 'react-bootstrap';
   
  const Welcome = () => (
      <Container>
        <Row>
          <Col xs={12}>
            <div className="content">
              <h1>SUNNY PRAKASH</h1>
              <Typed
                className="usp"
                strings={['Android Dev','Web development','Anime freak','Learning never stops']} 
                typeSpeed={65}
                backSpeed={40}
                loop
              />
            </div>
          </Col>  
        </Row>  
        <div>
          <a className="resumeBtn" href="#">My Resume</a> 
        </div>
      </Container>
  );

export default Welcome;