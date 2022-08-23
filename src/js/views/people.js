import React, { useContext, useState, useEffect } from "react";
import "../../styles/index.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const People = (props) => {
  const { store, actions } = useContext(Context);
  // const urlImage = "https://starwars-visualguide.com/assets/img/characters/" + id + ".jpg"
  
  return (
    <>
      <div className="people mt-5">
        <div className="row">
          <div className="card col">
            <img className="card-img-top" src="https://talbottinn.com/wp-content/uploads/2013/11/dummy-image-square.jpg"></img>
            <div className="card-body">
              <h5 className="card-title">
                <strong>Character Name:</strong> {props.name}
              </h5>
              <p className="card-text">
                <strong>Gender:</strong> {props.gender}
              </p>
              <p className="card-text">
                <strong>Height:</strong> {props.height}
              </p>
              <p className="card-text">
                <strong>Mass:</strong> {props.mass}
              </p>
              <p className="card-text">
                <strong>Birth Year:</strong> {props.birth_year}
              </p>
              <div className="row">
                <div className="col-6">
                  <Link to={`/PeopleDetails/${props.id}`}>
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

People.propTypes = {
  name: PropTypes.string,
  gender: PropTypes.string,
  height: PropTypes.string,
  mass: PropTypes.string,
  birth_year: PropTypes.string,
  id: PropTypes.number,
  url: PropTypes.string,
};
