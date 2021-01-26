import React from 'react';

import Message from '../Message';
import MessageBar from '../MessageBar';

import style from './Chat.module.css';

const Chat = (props) => {
    return (
        <div className={style.Chat}>
            <div className={style.Spacer} />
            <div className={style.Messages}>
                {props.messages.map((message) => {
                    console.log(message);
                    const { id, content, name, color, isBot } = message;
                    return (
                        <Message
                            key={id}
                            content={content}
                            name={name}
                            color={color}
                            isBot={isBot}
                        />
                    );
                })}
            </div>
            <MessageBar />
        </div>
    );
};

export default Chat;
