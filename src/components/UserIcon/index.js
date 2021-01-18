import React from 'react';
import PropTypes from 'prop-types';

import style from './UserIcon.module.css';

import Logo from '../../assets/discord-logo.png';

const UserIcon = (props) => {
    return (
        <div className={style.UserIcon}>
            <img src={Logo} alt="User Icon" />
        </div>
    );
};

UserIcon.propTypes = {
    icon: PropTypes.string,
};

export default UserIcon;
