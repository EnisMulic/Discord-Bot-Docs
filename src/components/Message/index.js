import React from 'react';
import PropTypes from 'prop-types';

import UserIcon from '../UserIcon';
import BotTag from '../BotTag';

import style from './Message.module.css';

import { toHTML } from 'discord-markdown';

const Message = (props) => {
    const msg = toHTML(props.content);

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
                    {props.isBot && <BotTag />}
                </h4>
                <div
                    className={style.ContentWrapper}
                    dangerouslySetInnerHTML={{ __html: msg }}
                ></div>
            </div>
        </div>
    );
};

Message.propTypes = {
    color: PropTypes.string.isRequired,
};

export default Message;
