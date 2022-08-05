import * as React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

export default function BadgeErrorComponent() {
    return (
        <Stack sx={{ width: '300px' }} spacing={2}>
            <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
               Error in the input — <strong>check it out!</strong>
                <div><small><span>Field must be required.</span><br/><span>Max letters - 40.</span><br/><span>No special symbols.</span></small></div>
            </Alert>
        </Stack>
    );
}