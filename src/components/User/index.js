import React from 'react';
import PropTypes from 'prop-types';

import style from './User.module.css';
import UserIcon from '../UserIcon';
import BotTag from '../BotTag';

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
            {props.isBot && <BotTag isVerified />}
        </div>
    );
};

User.propTypes = {
    name: PropTypes.string.isRequired,
};

export default User;
