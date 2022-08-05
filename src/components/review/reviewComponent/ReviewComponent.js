import React from 'react';

import css from './Review.module.css';
import {RateComponent} from "../../index";


const findAvatar = (link) =>{
    const url = '/https://www.gravatar.com/avatar';
    let link_ = link
    if(!link.includes('/https://www.gravatar.com/avatar')){
        link_ = url + link
    }
    return link_.replace('/','')
}



const ReviewComponent = ({review}) => {

    const {author,author_details,content,created_at,updated_at} = review

    const theme = localStorage.getItem('theme');


    return (
        <div className={ theme==='dark'?css.reviewWrapLight:css.reviewWrapDark}>

            <div className={css.authorDetails}>
                {

                    author_details.avatar_path ?
                        <img src={`${findAvatar(author_details.avatar_path)}`} alt="" style={{width:'100px'}}/> :
                        <img src="https://st.depositphotos.com/2101611/3925/v/450/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg?forcejpeg=true" alt="" style={{width:'100px'}}/>
                }
                <div>{author}</div>
            </div>

            <div className={css.stars}>
                <RateComponent numTotalStars={10} initialRating={author_details.rating}/>
            </div>
            <div className={css.time}> created - {created_at}</div>
            <div>
                {content}
            </div>
            <div className={css.time}> updated - {updated_at}</div>
        </div>
    );
};

export default ReviewComponent;