import React from 'react';
import Message from '../Message';
import MessageBar from '../MessageBar';

import style from './Chat.module.css';

const Chat = () => {
    return (
        <div className={style.Chat}>
            <MessageBar />
            <Message
                content="Test Test Test Test"
                name="User 1"
                color="#6a0dad"
            />
            <Message
                content="Test Test Test Test"
                name="User 2"
                color="#6a0dad"
            />
            <Message
                content="Test Test Test Test"
                name="User 3"
                color="#6a0dad"
            />
        </div>
    );
};

export default Chat;
