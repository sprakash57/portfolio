import React from 'react';
import avatar from '../Assets/about.jpg';

const AboutAvatar = () => (
    <React.Fragment>
        <img className="avatar" src={avatar}/>
        <div className="myName textColor">
            <h3>
                <b>Sunny Prakash</b>
            </h3>
            <p>Web Developer</p>
        </div>
    </React.Fragment>
);

export default AboutAvatar;