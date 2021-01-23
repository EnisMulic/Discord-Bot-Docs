import React from 'react';
import PropTypes from 'prop-types';

import UserIcon from '../UserIcon';

import style from './Message.module.css';

const Message = (props) => {
    return (
        <div className={style.Message}>
            <div className={style.Icon}>
                <UserIcon />
            </div>
            <div className={style.Info}>
                <h4
                    style={{
                        color: props.color,
                    }}
                >
                    <strong>{props.name}</strong>
                </h4>
                <div>{props.children}</div>
            </div>
        </div>
    );
};

Message.propTypes = {
    color: PropTypes.string.isRequired,
};

export default Message;
