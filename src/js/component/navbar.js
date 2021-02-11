import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.scss";

export const Navbar = () => {
	return (
		<div className="Nav-background">
			<nav className="shift">
				<ul>
					<li>
						<a href="#">Home</a>
					</li>
					<li>
						<a href="#">Sign Up</a>
					</li>
					<li>
						<a href="#">Log In</a>
					</li>
				</ul>
			</nav>
		</div>
	);
};
