import { map } from "jquery";
import React, { useState } from "react";

function Expenses() {
	const [date, setDate] = useState("");
	const [currency, setCurrency] = useState("");
	const [paymentForm, setPaymentForm] = useState("");
	const [paymentMethod, setPaymentMethod] = useState("");
	const [registerAmount, setRegisterAmount] = useState("");
	const [dolarRegisterAmount, setDolarRegisterAmount] = useState("");
	const [selectBank, setSelectBank] = useState("");
	const [bussinessType, setBussinessType] = useState("");
	const [expensesCategory, setExpensesCategory] = useState("");
	const [supplier, setSupplier] = useState("");
	const [otherPaymentForm, setOtherPaymentForm] = useState("");

	const formasDePago = {
		efectivo: ["Moneda Fiduciaria"],
		cryptomonedas: ["Bitcoin"],
		personaAPersona: ["Pago Movil Nacional", "Zelle Internacional"],
		puntoDeVenta: ["Nacional", "Internacional"],
		plataformasDigitales: ["Paypal", "AirTM", "Giftcard"],
		Transferencia: ["Nacional", "Internacional"],
		otrasFornmasDePago: ["Intercambio Comercial"]
	};

	const changeDate = e => {
		setDate(e.target.value);
	};

	const changeRegisterAmount = e => {
		setRegisterAmount(e.target.value);
		//setDolarRegisterAmount(parseFloat(e.target.value) / 1800);
	};

	const changeDolarRegisterAmount = e => {
		setDolarRegisterAmount(e.target.value);
	};

	const changeBussinessType = e => {
		setBussinessType(e.target.value);
	};

	const changeSupplier = e => {
		setSupplier(e.target.value);
	};
	return (
		<React.Fragment>
			{/* Start of the Expenses Form */}
			{/* Inicio del Formulario de Egresos */}
			<div className="container">
				<div className="row">
					<div className="col-md-12 d-flex mb-6 mt-5 justify-content-center text-secondary">
						<h1>Registro de Egresos</h1>
					</div>
					{/* Falta agregar la propiedad onClick para agregar un Nuevo registro a la tabla. */}
					<div className="col-7 d-flex ml-5">
						<div className="d-flex flex-row">
							<button type="button" className="btn btn-outline-primary mt-3 mb-3 mx-6" onClick="">
								Nuevo Registro
							</button>
						</div>
					</div>
				</div>
				<br />
				<div className="row">
					<div className="col-12">
						<div className="form-group">
							<div className="row justify-content-center">
								{/*---------------- Este Input me trae el calendario------------------ */}
								<input
									className="form-control col-5 mx-1 mb-6 border border-primary  bg-light rounded-pill"
									type="date"
									placeholder="Fecha"
									onChange={changeDate}
								/>
								<select
									className="custom-select form-select-lg bg-light mb-6 col-5 mx-1 border border-primary rounded-pill"
									aria-label=".form-select-lg example">
									{/* Aquí debemos hacer el llamado a la API de conversión de monedas en tiempo real 
                                    y la API del precio del Bitcoin. */}
									{/* ---------------Select Seleccione Moneda--------------------- */}
									{/* <option selected>Seleccione Moneda</option>
									<option value="1" onClick={setCurrency("Bitcoin")}>
										Bitcoin
									</option>
									<option value="2" onClick={setCurrency("Bolivares Soberanos")}>
										Bolivares Soberanos
									</option>
									<option value="3" onClick={setCurrency("Dolar Americano")}>
										Dolar Americano
									</option>
									<option value="4" onClick={setCurrency("Euro")}>
										Euro
									</option>
									<option value="5" onClick={setCurrency("Pesos Colombianos")}>
										Pesos Colombianos
									</option>
									<option value="6" onClick={setCurrency("Reales Brasileños")}>
										Reales Brasileños
									</option> */}
								</select>
							</div>
						</div>
						<br />
						<div className="form-group">
							<div className="row justify-content-center">
								{/* ---------------Select Forma de Pago--------------------- */}
								<select
									className="custom-select form-select-lg bg-light mb-6 col-5 mx-1 border border-primary rounded-pill"
									aria-label=".form-select-lg example">
									<option selected>Forma de Pago</option>
									{/* <option value="1" onClick={setPaymentForm("Cryptomonedas")}>
										Cryptomonedas
									</option>
									<option value="2" onClick={setPaymentForm("Efectivo")}>
										Efectivo
									</option>
									<option value="3" onClick={setPaymentForm("Persona a Persona (P2P)")}>
										Persona a Persona (P2P)
									</option>
									<option value="4" onClick={setPaymentForm("Punto de Venta")}>
										Punto de Venta
									</option>
									<option value="5" onClick={setPaymentForm("Plataformas Digitales")}>
										Plataformas Digitales
									</option>
									<option value="6" onClick={setPaymentForm("Transferencia")}>
										Transferencia
									</option>
									<option value="7" onClick={setPaymentForm("Otra Forma de Pago")}>
										Otra Forma de Pago
									</option> */}
								</select>
								{/* ---------------Select Metodo Asociado de Pago--------------------- */}
								<select
									className="custom-select form-select-lg bg-light mb-6 col-5 mx-1 border border-primary rounded-pill"
									aria-label=".form-select-lg example">
									<option selected>Metodo Asociado de Pago</option>
									{/* <option value="1" onClick={setPaymentMethod("Monedas Fiduciarias")}>
										Monedas Fiduciarias
									</option>
									<option value="2" onClick={setPaymentMethod("Nacional")}>
										Nacional
									</option>
									<option value="3" onClick={setPaymentMethod("Internacional")}>
										Internacional
									</option>
									<option value="4" onClick={setPaymentMethod("Nacional (Pago Movil)")}>
										Nacional (Pago Movil)
									</option>
									<option value="5" onClick={setPaymentMethod("Internacional (Zelle)")}>
										Internacional (Zelle)
									</option>
									<option value="6" onClick={setPaymentMethod("Bitcoin")}>
										Bitcoin
									</option>
									<option value="7" onClick={setPaymentMethod("PayPal")}>
										PayPal
									</option>
									<option value="8" onClick={setPaymentMethod("AirTM")}>
										AirTM
									</option>
									<option value="9" onClick={setPaymentMethod("GiftCard")}>
										GiftCard
									</option>
									<option value="10" onClick={setPaymentMethod("Intercambio Comercial")}>
										Intercambio Comercial
									</option> */}
								</select>
							</div>
						</div>
						<br />
						<div className="form-group">
							<div className="row justify-content-center">
								{/* ---------------Input Monto a Registar-------------- */}
								<input
									className="form-control col-5 mx-1 bg-light border border-primary rounded-pill"
									type="text"
									placeholder="Monto a Registar"
									//onChange={changeRegisterAmount}
								/>
								{registerAmount}

								{/* -----Input Monto a Registar en Dolares Americanos (USD)---- */}
								<input
									className="form-control col-5 mx-1 bg-light border border-primary rounded-pill"
									type="text"
									placeholder="Monto Registrado en Dolares Americanos (USD)"
									onChange={changeDolarRegisterAmount}
								/>
							</div>
						</div>
						<br />
						<div className="form-group">
							{/* ----------------Select Entidad Bancaria----------------- */}
							<div className="row justify-content-center">
								<select className="custom-select col-5 mb-6 mx-1 bg-light border border-primary rounded-pill">
									{/* <option selected>Seleccione una Entidad Bancaria</option>
									<option value="1" onClick={setSelectBank("Banco Central de Venezuela")}>
										Banco Central de Venezuela
									</option>
									<option
										value="2"
										onClick={setSelectBank("Banco de Venezuela S.A.C.A. Banco Universal")}>
										Banco de Venezuela S.A.C.A. Banco Universal
									</option>
									<option
										value="3"
										onClick={setSelectBank("Venezolano de Crédito, S.A. Banco Universal")}>
										Venezolano de Crédito, S.A. Banco Universal
									</option>
									<option value="4" onClick={setSelectBank("Banco Mercantil, C.A. Banco Universal")}>
										Banco Mercantil, C.A. Banco Universal
									</option>
									<option value="5" onClick={setSelectBank("Banco Provincial, S.A. Banco Universal")}>
										Banco Provincial, S.A. Banco Universal
									</option>
									<option value="6" onClick={setSelectBank("Bancaribe C.A. Banco Universal")}>
										Bancaribe C.A. Banco Universal
									</option>
									<option value="7" onClick={setSelectBank("Banco Exterior C.A. Banco Universal")}>
										Banco Exterior C.A. Banco Universal
									</option>
									<option
										value="8"
										onClick={setSelectBank("Banco Occidental de Descuento, Banco Universal C.A")}>
										Banco Occidental de Descuento, Banco Universal C.A
									</option>
									<option value="9" onClick={setSelectBank("Banco Caroní C.A. Banco Universal")}>
										Banco Caroní C.A. Banco Universal
									</option>
									<option value="10" onClick={setSelectBank("Banesco Banco Universal S.A.C.A.")}>
										Banesco Banco Universal S.A.C.A.
									</option>
									<option value="11" onClick={setSelectBank("Banco Sofitasa, Banco Universal")}>
										Banco Sofitasa, Banco Universal
									</option>
									<option value="12" onClick={setSelectBank("Banco Plaza, Banco Universal")}>
										Banco Plaza, Banco Universal
									</option>
									<option value="13" onClick={setSelectBank("Banco de la Gente Emprendedora C.A")}>
										Banco de la Gente Emprendedora C.A
									</option>
									<option
										value="14"
										onClick={setSelectBank("BFC Banco Fondo Común C.A. Banco Universal")}>
										BFC Banco Fondo Común C.A. Banco Universal
									</option>
									<option value="15" onClick={setSelectBank("100% Banco, Banco Universal C.A.")}>
										100% Banco, Banco Universal C.A.
									</option>
									<option value="16" onClick={setSelectBank("DelSur Banco Universal C.A.")}>
										DelSur Banco Universal C.A.
									</option>
									<option
										value="17"
										onClick={setSelectBank("Banco del Tesoro, C.A. Banco Universal")}>
										Banco del Tesoro, C.A. Banco Universal
									</option>
									<option
										value="18"
										onClick={setSelectBank("Banco Agrícola de Venezuela, C.A. Banco Universal")}>
										Banco Agrícola de Venezuela, C.A. Banco Universal
									</option>
									<option value="19" onClick={setSelectBank("Bancrecer, S.A. Banco Microfinanciero")}>
										Bancrecer, S.A. Banco Microfinanciero
									</option>
									<option value="20" onClick={setSelectBank("Mi Banco, Banco Microfinanciero C.A.")}>
										Mi Banco, Banco Microfinanciero C.A.
									</option>
									<option value="21" onClick={setSelectBank("Banco Activo, Banco Universal")}>
										Banco Activo, Banco Universal
									</option>
									<option value="22" onClick={setSelectBank("Bancamica, Banco Microfinanciero C.A.")}>
										Bancamica, Banco Microfinanciero C.A.
									</option>
									<option
										value="23"
										onClick={setSelectBank(
											"Banco Internacional de Desarrollo, C.A. Banco Universal"
										)}>
										Banco Internacional de Desarrollo, C.A. Banco Universal
									</option>
									<option value="24" onClick={setSelectBank("Banplus Banco Universal, C.A")}>
										Banplus Banco Universal, C.A
									</option>
									<option
										value="25"
										onClick={setSelectBank(
											"Banco Bicentenario del Pueblo de la Clase Obrera, Mujer y Comunas B.U."
										)}>
										Banco Bicentenario del Pueblo de la Clase Obrera, Mujer y Comunas B.U.
									</option>
									<option
										value="26"
										onClick={setSelectBank("Novo Banco, S.A. Sucursal Venezuela Banco Universal")}>
										Novo Banco, S.A. Sucursal Venezuela Banco Universal
									</option>
									<option
										value="27"
										onClick={setSelectBank("Banco de la Fuerza Armada Nacional Bolivariana, B.U.")}>
										Banco de la Fuerza Armada Nacional Bolivariana, B.U.
									</option>
									<option value="28" onClick={setSelectBank("Citibank N.A.")}>
										Citibank N.A.
									</option>
									<option
										value="29"
										onClick={setSelectBank("Banco Nacional de Crédito, C.A. Banco Universal")}>
										Banco Nacional de Crédito, C.A. Banco Universal
									</option>
									<option
										value="30"
										onClick={setSelectBank("Instituto Municipal de Crédito Popular")}>
										Instituto Municipal de Crédito Popular
									</option> */}
								</select>
								{/* ----------------Input Tipo de Negocio----------------- */}
								<input
									type="text"
									className="form-control col-5 mb-6 mx-1 bg-light border border-primary rounded-pill"
									placeholder="Tipo de Negocio"
									onChange={changeBussinessType}
								/>
							</div>
						</div>
						<br />
						{/* ----------------Select Categoria del Egreso----------------- */}
						<div className="row justify-content-center">
							<select className="custom-select  col-5 mb-6 mx-1 bg-light border border-primary rounded-pill">
								<option selected>Seleccione una Categoria del Egreso</option>
								{/* <option value="1" onClick={setExpensesCategory("Activos Fijos")}>
									Activos Fijos
								</option>
								<option value="2" onClick={setExpensesCategory("Activos Intangibles")}>
									Activos Intangibles
								</option>
								<option value="3" onClick={setExpensesCategory("Alquiler")}>
									Alquiler
								</option>
								<option value="4" onClick={setExpensesCategory("Beneficios a Empleados")}>
									Beneficios a Empleados
								</option>
								<option value="5" onClick={setExpensesCategory("Comisiones/Intereses")}>
									Comisiones/Intereses
								</option>
								<option value="6" onClick={setExpensesCategory("Formación/Educación")}>
									Formación/Educación
								</option>
								<option value="7" onClick={setExpensesCategory("Gastos Administrativos")}>
									Gastos Administrativos
								</option>
								<option value="8" onClick={setExpensesCategory("Imprevisto")}>
									Imprevisto
								</option>
								<option value="9" onClick={setExpensesCategory("Impuestos")}>
									Impuestos
								</option>
								<option value="10" onClick={setExpensesCategory("Inversión Inicial")}>
									Inversión Inicial
								</option>
								<option value="11" onClick={setExpensesCategory("Publicidad")}>
									Publicidad
								</option>
								<option value="12" onClick={setExpensesCategory("Salario/Mano de Obra")}>
									Salario/Mano de Obra
								</option>
								<option value="13" onClick={setExpensesCategory("Salud")}>
									Salud
								</option>
								<option value="14" onClick={setExpensesCategory("Servicios Públicos")}>
									Servicios Públicos
								</option> */}
							</select>
							{/* ----------------Introduzca el Proveedor----------------- */}
							<input
								type="text"
								className="form-control col-5 mb-6 mx-1 bg-light border border-primary rounded-pill"
								placeholder="Proveedor"
								onChange={changeSupplier}
							/>
						</div>
						<br />
						<div className="form-group">
							<div className="row justify-content-center">
								<button type="button" className="btn btn-outline-primary mt-3 mb-3 mx-6" onClick="">
									Agregar
								</button>
							</div>
						</div>
						<br />
						{/* ----------------Tabla de los Ultimos 5 Registros de Egresos----------------- */}
						<div className="form-group">
							<div className="row justify-content-center">
								<div className="col-8 table-responsive-sm">
									<table className="table table-sm table-primary">
										<thead>
											<tr>
												<th scope="col">#</th>
												<th scope="col">Fecha</th>
												<th scope="col">Forma de Pago</th>
												<th scope="col">Método de Pago</th>
												<th scope="col">Entidad Bancaria</th>
												<th scope="col">Tipo de Negocio</th>
												<th scope="col">Descripción del Egreso</th>
												<th scope="col">Categoria</th>
												<th scope="col">Monto en USD Dolar</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<th scope="row">1</th>
												<td />
												<td />
												<td />
												<td />
												<td />
												<td />
												<td />
												<td />
												<td />
											</tr>
											<tr>
												<th scope="row">2</th>
												<td />
												<td />
												<td />
												<td />
												<td />
												<td />
												<td />
												<td />
												<td />
											</tr>
											<tr>
												<th scope="row">3</th>
												<td />
												<td />
												<td />
												<td />
												<td />
												<td />
												<td />
												<td />
												<td />
											</tr>
											<tr>
												<th scope="row">4</th>
												<td />
												<td />
												<td />
												<td />
												<td />
												<td />
												<td />
												<td />
												<td />
											</tr>
											<tr>
												<th scope="row">5</th>
												<td />
												<td />
												<td />
												<td />
												<td />
												<td />
												<td />
												<td />
												<td />
											</tr>
										</tbody>
									</table>
									<div className="form-group col-12">
										<div className="row justify-content-center">
											{/* Falta agregar la propiedad onClick para Cancelar el Registro del Valor a la Tabla. */}
											<button
												type="button"
												className="btn btn-xs btn-outline-danger m-3"
												onClick="">
												Cancelar
											</button>
											{/* Falta agregar la propiedad onClick para Aceptar el Registro e Introducir el Valor a la Tabla. */}
											<button
												type="button"
												className="btn btn-xs btn-outline-primary m-3"
												onClick="">
												Aceptar
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default Expenses;
