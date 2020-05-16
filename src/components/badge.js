import React from 'react';
import styles from './badge.module.scss';

const Badge = ({ tag }) => <span className={styles.badge}>{tag.toLowerCase()}</span>;

export default Badge;