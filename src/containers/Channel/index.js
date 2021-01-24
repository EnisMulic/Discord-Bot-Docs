import React from 'react';
import PropTypes from 'prop-types';
import Chat from '../../components/Chat';
import UserNavbar from '../../components/UserNavbar';
import { ReactComponent as ChannelIcon } from '../../assets/channel-icon.svg';

import style from './Channel.module.css';
import Toolbar from '../../components/Toolbar';

const Channel = (props) => {
    return (
        <div className={style.Channel}>
            <div className={style.Header}>
                <ChannelIcon />
                <h5>{props.name.replaceAll(' ', '-').toLowerCase()}</h5>
                {props.topic && (
                    <>
                        <div className={style.Divider}></div>
                        <div className={style.Topic}>{props.topic}</div>
                    </>
                )}
                <div className={style.Spacer} />
                <Toolbar />
            </div>
            <div className={style.Body}>
                <Chat />
                <UserNavbar />
            </div>
        </div>
    );
};

Channel.propTypes = {
    name: PropTypes.string.isRequired,
    topic: PropTypes.string,
};

export default Channel;
