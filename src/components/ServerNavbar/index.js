import React from 'react';
import ServerIcon from '../ServerIcon';

import style from './ServerNavbar.module.css';

import { ReactComponent as AddServer } from '../../assets/circle-plus.svg';
import { ReactComponent as DiscoverServer } from '../../assets/discover.svg';
import { ReactComponent as Home } from '../../assets/discord.svg';
import { NavLink } from 'react-router-dom';

export const ServerNavbar = () => {
    return (
        <div className={style.ServerNavbar}>
            <div className={style.Content}>
                <ServerIcon name="Home">
                    <Home className={style.Home} />
                </ServerIcon>

                <div className={style.Break}>
                    <div></div>
                </div>

                <NavLink to="/server1" exact>
                    <ServerIcon name="Server 1" icon="discord-logo.png" />
                </NavLink>
                <NavLink to="/server2" exact>
                    <ServerIcon name="Server 2" icon="discord-logo.png" />
                </NavLink>
                <NavLink to="/server3" exact>
                    <ServerIcon name="Server 3" icon="discord-logo.png" />
                </NavLink>
                <NavLink to="/server4" exact>
                    <ServerIcon name="Server 4" icon="discord-logo.png" />
                </NavLink>
                <NavLink to="/server5" exact>
                    <ServerIcon name="Server 5" icon="discord-logo.png" />
                </NavLink>
                <NavLink to="/server6" exact>
                    <ServerIcon name="Server 6" icon="discord-logo.png" />
                </NavLink>
                <NavLink to="/server7" exact>
                    <ServerIcon name="Server 7" icon="discord-logo.png" />
                </NavLink>
                <NavLink to="/server8" exact>
                    <ServerIcon name="Server 8" icon="discord-logo.png" />
                </NavLink>
                <NavLink to="/server9" exact>
                    <ServerIcon name="Server 9" icon="discord-logo.png" />
                </NavLink>
                <NavLink to="/server10" exact>
                    <ServerIcon name="Server 10" icon="discord-logo.png" />
                </NavLink>

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
