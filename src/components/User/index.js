import React from 'react';
import PropTypes from 'prop-types';

import style from './User.module.css';

const User = (props) => {
    return (
        <div className={style.User}>
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
