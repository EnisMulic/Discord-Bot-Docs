import React from 'react';
import ServerIcon from '../ServerIcon';

import style from './ServerNavbar.module.css';

import { ReactComponent as AddServer } from '../../assets/circle-plus.svg';
import { ReactComponent as DiscoverServer } from '../../assets/discover.svg';
import { ReactComponent as Discover } from '../../assets/discord.svg';

export const ServerNavbar = () => {
    return (
        <div className={style.ServerNavbar}>
            <ServerIcon name="Test">
                <Discover className={style.Home} />
            </ServerIcon>
            <div className={style.Break}>
                <div></div>
            </div>
            <ServerIcon name="Test" icon="discord-logo.png" />
            <ServerIcon name="Test" icon="discord-logo.png" />
            <ServerIcon name="Test" icon="discord-logo.png" />
            <ServerIcon name="Add a Server">
                <AddServer className={style.Server} />
            </ServerIcon>
            <ServerIcon name="Discover Public Servers">
                <DiscoverServer className={style.Server} />
            </ServerIcon>
        </div>
    );
};
