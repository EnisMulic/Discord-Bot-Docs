import React from 'react';
import ServerIcon from '../ServerIcon';

import style from './ServerNavbar.module.css';

export const ServerNavbar = () => {
    return (
        <div className={style.ServerNavbar}>
            <ServerIcon name="Test" icon="discord-logo.png" />
            <ServerIcon name="Test" icon="discord-logo.png" />
            <ServerIcon name="Test" icon="discord-logo.png" />
        </div>
    );
};
