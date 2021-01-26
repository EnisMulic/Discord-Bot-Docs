import React from 'react';
import ServerIcon from '../ServerIcon';

import style from './ServerNavbar.module.css';

import { ReactComponent as AddServer } from '../../assets/circle-plus.svg';
import { ReactComponent as DiscoverServer } from '../../assets/discover.svg';
import { ReactComponent as Home } from '../../assets/discord.svg';
import { NavLink } from 'react-router-dom';

export const ServerNavbar = (props) => {
    return (
        <div className={style.ServerNavbar}>
            <div className={style.Content}>
                <ServerIcon name="Home">
                    <Home className={style.Home} />
                </ServerIcon>

                <div className={style.Break}>
                    <div></div>
                </div>

                {props.servers.map((server) => {
                    const { id, name } = server;
                    return (
                        <NavLink
                            key={id}
                            to={`/${name.replaceAll(' ', '-').toLowerCase()}`}
                            exact
                        >
                            <ServerIcon name={name} icon="discord-logo.png" />
                        </NavLink>
                    );
                })}

                <ServerIcon name="Add a Server">
                    <AddServer className={style.Server} />
                </ServerIcon>
                <ServerIcon name="Discover Public Servers">
                    <DiscoverServer className={style.Server} />
                </ServerIcon>
            </div>
        </div>
    );
};
