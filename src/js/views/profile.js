import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Bar } from "../component/graficos/bar";
import { Line } from "../component/graficos/line";
import { Doughnut } from "../component/graficos/doughnut";

export const Profile = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	//
	return <div />;
};
