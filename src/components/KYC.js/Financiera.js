import * as React from "react";
import {
	Typography,
	FormControlLabel,
	Radio,
	RadioGroup,
	FormControl,
	FormLabel,
	Grid,
	TextField,
} from "@mui/material";

export default function PaymentForm() {
	return (
		<React.Fragment>
			<Typography variant="h4" gutterBottom>
				Informacion financiera
			</Typography>
			<Typography variant="subtitle1" gutterBottom>
				Incluye informacion sobre tus conocimientos en la materia,
				renta, origen de fondos y demás aspectos financieros
			</Typography>
			<br />
			<FormControl component="fieldset">
				<FormLabel component="legend">
					¿Has invertido en empresas no cotizadas gestionadas por tí o
					por otros?
				</FormLabel>
				<RadioGroup
					aria-label="gender"
					// defaultValue="female"
					name="radio-buttons-group"
				>
					<FormControlLabel
						value="si"
						control={<Radio />}
						label="Si"
					/>
					<FormControlLabel
						value="no"
						control={<Radio />}
						label="No"
					/>
				</RadioGroup>
			</FormControl>
			<FormControl component="fieldset">
				<FormLabel component="legend">
					¿Conoces lo que es un security token y los riesgos que en la
					invesión en los mismos conlleva?
				</FormLabel>
				<RadioGroup
					aria-label="gender"
					// defaultValue="female"
					name="radio-buttons-group"
				>
					<FormControlLabel
						value="si"
						control={<Radio />}
						label="Si"
					/>
					<FormControlLabel
						value="no"
						control={<Radio />}
						label="No"
					/>
				</RadioGroup>
			</FormControl>
			<FormControl component="fieldset">
				<FormLabel component="legend">
					¿Sabes que invirtiendo en empresas no cotizadas puedes
					perder hasta el 100% de tu inversión?
				</FormLabel>
				<RadioGroup
					aria-label="gender"
					// defaultValue="female"
					name="radio-buttons-group"
				>
					<FormControlLabel
						value="si"
						control={<Radio />}
						label="Si"
					/>
					<FormControlLabel
						value="no"
						control={<Radio />}
						label="No"
					/>
				</RadioGroup>
			</FormControl>
			<FormControl component="fieldset">
				<FormLabel component="legend">
					¿Sabes que invirtiendo en empresas no cotizadas puedes
					perder hasta el 100% de tu inversión?
				</FormLabel>
				<RadioGroup
					aria-label="gender"
					// defaultValue="female"
					name="radio-buttons-group"
				>
					<FormControlLabel
						value="25"
						control={<Radio />}
						label="Menos del 25%"
					/>
					<FormControlLabel
						value="50"
						control={<Radio />}
						label="Entre el 25 y 50%"
					/>
					<FormControlLabel
						value="75"
						control={<Radio />}
						label="Entre el 50 y 75%"
					/>
					<FormControlLabel
						value="+75"
						control={<Radio />}
						label="Más del 75%"
					/>
				</RadioGroup>
			</FormControl>
			<FormControl component="fieldset">
				<FormLabel component="legend">
					¿Cuál es el origen de la mayor parte de tus ingresos
					períodicos?
				</FormLabel>
				<RadioGroup
					aria-label="gender"
					// defaultValue="female"
					name="radio-buttons-group"
				>
					<FormControlLabel
						value="ninguno"
						control={<Radio />}
						label="No tengo ingresos periodicos"
					/>
					<FormControlLabel
						value="jubilacion"
						control={<Radio />}
						label="Prestacion por jubiacion o incapacidad"
					/>
					<FormControlLabel
						value="trabajo"
						control={<Radio />}
						label="Actividad Laboral"
					/>
					<FormControlLabel
						value="renta"
						control={<Radio />}
						label="Rentas de bienes inmuebles en propiedad"
					/>
					<FormControlLabel
						value="inversiones"
						control={<Radio />}
						label="Rendimiento de inversiones financieras"
					/>
				</RadioGroup>
			</FormControl>
			<FormControl component="fieldset">
				<FormLabel component="legend">
					¿Cuál es el origen del capital que quieres invertir o
					reinvertir en este tipo de productos?
				</FormLabel>
				<RadioGroup
					aria-label="gender"
					// defaultValue="female"
					name="radio-buttons-group"
				>
					<FormControlLabel
						value="inversionexistente"
						control={<Radio />}
						label="Recolocar inversiones financieras existentes"
					/>
					<FormControlLabel
						value="herencia"
						control={<Radio />}
						label="Herencia o donación"
					/>
					<FormControlLabel
						value="negocios"
						control={<Radio />}
						label="Ingresos por negocios"
					/>
					<FormControlLabel
						value="otroorigen"
						control={<Radio />}
						label="Otro origen"
					/>
				</RadioGroup>
			</FormControl>
			<FormControl component="fieldset">
				<FormLabel component="legend">
					¿Cuál es el horizonte temporal de tu inversión?
				</FormLabel>
				<RadioGroup
					aria-label="gender"
					// defaultValue="female"
					name="radio-buttons-group"
				>
					<FormControlLabel
						value="-6"
						control={<Radio />}
						label="Menos de 6 meses"
					/>
					<FormControlLabel
						value="6m2a"
						control={<Radio />}
						label="Entre 6 meses y 2 años"
					/>
					<FormControlLabel
						value="2a5an"
						control={<Radio />}
						label="Entre 2 y 5 años"
					/>
					<FormControlLabel
						value="+5"
						control={<Radio />}
						label="Mas de 5 años"
					/>
				</RadioGroup>
			</FormControl>
			<FormControl component="fieldset">
				<FormLabel component="legend">
					¿Qué fluctuaciones de tu inversion estas dispuesto a asumir?
				</FormLabel>
				<RadioGroup
					aria-label="gender"
					// defaultValue="female"
					name="radio-buttons-group"
				>
					<FormControlLabel
						value="noriesgos"
						control={<Radio />}
						label="Mi objetivo es preservar el capital invertido y no estoy dispuesto a asumir riesgos"
					/>
					<FormControlLabel
						value="moderado"
						control={<Radio />}
						label="Estoy dispuesto a asumir fluctuaciones moderadas de mi capital invertido"
					/>
					<FormControlLabel
						value="elevada"
						control={<Radio />}
						label="Estoy dispuesto a asumir fluctuaciones elevadas de mi capital invertido"
					/>
				</RadioGroup>
			</FormControl>
			<FormControl component="fieldset">
				<FormLabel component="legend">
					¿Qué objetos persigues al realizar la inversión?
				</FormLabel>
				<RadioGroup
					aria-label="gender"
					// defaultValue="female"
					name="radio-buttons-group"
				>
					<FormControlLabel
						value="preservar"
						control={<Radio />}
						label="Preservar el capital"
					/>
					<FormControlLabel
						value="crecimientomedio"
						control={<Radio />}
						label="Crecimiento medio del capital, asumiendo un riesgo moderado"
					/>
					<FormControlLabel
						value="crecimientofuerte"
						control={<Radio />}
						label="Crecimiento fuerte del capital asumiendo fuertes riesgos"
					/>
				</RadioGroup>
			</FormControl>
			<FormControl component="fieldset">
				<FormLabel component="legend">Nivel de estudios</FormLabel>
				<RadioGroup
					aria-label="gender"
					// defaultValue="female"
					name="radio-buttons-group"
				>
					<FormControlLabel
						value="notengo"
						control={<Radio />}
						label="No tengo estudios"
					/>
					<FormControlLabel
						value="basicos"
						control={<Radio />}
						label="Estudios basicos"
					/>
					<FormControlLabel
						value="superiores"
						control={<Radio />}
						label="Estudios superiores"
					/>
					<FormControlLabel
						value="postgrado"
						control={<Radio />}
						label="Estudios superiores o postgrado en materia financiera"
					/>
				</RadioGroup>
			</FormControl>
			<Grid item xs={12}>
				<TextField
					required
					id="profesion"
					name="profesion"
					label="Profesión"
					fullWidth
					autoComplete="shipping address-line1"
					variant="standard"
				/>
			</Grid>
			<Grid item xs={12}>
				<TextField
					required
					id="ingresos"
					name="ingresos"
					label="Ingresos anuales"
					fullWidth
					autoComplete="shipping address-line1"
					variant="standard"
				/>
			</Grid>
		</React.Fragment>
	);
}
