import React from 'react';

import Message from '../Message';
import MessageBar from '../MessageBar';

import style from './Chat.module.css';

const Chat = () => {
    const messages = new Array(20);
    for (let i = 0; i < 20; i++) {
        messages[i] = 'Test';
    }

    return (
        <div className={style.Chat}>
            <div className={style.Spacer} />
            <div className={style.Messages}>
                {messages.map((i, index) => {
                    return (
                        <Message
                            key={index}
                            content="***aa*** ~~aaa~~ https://www.github.com `aaa` @here @everyone :smile::rofl:"
                            name="User 1"
                            color="#6a0dad"
                            isBot
                        />
                    );
                })}
            </div>
            <MessageBar />
        </div>
    );
};

export default Chat;
