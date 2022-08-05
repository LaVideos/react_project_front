import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {styled} from "@mui/material";
import {grey} from "@mui/material/colors";


const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(grey[500]),
    backgroundColor: grey[500],
    '&:hover': {
        backgroundColor: grey[700],
    },
}));

export default function BadgeButtonNavComponent({data,disabled,onclick}) {
    return (
        <Stack>
            <ColorButton variant="contained" disabled={disabled} onClick={onclick}>{data}</ColorButton>
        </Stack>
    );
}

