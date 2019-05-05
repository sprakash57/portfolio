import React, { useState } from 'react';
import { Col } from 'react-bootstrap';
import { Icon } from '@iconify/react';
import socialAndroid from '@iconify/react/foundation/social-android';
import cx from 'classnames';

const StatsAndroid = () => {
    const [android, setIcon] = useState(false);
    return (
        <Col md={3} sm={6}>
            <div className="statsCard">
                <div className="squareInnerContainer">
                    <Icon 
                        icon={socialAndroid} 
                        onClick={() => setIcon(true)}
                        className={cx("squareIcon", android && "animateIcon")}
                    />
                    <div>
                        <h2 className={cx(android && "animateValue")}>32</h2>
                        <h3>App downloads</h3>
                    </div>
                </div>
            </div>
        </Col>
    );
}

export default StatsAndroid;