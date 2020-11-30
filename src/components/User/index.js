import React from "react";
import PropTypes from "prop-types";
import "../../styles.css";
import films from "../../films.json";

export function User(props) {
    return (
        <div className="card">
            <div className="card-content">
                <img
                    src={}
                    alt={}
                    style={{ width: "100%" }}
                />
                <div className="container">
                    <h4>{}</h4>
                    <p>
                        {}, {}
                    </p>
                </div>
            </div>
        </div>
    );
}

User.propTypes = {
    rank : PropTypes.string,
    title : PropTypes.string,
    year : PropTypes.string,
    image : PropTypes.string,
    crew : PropTypes.string,
    imDbRating : PropTypes.string
};