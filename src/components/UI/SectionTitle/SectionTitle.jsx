import React from 'react';
import './SectionTitle.scss';

const SectionTitle = ({ classes = "", children }) => <h2 className={`${classes} _titles`}>{children}</h2>

export default SectionTitle;