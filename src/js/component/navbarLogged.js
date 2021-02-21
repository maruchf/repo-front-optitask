import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../../styles/navbarLogged.scss";
import "../../img/full-logo.png";
export const NavbarLogged = () => {
	return (
		<nav className="main-nav navbar-nav">
			<div className="">
				<a className="bg-dark p-2 d-block" href="/dashboard">
					<img src="full-logo.png" className="img" />
				</a>
				<div>
					<ul className="list-group menu-options">
						<li className="list-group-item list-group-item-action active">
							<a href="/dashboard" className="text-light text-left">
								{/* <i className="fas fa-house mr-2" /> */}
								<span>Dashboard</span>
							</a>
						</li>
						<li className="list-group-item">
							<a href="#" className="text-left">
								<i />
								<span>Grupo</span>
							</a>
						</li>
						<li className="list-group-item">
							<a href="#" className="text-left">
								<i />
								<span>Cierre de ventas</span>
							</a>
						</li>
						<li className="list-group-item">
							<a href="#" className="text-left">
								<i />
								<span>Registrar gastos</span>
							</a>
						</li>
						<li className="list-group-item">
							<a href="#" className="text-left">
								<i />
								<span>Calculadora cambiaria</span>
							</a>
						</li>
						<li className="list-group-item">
							<a href="#" className="text-left">
								<i />
								<span>Reportes</span>
							</a>
						</li>
						<li className="list-group-item">
							<a href="#" className="text-left">
								<i />
								<span>Recordatorios</span>
							</a>
						</li>
						<li className="list-group-item">
							<a href="#" className="text-left">
								<i />
								<span>Perfil</span>
							</a>
						</li>
						<li className="list-group-item">
							<a href="#" className="text-left">
								<i />
								<span>Acerca de...</span>
							</a>
						</li>
						<li className="list-group-item">
							<a href="#" className="text-left">
								<i />
								<span>Cerrar sesión</span>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
