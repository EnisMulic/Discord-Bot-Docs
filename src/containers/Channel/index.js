import React from 'react';
import PropTypes from 'prop-types';
import Chat from '../../components/Chat';
import UserNavbar from '../../components/UserNavbar';
import { ReactComponent as ChannelIcon } from '../../assets/channel-icon.svg';

import style from './Channel.module.css';

const Channel = (props) => {
    return (
        <div className={style.Channel}>
            <div className={style.Header}>
                <ChannelIcon />
                <h5>Test</h5>
            </div>
            <div className={style.Body}>
                <Chat />
                <UserNavbar />
            </div>
        </div>
    );
};

Channel.propTypes = {};

export default Channel;
