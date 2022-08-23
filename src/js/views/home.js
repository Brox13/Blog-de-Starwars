import React, { useEffect, useState, useContext } from "react";
import { People } from "./people";
import { Planets } from "./planets";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);
	return (
	<>
		<div className="container mb-5 pb-5 overflow-hidden">
			<div className="col-12">
				<h1 className="category-title-people">People</h1>
			</div>
			<div className="row overX">
				{store.people.map((item, index) => {
					return (
						<div key={index} className="col-12 col-md-6 col-lg-4">
							<People
								key={index}
								id={index}
								name={item.name}
								gender={item.gender}
								height={item.height}
								mass={item.mass}
								birth_year={item.birth_year}
							/>
						</div>
					);
				})}
			</div>
			<div className="col-12 mt-5">
				<h1 className="category-title-planets">Planets</h1>
			</div>
			<div className="row overX">
				{store.planets.map((item, index) => {
					return (
						<div key={index} className="col-12 col-md-6 col-lg-4 ">
							<Planets
								key={index}
								id={index}
								url={item.url}
								name={item.name}
								diameter={item.diameter}
								climate={item.climate}
								population={item.population}
								terrain={item.terrain}
							/>
						</div>
					);
				})}
			</div>
		</div>
	</>
	);
};