import React from "react";
import PropTypes from "prop-types";
import "./Films.css";
import Col from 'react-bootstrap/Col';

export function Films(props) {
    return (

        <Col lg="2" xs="6" md="4">
            <div className="card">
                <div className="content text-center">
                    <div className="info">
                        Année de sortie {props.year} <br />
                        Production : {props.crew}<br />
                        Vote : {props.imDbRating}/10
                    </div>
                    <img
                        src={props.image}
                        alt={props.title}
                        style={{ width: "100%" }}
                    />

                    <div className="rank">
                        {props.rank}
                    </div>
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
