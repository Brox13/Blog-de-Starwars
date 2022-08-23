import React, { useContext, useState, useEffect } from "react";
import "../../styles/index.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const Planets = props => {
  const { store, actions } = useContext(Context);
  return (
    <>
      <div className="people mt-5">
        <div className="row">
          <div className="card col">
            <img className="card-img-top" src="https://starwars-visualguide.com/#/characters?page=1"></img>
            <div className="card-body">
              <h5 className="card-title"><strong>Planet Name:</strong> {props.name}</h5>
              <p className="card-text">
                <strong>Diameter:</strong> {props.diameter}
              </p>
              <p className="card-text">
                <strong>Climate:</strong> {props.climate}
              </p>
              <p className="card-text">
                <strong>Population:</strong> {props.population}
              </p>
              <p className="card-text">
                <strong>Terrain:</strong> {props.terrain}
              </p>
              <div className="row">
                <div className="col-6">
                  <Link to={`/PlanetsDetails/${props.id}`}>
                    <div className="btn btn-dark">Learn More</div>
                  </Link>
                  <div className="favorite-icon">
                    <div onClick={() => actions.addFavorite(props.name)}>
                      <div className="btn btn-outline-info">
                        <i className="fas fa-heart" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Planets.propTypes = {
	name: PropTypes.string,
	diameter: PropTypes.string,
	population: PropTypes.string,
	terrain: PropTypes.string,
  climate: PropTypes.string,
	id: PropTypes.number,
	url: PropTypes.string
};