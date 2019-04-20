import React, { useState } from 'react';
import { Col } from 'react-bootstrap';
import {IconContext} from 'react-icons';
import { FaAndroid } from 'react-icons/fa';
import cx from 'classnames';

const StatsAndroid = () => {
    const [android, handleAndroid] = useState(false);
    return (
        <Col md={3} sm={6}>
            <div className="statsCard">
                <div className="squareInnerContainer">
                    <IconContext.Provider value={{color: "white", className: cx("squareIcon", android && "animateIcon")}}>
                        <FaAndroid onClick={() => handleAndroid(true)}/>       
                    </IconContext.Provider>
                    <div>
                        <h2 className={cx(android && "animateValue")}>32</h2>
                        <h3>Apps Downloads</h3>
                    </div>
                </div>
            </div>
        </Col>
    );
}

export default StatsAndroid;