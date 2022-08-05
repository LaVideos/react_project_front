import * as React from 'react';
import Switch from '@mui/material/Switch';

import {Brightness7Icon, NightlightIcon} from "../badgeIcons";

import css from './BadgeToggle.module.css'

export default function BadgeToggleComponent({switchTheme}) {
    const theme = localStorage.getItem('theme');

    let checked = false;

    if(theme === 'dark'){
        checked = true;
    }


    return (
        <div className={css.toggle}>
            <NightlightIcon/>
            <Switch
            checked={checked}
            onChange={switchTheme}
            inputProps={{'aria-label': 'controlled'}}
            color="warning"
        />
        <Brightness7Icon/>
        </div>
    );
}