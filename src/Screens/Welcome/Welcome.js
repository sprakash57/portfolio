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
import NodeGeocoder from 'node-geocoder';
import {googleMapAPI, weatherAPI, formatTime, myResume, placeConfig} from '../../utils';
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

  const getLocation = () => {
    let geoCoder = NodeGeocoder(placeConfig);
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        geoCoder.reverse({lat: position.coords.latitude, lon: position.coords.longitude}, (err, res) => {
          if(!err) {
              fetch(`https://api.openweathermap.org/data/2.5/weather?q=${res[0].city || res[0].extra.neighborhood}&APPID=${weatherAPI}`)
                  .then(response => response.json())
                  .then(data => setWeather({
                      city: data.name,
                      icon: data.weather[0].icon,
                      country: data.sys.country,
                      weather: data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1),
                      temp: Math.ceil(data.main.temp - 273.15),
                      sunset: formatTime(data.sys.sunset),
                      sunrise: formatTime(data.sys.sunrise)
                  }))
          } else {
            console.log("location not found");
          }
        })
      })
    } else {
      console.log("Geolocaiton is not supported in this browser");
    }
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
                  href={myResume}
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