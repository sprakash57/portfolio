import React from 'react';
import Typed from 'react-typed';
import {Container, Col, Row} from 'react-bootstrap';
import cx from 'classnames';
import { Icon } from '@iconify/react';
import sunsetIcon from '@iconify/react/noto-v1/sunset';
import sunriseovermountainsIcon from '@iconify/react/fxemoji/sunriseovermountains';
import sunIcon from '@iconify/react/twemoji/sun';
import nightWithStars from '@iconify/react/twemoji/night-with-stars';


  const getTime = () => {
    const hrs = new Date().getHours();
    switch(true) {
      case (hrs < 12):
        return {"greeting":"Good Morning!!", "bgIcon": sunriseovermountainsIcon, "bgStyle":"morning"}
      case (hrs >= 12 && hrs < 16):
        return {"greeting":"Good Afternoon!!", "bgIcon": sunIcon, "bgStyle":"noon"}
      case (hrs >= 16 && hrs < 19):
        return {"greeting":"Good Evening!!", "bgIcon": sunsetIcon, "bgStyle":"evening"}
      default:
        return {"greeting":"Good Evening!!", "bgIcon": nightWithStars, "bgStyle":"night"}
    }
  }
   
  const Welcome = () => (
      <Container>
        <Row>
          <Col xs={12}>
            <div>
              <h2 className={cx(getTime().bgStyle, "greetings")}>{getTime().greeting}</h2>
              <Icon icon={getTime().bgIcon} className="greetings-icon"/>
            </div>
            <div className="content">
              <h1>SUNNY PRAKASH</h1>
              <Typed
                className="usp"
                strings={['Android Dev','Web developer','Anime freak','Learning everyday']} 
                typeSpeed={65}
                backSpeed={65}
                loop
              />
              <div style={{paddingTop: 60}}>
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