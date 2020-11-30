import React from "react";
import PropTypes from "prop-types";
import "./Films.css";


export function Films(props) {
    return (
        <div className="card">
            <div className="card-content">
                <img
                    src={props.image}
                    alt={props.title}
                    style={{ width: "100%" }}
                />
                <div className="container">
                    <h4>{props.title}</h4>
                </div>
            </div>
        </div>
    );
}

Films.propTypes = {
    rank : PropTypes.string,
    title : PropTypes.string,
    year : PropTypes.string,
    image : PropTypes.string,
    crew : PropTypes.string,
    imDbRating : PropTypes.string
};
