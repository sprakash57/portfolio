import React, { useState } from 'react';
import { Col } from 'react-bootstrap';
import cx from 'classnames';
import { Icon } from '@iconify/react';
import clockIcon from '@iconify/react/mdi/clock';

const StatsClock = () => {
    const [clock, setIcon] = useState(false);
    return (
        <Col md={3} sm={6}>
            <div className="statsCard">
                <div className="squareInnerContainer">
                    <Icon
                        icon={clockIcon}
                        onClick={() => setIcon(true)}
                        className={cx("squareIcon", clock && "animateIcon")}
                    />
                    <div>
                        <h2 className={cx(clock && "animateValue")}>4.5+</h2>
                        <h3>Years of Experience</h3>
                    </div>
                </div>
            </div>
        </Col>
    );
}

export default StatsClock;