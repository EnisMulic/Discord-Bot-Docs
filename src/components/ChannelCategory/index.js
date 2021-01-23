import React from 'react';
import { Link } from 'react-router-dom';
import { useRouteMatch } from 'react-router';
import PropTypes from 'prop-types';

import ChannelButton from '../ChannelButton';

import { ReactComponent as DownArrow } from '../../assets/down-arrow.svg';

import style from './ChannelCategory.module.css';

const ChannelCategory = (props) => {
    const { path } = useRouteMatch();

    return (
        <div className={style.ChannelCategory}>
            <div className={style.Header}>
                <DownArrow />
                <p>{props.name}</p>
            </div>
            {props.channels.map((channel, index) => {
                return (
                    <div className={style.Channel} key={channel + index}>
                        <Link
                            to={`${path}/${channel
                                .replaceAll(' ', '-')
                                .toLowerCase()}`}
                        >
                            <ChannelButton name={channel} />
                        </Link>
                    </div>
                );
            })}
        </div>
    );
};

ChannelCategory.propTypes = {
    name: PropTypes.string.isRequired,
    channels: PropTypes.array,
};

export default ChannelCategory;
