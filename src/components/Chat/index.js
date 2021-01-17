import React from 'react';
import MessageBar from '../MessageBar';

import style from './Chat.module.css';

const Chat = () => {
    return (
        <div className={style.Chat}>
            <MessageBar />
        </div>
    );
};

export default Chat;
