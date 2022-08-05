import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

export default function BadgeInputTitleComponent({submit,handleSubmit,register}) {
    return (
        <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
            onSubmit={handleSubmit(submit)}
        >
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="enter movie title"
                {...register('title', {
                    required: true,
                    pattern: new RegExp(/^[a-zA-ZА-яіІїЇґҐёЁєЄ0-9 ]{1,40}$/)
                })}
            />
            <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
            </IconButton>
        </Paper>
    );
}