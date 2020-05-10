import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialIcon = ({ icon, to, size }) => {
    return (
        <a href={to} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={icon} color='grey' size={size} />
        </a>
    )
}

export default SocialIcon;