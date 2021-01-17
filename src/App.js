import React from 'react';

import style from './App.module.css';

import ChannelNavbar from './components/ChannelNavbar';
import Chat from './components/Chat';
import { ServerNavbar } from './components/ServerNavbar';
import UserNavbar from './components/UserNavbar';

const App = () => {
    return (
        <div className={style.App}>
            <ServerNavbar />
            <ChannelNavbar />
            <Chat />
            <UserNavbar />
        </div>
    );
};

export default App;
