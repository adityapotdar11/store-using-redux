import React from "react";
import { Star } from "react-feather";
import PropTypes from "prop-types";

const Ratings = ({ ratings }) => {
    ratings = Number(ratings);
    let component = [];
    for (let index = 0; index < ratings; index++) {
        component.push(<Star className="feather" key={index} />);
    }
    return <>{component}</>;
};

Ratings.propTypes = {
    ratings: PropTypes.number.isRequired,
};

export default Ratings;
