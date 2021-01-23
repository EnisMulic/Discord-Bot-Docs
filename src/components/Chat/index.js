import React from 'react';
import Highlight from 'react-highlight.js';

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
                            content="Test Test Test Test"
                            name="User 1"
                            color="#6a0dad"
                        >
                            <Highlight language={'cpp'}>
                                {`int main()\n{\n return 0;\n}\n`}
                            </Highlight>
                        </Message>
                    );
                })}
            </div>
            <MessageBar />
        </div>
    );
};

export default Chat;
