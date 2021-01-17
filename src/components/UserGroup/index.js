import React from 'react';
import PropTypes from 'prop-types';

import User from '../User';

import style from './UserGroup.module.css';

const UserGroup = (props) => {
    return (
        <div className={style.UserGroup}>
            <h5>{props.name + '-' + props.users.length}</h5>
            {props.users.map((user, index) => {
                return <User name={user} key={index} color={props.color} />;
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
