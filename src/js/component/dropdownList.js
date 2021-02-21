import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const DropdownList = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="container-fluid">
			<div className="row">
				<nav className="navbar navbar-expand-lg fixed-top navbar-dard bg-dark">
					<a href="" className="navbar-brand">
						Optitask
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="true"
						aria-label="Toggle Navigation">
						<i className="fas fa-bars" />
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav">
							<li className="nav-item">
								<a href="#" className="nav-link">
									Grupo
								</a>
							</li>
							<li className="nav-item">
								<a href="#" className="nav-link">
									Cierre de ventas
								</a>
							</li>
							<li className="nav-item">
								<a href="#" className="nav-link">
									Registrar gastos
								</a>
							</li>
							<li className="nav-item">
								<a href="#" className="nav-link">
									Calculadora cambiaria
								</a>
							</li>
							<li className="nav-item">
								<a href="#" className="nav-link">
									Reportes
								</a>
							</li>
							<li className="nav-item">
								<a href="#" className="nav-link">
									Crear recordatorio
								</a>
							</li>
							<li className="nav-item">
								<a href="#" className="nav-link">
									Editar perfil
								</a>
							</li>
							<li className="nav-item">
								<a href="#" className="nav-link">
									Acerca de...
								</a>
							</li>
							<li className="nav-item">
								<a href="#" className="nav-link">
									Cerrar sesión
								</a>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</div>
	);
};
