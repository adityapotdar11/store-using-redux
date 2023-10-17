import React from "react";
import { Star } from "react-feather";

const Ratings = ({ ratings }) => {
    ratings = Number(ratings);
    let component = [];
    for (let index = 0; index < ratings; index++) {
        component.push(<Star className="feather" key={index} />);
    }
    return <>{component}</>;
};

export default Ratings;
