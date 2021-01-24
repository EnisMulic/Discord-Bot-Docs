import React from 'react';

import { ReactComponent as VerifiedIcon } from '../../assets/bot-verified.svg';

import style from './BotTag.module.css';

const BotTag = (props) => {
    return (
        <span className={style.BotTag}>
            {props.isVerified && <VerifiedIcon />}
            <span className={style.BotText}>BOT</span>
        </span>
    );
};

export default BotTag;
