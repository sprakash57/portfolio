import React, { useState } from 'react';
import { Col } from 'react-bootstrap';
import { Icon } from '@iconify/react';
import chromeFill from '@iconify/react/ant-design/chrome-fill';
import cx from 'classnames';

const StatsChrome = () => {
    const [chrome, setIcon] = useState(false);
    return (
        <Col md={3} sm={6}>
            <div className="statsCard">
                <div className="squareInnerContainer">
                    <Icon 
                        icon={chromeFill} 
                        onClick={() => setIcon(true)}
                        className={cx("squareIcon", chrome && "animateIcon")}
                    />
                    <div>
                        <h2 className={cx(chrome && "animateValue")}>5</h2>
                        <h3>Web apps made</h3>
                    </div>
                </div>
            </div>
        </Col>
    );
}

export default StatsChrome;