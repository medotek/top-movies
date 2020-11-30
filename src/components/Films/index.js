import React from "react";
import PropTypes from "prop-types";
import "./Films.css";
import Col from 'react-bootstrap/Col';

export function Films(props) {
    return (

        <Col lg="2" xs="2" md="2">
            <div className="card">
                <div className="content text-center">
                    <img
                        src={props.image}
                        alt={props.title}
                        style={{ width: "100%" }}
                    />
                    <div className="film-title">
                        <h4>{props.title}</h4>
                    </div>
                </div>
            </div>
        </Col>
    );
}

Films.propTypes = {
    rank: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.string,
    image: PropTypes.string,
    crew: PropTypes.string,
    imDbRating: PropTypes.string
};
