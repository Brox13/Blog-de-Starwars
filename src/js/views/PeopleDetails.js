import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const PeopleDetails = props => {
	const { store, actions } = useContext(Context);
// const urlImage = "https://starwars-visualguide.com/assets/img/characters/" + id + ".jpg"
	
	const params = useParams();
	return (
		<div className="container-details">
			<div className="row">
				<div className="col-12 col-md-6">
					<img
						className="img-fluid"
						src="https://talbottinn.com/wp-content/uploads/2013/11/dummy-image-square.jpg"
					/>
				</div>
				<div className="col-12 col-md-6 text-center">
					<h1>{store.people[params.id].name}</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
						Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
						mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
						quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo,
						rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
						Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend
						tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante,
						dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.
						Quisque rutrum. Aenean imperdiet.
					</p>
				</div>
			</div>
			<div className="row text-center mb-3">
				<div className="col-12 col-md-3 border rounded shadow py-3">
					Gender: {store.people[params.id].gender}
				</div>
				<div className="col-12 col-md-3 border rounded shadow py-3">
					Hair Color: {store.people[params.id].hair_color}
				</div>
				<div className="col-12 col-md-3 border rounded shadow py-3">
					Eye Color: {store.people[params.id].eye_color}
				</div>
				<div className="col-12 col-md-3 border rounded shadow py-3">
					Mass: {store.people[params.id].mass} kg
				</div>
				<div className="col-12 col-md-4 border rounded shadow py-3">
					Skin Color: {store.people[params.id].skin_color}
				</div>
				<div className="col-12 col-md-4 border rounded shadow py-3">
					 Birth Year: {store.people[params.id].birth_year}
				</div>
				<div className="col-12 col-md-4 border rounded shadow py-3">
					 Height: {store.people[params.id].height} cm
				</div>
			</div>
			<div className="row">
				<Link to="/">
					<span className="btn btn-dark btn-lg" href="#" role="button">
						Back home
					</span>
				</Link>
			</div>
		</div>
	);
};
PeopleDetails.propTypes = {
	name: PropTypes.string
};
