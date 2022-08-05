import React from 'react';
import {BadgeButtonNavComponent} from "../../index";
import BadgePaginationComponent from "../../badge/badgePagination/BadgePaginationComponent";

import css from './Pagination.module.css'

const PaginationComponent = ({query,setQuery,count}) => {

    const nextTenPage = ()=>{
        const next_ = +query.get('page')+10;
        setQuery({page:`${next_}`});
    }

    const prevTenPage = () => {
        if(+query.get('page') > 10){
            const prev_ = +query.get('page')-10;
            setQuery({page:`${prev_}`});}
        else {
            setQuery({page:`${1}`});
        }
    }

    const paginate = page => setQuery({page:`${page}`});


    if(count>500){
        count = 500;
    }

    return(
        <div className={css.paginationWrap}>
            <BadgeButtonNavComponent data={'Prev 10'} disabled={+query.get('page')===1} onclick={prevTenPage} />

            <BadgePaginationComponent currentPage={ +query.get('page')} paginate={paginate} count={count}/>

            <BadgeButtonNavComponent data={'Next 10'} disabled={+query.get('page')===count} onclick={nextTenPage} />
        </div>
    )

};

export default PaginationComponent;