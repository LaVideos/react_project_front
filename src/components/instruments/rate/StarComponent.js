import React from 'react';

import { FaStar } from "react-icons/fa";

function StarComponent({ color = "grey", handleSelect = () => { }, handleHover = () => { } }) {
    return (
        <FaStar className="star-rating-star"
                color={color}
                onMouseOver={handleHover}
                onClick={handleSelect}
        />
    );
}

export {StarComponent}