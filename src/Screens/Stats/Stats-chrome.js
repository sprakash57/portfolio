import React, { useState } from 'react';
import { Col } from 'react-bootstrap';
import {IconContext} from 'react-icons';
import { FaChrome } from 'react-icons/fa';
import cx from 'classnames';

const StatsChrome = () => {
    const [chrome, handleClick] = useState(false);
    return (
        <Col md={3} sm={6}>
            <div className="statsCard">
                <div className="squareInnerContainer">
                    <IconContext.Provider value={{color: "white", className: cx("squareIcon", chrome && "animateIcon")}}>
                        <FaChrome onClick={() => handleClick(true)}/>       
                    </IconContext.Provider>
                    <div>
                        <h2 className={cx(chrome && "animateValue")}>5</h2>
                        <h3>web apps made</h3>
                    </div>
                </div>
            </div>
        </Col>
    );
}

export default StatsChrome;