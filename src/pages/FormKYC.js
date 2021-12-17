import React from "react";
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
import AddressForm from "../components/KYC.js/Personal";
import Review from "../components/KYC.js/Selfie";
import PaymentForm from "../components/KYC.js/Financiera";
const steps = [
	"Información personal",
	"Información financiera",
	"Sube tu DNI y selfie",
];

function getStepContent(step) {
	switch (step) {
		case 0:
			return <AddressForm />;
		case 1:
			return <PaymentForm />;
		case 2:
			return <Review />;
		default:
			throw new Error("Unknown step");
	}
}
function FormKYC() {
	const [activeStep, setActiveStep] = React.useState(0);

	const handleNext = () => {
		setActiveStep(activeStep + 1);
	};

	const handleBack = () => {
		setActiveStep(activeStep - 1);
	};
	return (
		<div>
			<Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
				<Paper
					variant="outlined"
					sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
				>
					<Typography component="h1" variant="h4" align="center">
						Conocer al Cliente
					</Typography>
					<Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
						{steps.map((label) => (
							<Step key={label}>
								<StepLabel>{label}</StepLabel>
							</Step>
						))}
					</Stepper>
					<React.Fragment>
						{activeStep === steps.length ? (
							<React.Fragment>
								<Typography variant="h5" gutterBottom>
									Gracias por confier en Nosotros.
								</Typography>
								<Typography variant="subtitle1">
									Pronto te contactaremos para que puedas utilizar
									mejor nuestra plataforma y disfrutas de nuestros
									beneficios.
								</Typography>
							</React.Fragment>
						) : (
							<React.Fragment>
								{getStepContent(activeStep)}
								<Box
									sx={{ display: "flex", justifyContent: "flex-end" }}
								>
									{activeStep !== 0 && (
										<Button
											onClick={handleBack}
											sx={{ mt: 3, ml: 1 }}
										>
											Anterior
										</Button>
									)}

									<Button
										variant="contained"
										onClick={handleNext}
										sx={{ mt: 3, ml: 1 }}
									>
										{activeStep === steps.length - 1
											? "Terminar"
											: "Siguiente"}
									</Button>
								</Box>
							</React.Fragment>
						)}
					</React.Fragment>
				</Paper>
			</Container>
		</div>
	);
}

export default FormKYC;
