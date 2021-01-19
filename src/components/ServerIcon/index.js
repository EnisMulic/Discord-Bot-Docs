import React from 'react';
import PropTypes from 'prop-types';

import style from './ServerIcon.module.css';

import Logo from '../../assets/discord-logo.png';

const ServerIcon = (props) => {
    return (
        <div className={style.ServerIcon}>
            {props.children || <img src={Logo} alt={props.name} />}
        </div>
    );
};

ServerIcon.propTypes = {
    name: PropTypes.string.isRequired,
    icon: PropTypes.string,
};

export default ServerIcon;
