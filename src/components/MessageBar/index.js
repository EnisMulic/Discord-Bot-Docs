import React from 'react';

import { ReactComponent as PlusIcon } from '../../assets/plus.svg';
import style from './MessageBar.module.css';

const MessageBar = () => {
    return (
        <div className={style.MessageBar}>
            <div className={style.PlusIcon}>
                <PlusIcon />
            </div>
            <div className={style.TextBar}></div>
        </div>
    );
};

export default MessageBar;
