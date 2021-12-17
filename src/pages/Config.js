import React from "react";
import PropTypes from "prop-types";
import { Tabs, Tab, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
};

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		"aria-controls": `simple-tabpanel-${index}`,
	};
}

function Config() {
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	return (
		<div className="container-fluid">
			<Box sx={{ width: "100%" }}>
				<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
					<Tabs
						value={value}
						onChange={handleChange}
						aria-label="basic tabs example"
					>
						<Tab label="Perfil" {...a11yProps(0)} />
						<Tab label="Seguridad" {...a11yProps(1)} />
						<Tab label="KYC" {...a11yProps(2)} />
					</Tabs>
				</Box>
				<TabPanel value={value} index={0}>
					<form>
						<div class="form-group">
							<label for="exampleInputEmail1">Nombres</label>
							<input
								type="text"
								className="form-control"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
								placeholder="Nombres"
							/>
							{/* <small id="emailHelp" class="form-text text-muted">
								We'll never share your email with anyone else.
							</small> */}
						</div>
						<div class="form-group">
							<label for="exampleInputPassword1">Apellidos</label>
							<input
								type="text"
								className="form-control"
								id="exampleInputPassword1"
								placeholder="Apellidos"
							/>
						</div>
						<button type="submit" class="btn btn-primary">
							Actualizar
						</button>
					</form>
				</TabPanel>
				<TabPanel value={value} index={1}>
					<form>
						<div class="form-group">
							<label for="exampleInputEmail1">
								Contraseña actual
							</label>
							<input
								type="password"
								className="form-control"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
								placeholder="********"
							/>
							{/* <small id="emailHelp" class="form-text text-muted">
								We'll never share your email with anyone else.
							</small> */}
						</div>
						<div class="form-group">
							<label for="exampleInputEmail1">Nueva contraseña</label>
							<input
								type="password"
								className="form-control"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
								placeholder="********"
							/>
							{/* <small id="emailHelp" class="form-text text-muted">
								We'll never share your email with anyone else.
							</small> */}
						</div>
						<div class="form-group">
							<label for="exampleInputPassword1">
								Repetir nueva contraseña
							</label>
							<input
								type="password"
								className="form-control"
								id="exampleInputPassword1"
								placeholder="********"
							/>
						</div>
						<button type="submit" className="btn btn-primary">
							Actualizar
						</button>
					</form>
				</TabPanel>
				<TabPanel value={value} index={2}>
					<div className="m-0 row justify-content-center">
						<div className="text-center">
							<h2>¡Houston, tenemos un problema!</h2>
							<div></div>
							<br />
							<span>
								Tu registro está a medias
								<br />
								Completa tu proceso para utilizar nuestros servicios
							</span>
							<div></div>
							<br />
							<br />
							<div>
								<Link to="/dashboard/kyc">
									<button type="button" className="btn btn-warning">
										Completa Registro
									</button>
								</Link>
							</div>
							<div></div>
							<img src="https://d2gvzqttsr1gma.cloudfront.net/images/kyc/status-draft.svg" />
						</div>
					</div>
				</TabPanel>
			</Box>
		</div>
	);
}

export default Config;
