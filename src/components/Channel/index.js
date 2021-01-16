import React from 'react';
import PropTypes from 'prop-types';

import style from './Channel.module.css';

const Channel = (props) => {
    return <div className={style.Channel}># {props.name}</div>;
};

Channel.propTypes = {
    name: PropTypes.string.isRequired,
};

export default Channel;
