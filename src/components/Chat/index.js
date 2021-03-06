import React from 'react';
import Embed from '../Embed';

import Message from '../Message';
import MessageBar from '../MessageBar';

import style from './Chat.module.css';

const Chat = (props) => {
    const initialContent =
        'this `supports` __a__ **subset** *of* ~~markdown~~ 😃 ```js\nfunction foo(bar) {\n  console.log(bar);\n}\n\nfoo(1);```';
    const initialColor = Math.floor(Math.random() * 0xffffff);
    const initialEmbed = {
        title: 'title ~~(did you know you can have markdown here too?)~~',
        description:
            'this supports [named links](https://discordapp.com) on top of the previously shown subset of markdown. ```\nyes, even code blocks```',
        url: 'https://discordapp.com',
        color: initialColor,
        timestamp: new Date().toISOString(),
        footer: {
            icon_url: 'https://cdn.discordapp.com/embed/avatars/0.png',
            text: 'footer text',
        },
        thumbnail: { url: 'https://cdn.discordapp.com/embed/avatars/0.png' },
        image: { url: 'https://cdn.discordapp.com/embed/avatars/0.png' },
        author: {
            name: 'author name',
            url: 'https://discordapp.com',
            icon_url: 'https://cdn.discordapp.com/embed/avatars/0.png',
        },
        fields: [
            {
                name: '🤔',
                value: 'some of these properties have certain limits...',
            },
            { name: '😱', value: 'try exceeding some of them!' },
            {
                name: '🙄',
                value:
                    'an informative error should show up, and this view will remain as-is until all issues are fixed',
            },
            {
                name: '<:thonkang:219069250692841473>',
                value: 'these last two',
                inline: true,
            },
            {
                name: '<:thonkang:219069250692841473>',
                value: 'are inline fields',
                inline: true,
            },
        ],
    };

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
                <Message name="Enis" color="#fff" isBot isEmbed>
                    <Embed {...initialEmbed} />
                </Message>
            </div>
            <MessageBar />
        </div>
    );
};

export default Chat;
