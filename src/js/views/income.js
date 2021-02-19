import React from "react";

function Income() {
	return (
		<React.Fragment>
			{/* Start of the Income Form */}
			{/* Inicio del Formulario de Ingresos */}
			<div className="container">
				<div className="row">
					<div className="col-md-12 d-flex mb-6 mt-5 justify-content-center text-secondary">
						<h1>Registro de Ingresos</h1>
					</div>
					{/* Falta agregar la propiedad onClick para agregar un Nuevo registro a la tabla. */}
					<button type="button" className="btn btn-outline-primary mt-3 mb-3 mx-6" onClick="">
						Nuevo Registro
					</button>
				</div>
				<br />
				<div className=" form-align-center row">
					<div className="col-md-12">
						<div className="form-group">
							<div className="row">
								{/* Este Span debera ser modificado por un boton que haga un llamado al calendario, 
                                usando la libreria de DatePicker en JS. */}
								<span className="border border-primary bg-light rounded-pill col-4 mx-2">Fecha</span>
								<select
									className="form-select form-select-lg bg-light mb-6 col-6 border border-primary rounded-pill mx-2"
									aria-label=".form-select-lg example">
									{/* Aquí debemos hacer el llamado a la API de conversión de monedas en tiempo real 
                                    y la API del precio del Bitcoin. */}
									{/* ---------------Select Seleccione Moneda--------------------- */}
									<option selected>Seleccione Moneda</option>
									<option value="1">Bitcoin</option>
									<option value="2">Bolivares Soberanos</option>
									<option value="3">Dolar Americano</option>
									<option value="4">Euro</option>
									<option value="5">Pesos Colombianos</option>
									<option value="6">Reales Brasileños</option>
								</select>
							</div>
						</div>
						<br />
						<div className="form-group">
							<div className="row">
								{/* ---------------Select Forma de Pago--------------------- */}
								<select
									className="form-select form-select-lg bg-light mb-6 col-5 border border-primary rounded-pill mx-2"
									aria-label=".form-select-lg example">
									<option selected>Forma de Pago</option>
									<option value="1">Cryptomonedas</option>
									<option value="2">Efectivo</option>
									<option value="3">Persona a Persona (P2P)</option>
									<option value="4">Punto de Venta</option>
									<option value="5">Plataformas Digitales</option>
									<option value="6">Transferencia</option>
									<option value="7">Otra Forma de Pago</option>
								</select>
								{/* ---------------Select Metodo Asociado de Pago--------------------- */}
								<select
									className="form-select form-select-lg bg-light mb-6 col-5 border border-primary rounded-pill mx-2"
									aria-label=".form-select-lg example">
									<option selected>Metodo Asociado de Pago</option>
									<option value="1">Monedas Fiduciarias</option>
									<option value="2">Nacional</option>
									<option value="3">Internacional</option>
									<option value="4">Nacional (Pago Movil)</option>
									<option value="5">Internacional (Zelle)</option>
									<option value="6">Bitcoin</option>
									<option value="7">PayPal</option>
									<option value="8">AirTM</option>
									<option value="9">GiftCard</option>
								</select>
							</div>
						</div>
						<br />
						<div className="form-group">
							<div className="row">
								{/* ---------------Input Monto a Registar-------------- */}
								<div className="row">
									<div className="col-6">
										<input
											type="text"
											className="form-control mb-6 bg-light border border-primary rounded-pill"
											placeholder="Monto a Registar"
										/>
									</div>
									{/* -----Input Monto a Registar en Dolares Americanos (USD)---- */}
									<div className="col-6">
										<input
											type="text"
											className="form-control mb-6 bg-light border border-primary rounded-pill"
											placeholder="Monto Registrado en Dolares Americanos (USD)"
										/>
									</div>
								</div>
							</div>
						</div>
						<br />
						<div className="form-group">
							{/* ----------------Select Entidad Bancaria----------------- */}
							<div className="row">
								<select className="custom-select col-5  mb-6 mx-1 bg-light border border-primary rounded-pill">
									<option selected>Seleccione una Entidad Bancaria</option>
									<option value="1">Banesco</option>
									<option value="2">Mercantil</option>
									<option value="3">Provincial</option>
								</select>
								{/* ----------------Input Tipo de Negocio----------------- */}
								<input
									type="text"
									className="form col-5 mb-6 mx-1 bg-light border border-primary rounded-pill"
									placeholder="Tipo de Negocio"
								/>
							</div>
						</div>
						<br />
					</div>
					<br />
					<div className="form-group">
						<div className="row">
							<button type="button" className="btn btn-outline-primary mt-3 mb-3 mx-6" onClick="">
								Agregar
							</button>
						</div>
					</div>
					<br />
				</div>
				<div className="container" />
				<table className="table table-sm table-primary">
					<thead>
						<tr>
							<th scope="col">#</th>
							<th scope="col">Registros de Ingresos</th>
							<th scope="col">Descripción</th>
							<th scope="col">Monto en USD Dolar</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th scope="row">1</th>
							<td />
							<td>Otto</td>
							<td>@mdo</td>
						</tr>
						<tr>
							<th scope="row">2</th>
							<td>Jacob</td>
							<td>Thornton</td>
							<td>@fat</td>
						</tr>
						<tr>
							<th scope="row">3</th>
							<td>Larry the Bird</td>
							<td>@twitter</td>
						</tr>
					</tbody>
				</table>
			</div>
		</React.Fragment>
	);
}

export default Income;
