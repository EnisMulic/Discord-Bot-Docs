import React from 'react';
import PropTypes from 'prop-types';
import UserIcon from '../UserIcon';

import style from './Message.module.css';
import User from '../User';

const Message = (props) => {
    return (
        <div className={style.Message}>
            <div className={style.Icon}>
                <UserIcon />
            </div>
            <div className="Info">
                <h4
                    style={{
                        color: props.color,
                    }}
                >
                    {props.name}
                </h4>
                <p>{props.content}</p>
            </div>
        </div>
    );
};

Message.propTypes = {
    content: PropTypes.string.isRequired,
};

export default Message;
