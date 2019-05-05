import React, { useState } from 'react';
import { Col } from 'react-bootstrap';
import { Icon } from '@iconify/react';
import briefcaseIcon from '@iconify/react/entypo/briefcase';
import cx from 'classnames';

const StatsBriefcase = () => {
    const [briefcase, setIcon] = useState(false);
    return (
        <Col md={3} sm={6}>
            <div className="statsCard">
                <div className="squareInnerContainer">
                    <Icon 
                        icon={briefcaseIcon} 
                        onClick={() => setIcon(true)}
                        className={cx("squareIcon", briefcase && "animateIcon")}
                    />
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