import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialIcon = ({ icon, to, size }) => {
    return (
        <a href={to} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={icon} color='#A9A9A9' size={size} />
        </a>
    )
}

export default SocialIcon;