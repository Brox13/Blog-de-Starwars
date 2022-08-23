import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/index.css";


export const Navbar = () => {
  const { store, actions } = useContext(Context);

  return (
    <nav className="navbar navbar-light bg-light mb-3">

      <Link to="/">
        <img
          className="navbar-brand container-fluid"
          src="http://pngimg.com/uploads/star_wars_logo/star_wars_logo_PNG5.png" alt="" width="30" height="60"
        ></img>
      </Link>

      <div className="col-6 col-lg-3">
        <div className="d-inline nav-item dropdown">
          <button
            className="btn btn-primary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Favorites{" "} <span className="badge badge-light m-2">
              {store.favorites.length}
            </span>
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            {store.favorites.map((item, index) => {
              return (
                <div key={index} className="dropdown-item">
                  <div className="row">
                    <div className="col-9">{item.name}</div>
                    <div className="col-2">
                      <a
                        className="badge badge-danger text-white"
                        onClick={() => actions.removeFavorite(index)}
                      >
                        <i class="fa-solid fa-trash-can"></i>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};