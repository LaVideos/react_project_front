import React, {useState} from 'react';
import {StarComponent} from "./StarComponent";


function RateComponent({ numTotalStars = 10, initialRating }) {

    const theme = localStorage.getItem('theme');

    let color = 'lightYellow';

    if(theme==='dark'){
        color = '#fffb00';
    }

    const [numSelectedStars, setNumSelectedStars] = useState(Math.floor(initialRating));
    const [numHoveringStars, setNumHoveringStars] = useState(null);

    const [isUserHovering, setIsUserHovering] = useState(false);

    function getColor(isUserHovering, i, numSelectedStars, numHoveringStars) {
        const threshold = isUserHovering ? numHoveringStars : numSelectedStars;
        return (i < threshold) ? color : "grey";
    }

    return (
        <div className="star-rating">
            <div onMouseEnter={() => setIsUserHovering(true)} onMouseLeave={() => setIsUserHovering(false)} >
                {Array.from({ length:numTotalStars}).map((e, i) =>
                    <StarComponent
                        key={i}
                        color={getColor(isUserHovering, i, numSelectedStars, numHoveringStars)}
                        handleSelect={() => setNumSelectedStars(i + 1)}
                        handleHover={() => setNumHoveringStars(i + 1)}
                    />)}
            </div>
        </div>
    );
}

export default RateComponent;