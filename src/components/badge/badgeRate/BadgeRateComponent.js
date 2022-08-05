import React from 'react';
import {Paper, styled} from "@mui/material";


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#2d2d2d' : '#e8e8e8',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    width:'20px',
    height:'20px',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    fontSize:'16px',
    marginLeft:'10px'
}));



const BadgeRateComponent = ({item}) => {
    return (<Item>{item}</Item>);
};

export default BadgeRateComponent;