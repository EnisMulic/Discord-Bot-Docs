import React from 'react';
import ServerIcon from '../ServerIcon';

import style from './ServerNavbar.module.css';

import { ReactComponent as AddServer } from '../../assets/circle-plus.svg';
import { ReactComponent as DiscoverServer } from '../../assets/discover.svg';
import { ReactComponent as Discover } from '../../assets/discord.svg';
import { NavLink } from 'react-router-dom';

export const ServerNavbar = () => {
    return (
        <div className={style.ServerNavbar}>
            <ServerIcon name="Home">
                <Discover className={style.Home} />
            </ServerIcon>

            <div className={style.Break}>
                <div></div>
            </div>

            <NavLink to="/" exact>
                <ServerIcon name="Server 1" icon="discord-logo.png" />
            </NavLink>
            <NavLink to="/server2">
                <ServerIcon name="Server 2" icon="discord-logo.png" />
            </NavLink>
            <NavLink to="/server3">
                <ServerIcon name="Server 3" icon="discord-logo.png" />
            </NavLink>

            <ServerIcon name="Add a Server">
                <AddServer className={style.Server} />
            </ServerIcon>
            <ServerIcon name="Discover Public Servers">
                <DiscoverServer className={style.Server} />
            </ServerIcon>
        </div>
    );
};
