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
            {props.channels.map((channel) => {
                const { id, name } = channel;
                return (
                    <div className={style.Channel} key={id}>
                        <Link
                            to={`${path}/${name
                                .replaceAll(' ', '-')
                                .toLowerCase()}`}
                        >
                            <ChannelButton name={name} />
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
