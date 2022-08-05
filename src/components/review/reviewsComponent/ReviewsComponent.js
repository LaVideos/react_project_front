import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {reviewActions} from "../../../redux/slices";
import {ReviewComponent} from "../../index";

import css from './Reviews.module.css';


const ReviewsComponent = ({id}) => {

    const {review} = useSelector(state => state.review)

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(reviewActions.getReview({id:id}))
    },[id])



    return (
        <div>
            {review.length > 0?
            <div>{review.map(rev => <ReviewComponent key={rev.id} review={rev}/>)}</div> : <h3 className={css.noReview}>No review yet</h3>}
        </div>
    );
};

export default ReviewsComponent;