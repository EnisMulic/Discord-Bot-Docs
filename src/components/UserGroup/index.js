import React from 'react';
import PropTypes from 'prop-types';

import User from '../User';

import style from './UserGroup.module.css';

const UserGroup = (props) => {
    return (
        <div className={style.UserGroup}>
            <h5>{props.name + '-' + props.users.length}</h5>
            {props.users.map((user) => {
                const { id, name, color, isBot, isVerified } = user;
                return (
                    <User
                        name={name}
                        key={id}
                        color={color}
                        isBot={isBot}
                        isVerified={isVerified}
                    />
                );
            })}
        </div>
    );
};

UserGroup.propTypes = {
    name: PropTypes.string.isRequired,
    users: PropTypes.array,
    color: PropTypes.string,
};

export default UserGroup;
