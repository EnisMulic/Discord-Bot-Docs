import React from 'react';
import UserGroup from '../UserGroup';

import style from './UserNavbar.module.css';

const UserNavbar = () => {
    const users = ['User 1', 'User 2', 'User 3'];

    return (
        <div className={style.UserNavbar}>
            <UserGroup name="Developer" users={users} color="#6a0dad" />
        </div>
    );
};

export default UserNavbar;
