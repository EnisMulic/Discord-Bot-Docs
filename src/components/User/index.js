import React from 'react';
import PropTypes from 'prop-types';

import style from './User.module.css';
import UserIcon from '../UserIcon';

const User = (props) => {
    return (
        <div className={style.User}>
            <UserIcon />
            <h4
                style={{
                    color: props.color,
                }}
            >
                {props.name}
            </h4>
        </div>
    );
};

User.propTypes = {
    name: PropTypes.string.isRequired,
};

export default User;
