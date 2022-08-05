import React from 'react';
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";

const BadgePaginationComponent = ({currentPage,paginate,count}) => {
    const handleChange = (event, value) => {
        paginate(value);
    };

    return (
        <div><Stack spacing={2}>
            <Pagination count={count} page={currentPage} onChange={handleChange} size="large"/>
        </Stack></div>
    );
};

export default BadgePaginationComponent;

