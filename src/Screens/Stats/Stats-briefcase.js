import React, { useState } from 'react';
import { Col } from 'react-bootstrap';
import {IconContext} from 'react-icons';
import { FaBriefcase } from 'react-icons/fa';
import cx from 'classnames';

const StatsBriefcase = () => {
    const [briefcase, handleClick] = useState(false);
    return (
        <Col md={3} sm={6}>
            <div className="statsCard">
                <div className="squareInnerContainer">
                    <IconContext.Provider value={{color: "white", className: cx("squareIcon", briefcase && "animateIcon")}}>
                        <FaBriefcase onClick={() => handleClick(true)}/>       
                    </IconContext.Provider>
                    <div>
                        <h2 className={cx(briefcase && "animateValue")}>6</h2>
                        <h3>Projects worked on</h3>
                    </div>
                </div>
            </div>
        </Col>
    );
}

export default StatsBriefcase;