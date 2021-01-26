import React from 'react';
import UserGroup from '../UserGroup';

import style from './UserNavbar.module.css';

const UserNavbar = (props) => {
    return (
        <div className={style.UserNavbar}>
            {props.user_groups.map((group) => {
                const { id, name, users, color } = group;
                return (
                    <UserGroup
                        key={id}
                        name={name}
                        users={users}
                        color={color}
                    />
                );
            })}
        </div>
    );
};

export default UserNavbar;
