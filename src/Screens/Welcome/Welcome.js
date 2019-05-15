import React from 'react';
import Typed from 'react-typed';
import {Container, Col, Row} from 'react-bootstrap';
import cx from 'classnames';
import { Icon } from '@iconify/react';
import sunsetIcon from '@iconify/react/noto-v1/sunset';
import sunriseovermountainsIcon from '@iconify/react/fxemoji/sunriseovermountains';
import sunraysIcon from '@iconify/react/fxemoji/sunrays';
import nightWithStars from '@iconify/react/twemoji/night-with-stars';
import WeatherModal from '../App-modal';
import './Welcome.css';

   
function Welcome() {
  const [showModal, setShowModal] = React.useState(false);
  const [weatherData, setWeather] = React.useState({
                                      city: "",
                                      icon: "",
                                      country: "",
                                      weather: "",
                                      sunset: "",
                                      sunrise: "",
                                      temp: ""
                                    }  
                                  );

  const getTime = () => {
    const hrs = new Date().getHours();
    switch(true) {
      case (hrs < 12):
        return {"greeting":"Good Morning!", "bgIcon": sunriseovermountainsIcon, "bgStyle":"morning"}
      case (hrs >= 12 && hrs < 16):
        return {"greeting":"Good Afternoon!", "bgIcon": sunraysIcon, "bgStyle":"noon"}
      case (hrs >= 16 && hrs < 20):
        return {"greeting":"Good Evening!", "bgIcon": sunsetIcon, "bgStyle":"evening"}
      default:
        return {"greeting":"Good Evening!", "bgIcon": nightWithStars, "bgStyle":"night"}
    }
  }

  const formatTime = (time) => {
    let date = new Date(time * 1000);
    let hh = date.getHours();
    let mm = date.getMinutes();

    if(hh<10) hh = `0${hh}`;
    if(mm<10) mm = `0${mm}`; 
    if(hh>12) {
      hh = hh - 12;
      return hh !== 11 ?`0${hh}:${mm} PM`:`${hh}:${mm} PM`
    }
    return `${hh}:${mm} AM`;
  }

  const getLocation = () => {
    let countryName, city;
    fetch("https://geoip-db.com/json/")
        .then(resp => resp.json())
        .then(loc => {
                countryName = loc.country_name;
                city = loc.city;
                return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=b16f2ce13b743124891d61551c569230`)
            })
              .then(resp => resp.json())
              .then(data => setWeather({
                    city: data.name,
                    icon: data.weather[0].icon,
                    country: countryName,
                    weather: data.weather[0].description,
                    temp: (data.main.temp - 273.15).toFixed(2),
                    sunset: formatTime(data.sys.sunset),
                    sunrise: formatTime(data.sys.sunrise)
                  })
                )
    setShowModal(true);
  }

  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col xs={12}>
            <div>
              <h2 className={cx(getTime().bgStyle, "greetings")}>{getTime().greeting}</h2>
              <Icon icon={getTime().bgIcon} className="greetings-icon" onClick={getLocation}/>
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
      <WeatherModal show={showModal} onHide={() => setShowModal(false)} content={weatherData}/>
    </React.Fragment>
    )
};

export default Welcome;