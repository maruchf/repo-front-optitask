import { Carousel } from "bootstrap";
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Bar } from "./graficos/bar";
import { Line } from "./graficos/line";
export const CashFlow = () => {
	const info = {
		gasolina: {
			precio: [23, 52, 69, 45, 45, 50],
			mes: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"],
			colorA: [
				"rgba(122,45,240,0.8)",
				"rgba(73,145,200,0.8)",
				"rgba(40,200,120,0.8)",
				"rgba(150,30,600,0.8)",
				"rgba(200,100,188,0.8)",
				"rgba(240,80,20,0.8)"
			]
		}
	};

	return (
		<div>
			<h3>CashFlow</h3>

			<Bar
				labels={info.gasolina.mes}
				data={info.gasolina.precio}
				backgroundColor={info.gasolina.colorA}
				title={"todos"}
			/>
			{/* <div className="bg-info">
				<div style={{ paddingTop: "50%" }} />
			</div> */}
		</div>
	);
};
