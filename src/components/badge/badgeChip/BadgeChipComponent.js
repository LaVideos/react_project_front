import * as React from 'react';
import Chip from '@mui/material/Chip';

export default function BadgeChipComponent({data}) {
    return (
        <Chip label={`${data}`} color="warning"/>
    );
}