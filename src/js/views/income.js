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
								<input
									className="border border-primary bg-light rounded-pill col-4 mx-2"
									type="date"
									placeholder="Fecha"
								/>
								<select
									className="custom-select form-select-lg bg-light mb-6 col-6 border border-primary rounded-pill mx-2"
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
									className="custom-select form-select-lg bg-light mb-6 col-5 border border-primary rounded-pill mx-2"
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
									className="custom-select form-select-lg bg-light mb-6 col-5 border border-primary rounded-pill mx-2"
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
								<select className="custom-select col-5 mb-6 mx-1 bg-light border border-primary rounded-pill">
									<option selected>Seleccione una Entidad Bancaria</option>
									<option value="1">Banco Central de Venezuela</option>
									<option value="2">Banco de Venezuela S.A.C.A. Banco Universal</option>
									<option value="3">Venezolano de Crédito, S.A. Banco Universal</option>
									<option value="4">Banco Mercantil, C.A. Banco Universal</option>
									<option value="5">Banco Provincial, S.A. Banco Universa</option>
									<option value="6">Bancaribe C.A. Banco Universa</option>
									<option value="7">Banco Exterior C.A. Banco Universa</option>
									<option value="8">Banco Occidental de Descuento, Banco Universal C.A</option>
									<option value="9">Banco Caroní C.A. Banco Universal</option>
									<option value="10">Banesco Banco Universal S.A.C.A.</option>
									<option value="11">Banco Sofitasa, Banco Universal</option>
									<option value="12">Banco Plaza, Banco Universal</option>
									<option value="13">Banco de la Gente Emprendedora C.A</option>
									<option value="14">BFC Banco Fondo Común C.A. Banco Universal</option>
									<option value="15">100% Banco, Banco Universal C.A.</option>
									<option value="16">DelSur Banco Universal C.A.</option>
									<option value="17">Banco del Tesoro, C.A. Banco Universal</option>
									<option value="18">Banco Agrícola de Venezuela, C.A. Banco Universa</option>
									<option value="19">Bancrecer, S.A. Banco Microfinanciero</option>
									<option value="20">Mi Banco, Banco Microfinanciero C.A.</option>
									<option value="21">Banco Activo, Banco Universa</option>
									<option value="22">Bancamica, Banco Microfinanciero C.A.</option>
									<option value="23">Banco Internacional de Desarrollo, C.A. Banco Universal</option>
									<option value="24">Banplus Banco Universal, C.A</option>
									<option value="25">
										Banco Bicentenario del Pueblo de la Clase Obrera, Mujer y Comunas B.U.
									</option>
									<option value="26">Novo Banco, S.A. Sucursal Venezuela Banco Universa</option>
									<option value="27">Banco de la Fuerza Armada Nacional Bolivariana, B.U.</option>
									<option value="28">Citibank N.A.</option>
									<option value="29">Banco Nacional de Crédito, C.A. Banco Universal</option>
									<option value="30">Instituto Municipal de Crédito Popular</option>
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
							<th scope="col">Registro del Ingreso</th>
							<th scope="col">Descripción del Ingreso</th>
							<th scope="col">Monto en USD Dolar</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th scope="row">1</th>
							<td />
							<td />
							<td />
						</tr>
						<tr>
							<th scope="row">2</th>
							<td />
							<td />
							<td />
						</tr>
						<tr>
							<th scope="row">3</th>
							<td />
							<td />
							<td />
						</tr>
						<tr>
							<th scope="row">4</th>
							<td />
							<td />
							<td />
						</tr>
						<tr>
							<th scope="row">5</th>
							<td />
							<td />
							<td />
						</tr>
					</tbody>
				</table>
			</div>
		</React.Fragment>
	);
}

export default Income;
