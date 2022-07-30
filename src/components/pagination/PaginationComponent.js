import React from 'react';

const PaginationComponent = ({moviePerPage,totalMovies,paginate}) => {

    const pageNumbers = [];
    for(let i = 1;i <= Math.ceil(totalMovies,moviePerPage);i++){
        pageNumbers.push(i);
    }
    return (
            <ul style={{textDecoration:'none', display:'flex',flexWrap:'wrap', justifyContent:'center', width:'1000px',justifyItems:"center"}}>
                {
                    pageNumbers.map(number=>(
                        <li key={number} style={{listStyleType:'none', margin:'2px'}} > <a href="" style={{textDecoration:'none'}} onClick={()=>{paginate(number)}}>
                            {
                                number
                            }
                        </a> </li>
                    ))
                }
            </ul>
    );
};

export default PaginationComponent;