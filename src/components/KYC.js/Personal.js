import {
	Grid,
	Typography,
	TextField,
	FormControlLabel,
	Checkbox,
	Container,
	Paper,
	Stepper,
	Step,
	StepLabel,
	Button,
	Box,
} from "@mui/material";

const AddressForm = () => {
	return (
		<>
			<Typography variant="h6" gutterBottom>
				Informacion personal
			</Typography>
			<Grid container spacing={3}>
				<Grid item xs={12} sm={6}>
					<TextField
						required
						id="firstName"
						name="firstName"
						label="Nombres"
						fullWidth
						autoComplete="given-name"
						variant="standard"
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						required
						id="lastName"
						name="lastName"
						label="Apellidos"
						fullWidth
						autoComplete="family-name"
						variant="standard"
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						required
						id="nacimiento"
						name="nacimiento"
						label="Fecha de nacimiento"
						fullWidth
						autoComplete="shipping address-line1"
						variant="standard"
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						required
						id="address1"
						name="address1"
						label="Direccion"
						fullWidth
						autoComplete="shipping address-line1"
						variant="standard"
					/>
				</Grid>
				<Grid item xs={12} sm={4}>
					<TextField
						required
						id="address2"
						name="address2"
						label="indicativo +57"
						fullWidth
						autoComplete="shipping address-line2"
						variant="standard"
					/>
				</Grid>
				<Grid item xs={12} sm={8}>
					<TextField
						required
						id="celular"
						name="celular"
						label="Celular"
						fullWidth
						autoComplete="shipping address-line2"
						variant="standard"
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						required
						id="city"
						name="city"
						label="Ciudad"
						fullWidth
						autoComplete="shipping address-level2"
						variant="standard"
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						id="state"
						name="state"
						label="Region"
						fullWidth
						variant="standard"
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						required
						id="zip"
						name="zip"
						label="Codigo Postal"
						fullWidth
						autoComplete="shipping postal-code"
						variant="standard"
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						required
						id="country"
						name="country"
						label="Nacionalidad"
						fullWidth
						autoComplete="shipping country"
						variant="standard"
					/>
				</Grid>
			</Grid>
		</>
	);
};

export default AddressForm;
