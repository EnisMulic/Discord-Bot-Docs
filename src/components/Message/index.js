import React from 'react';
import PropTypes from 'prop-types';

import UserIcon from '../UserIcon';
import BotTag from '../BotTag';

import style from './Message.module.css';

import { toHTML } from 'discord-markdown';
import { textEmoji } from 'markdown-to-text-emoji';

const Message = (props) => {
    const msg = toHTML(textEmoji(props.content));

    let msgClasses = [style.Message];
    if (msg.includes('d-user')) {
        msgClasses.push(style.Mention);
    }

    return (
        <div className={msgClasses.join(' ')}>
            <div className={style.Icon}>
                <UserIcon />
            </div>
            <div className={style.Info}>
                <h4
                    style={{
                        color: props.color,
                    }}
                >
                    {props.name}
                    {props.isBot && <BotTag isVerified={props.isVerified} />}
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
