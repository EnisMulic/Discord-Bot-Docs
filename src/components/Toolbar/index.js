import React from 'react';

import { ReactComponent as BellIcon } from '../../assets/bell.svg';
import { ReactComponent as PinIcon } from '../../assets/pin.svg';
import { ReactComponent as InboxIcon } from '../../assets/inbox.svg';
import { ReactComponent as MembersIcon } from '../../assets/members.svg';
import { ReactComponent as HelpIcon } from '../../assets/help.svg';
import { ReactComponent as LensIcon } from '../../assets/lens.svg';

import style from './Toolbar.module.css';

const Toolbar = () => {
    return (
        <div className={style.Toolbar}>
            <BellIcon />
            <PinIcon />
            <MembersIcon />
            <div className={style.SearchBar}>
                <span>Search</span>
                <div className={style.Spacer}></div>
                <LensIcon />
            </div>
            <InboxIcon />
            <HelpIcon />
        </div>
    );
};

export default Toolbar;
