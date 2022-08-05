import * as React from 'react';
import Badge from '@mui/material/Badge';
import {ListItem} from "@mui/material";
import {NavLink} from "react-router-dom";

import css from './BadgeLink.module.css'
import {MovieIcon} from "../badgeIcons";



const style = {
    width: '250px',
    maxWidth: 360,
    bgcolor: '#575a5b',
};

export default function BadgeLinkComponent({id, name}) {
    return (
        <Badge color='success' badgeContent={<MovieIcon/>}>
            <NavLink to={id.toString() + '/moviesByGenre'} className={css.genreLink}>
                <ListItem button sx={style} component="nav" aria-label="mailbox folders" >
                    {name}
                </ListItem>
            </NavLink>
        </Badge>
    );
}
