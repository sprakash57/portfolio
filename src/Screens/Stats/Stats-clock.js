import React, { useState } from 'react';
import { Col } from 'react-bootstrap';
import {IconContext} from 'react-icons';
import { FaClock } from 'react-icons/fa';
import cx from 'classnames';

const StatsClock = () => {
    const [clock, handleClock] = useState(false);
    return (
        <Col md={3} sm={6}>
            <div className="statsCard">
                <div className="squareInnerContainer">
                    <IconContext.Provider value={{color: "white", className: cx("squareIcon", clock && "animateIcon")}}>
                        <FaClock onClick={() => handleClock(true)}/>       
                    </IconContext.Provider>
                    <div>
                        <h2 className={cx(clock && "animateValue")}>4+</h2>
                        <h3>Years of Experience</h3>
                    </div>
                </div>
            </div>
        </Col>
    );
}

export default StatsClock;