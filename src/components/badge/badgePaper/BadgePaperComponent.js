import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function BadgePaperComponent({data,height,width,color}) {

    const theme = localStorage.getItem('theme');

    let bg = '#4a4d4e';

    if(theme === 'dark'){
        bg = 'white';
    }


    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                    m: 1,
                    width: width,
                    height: height,
                    background:`${bg}`,
                    textAlign:'center',
                    color:`${color}`
                },
            }}
        >
            <Paper elevation={2} style={{display:'flex',justifyContent:'center',alignItems:'center'}}>{data}</Paper>
        </Box>
    );
}