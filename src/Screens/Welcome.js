import React from 'react';
import Typed from 'react-typed';
import {Container, Col, Row} from 'react-bootstrap';
import cx from 'classnames';

  const getTime = () => {
    let hrs = new Date().getHours();
    console.log(hrs);
    switch(true) {
      case (hrs < 12):
        return {"greeting":"Good Morning!!", "bgStyle": "morning"}
      case (hrs >= 12 && hrs < 16):
        return {"greeting":"Good Afternoon!!", "bgStyle": "noon"}
      case (hrs >= 16 && hrs < 22):
        return {"greeting":"Good Evening!!", "bgStyle": "evening"}
      default:
        return {"greeting":"Good Evening!!", "bgStyle": "night"}
    }
  }

   
  const Welcome = () => (
      <Container>
        <Row>
          <Col xs={12}>
          <div className={cx(getTime().bgStyle, 'time')}>
              <h3>{getTime().greeting}</h3>
          </div>
            <div className="content">
              <h1>SUNNY PRAKASH</h1>
              <Typed
                className="usp"
                strings={['Android Dev','Web developer','Anime freak','Learning everyday']} 
                typeSpeed={65}
                backSpeed={40}
                loop
              />
              <div style={{paddingTop: 80}}>
                <a 
                  className="resumeBtn" 
                  href="https://drive.google.com/open?id=1nfWrLujpIlUHXG2bi3nxOB7q_lIdCPt0"
                  target="_blank">My Resume</a>
              </div>
            </div>            
          </Col>           
        </Row>  
      </Container>
  );

export default Welcome;