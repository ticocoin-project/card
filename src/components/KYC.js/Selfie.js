import * as React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";

export default function Review() {
	return (
		<React.Fragment>
			<Typography variant="h6" gutterBottom>
				Entrega de Documentos
			</Typography>
			<Grid container spacing={2}>
				<Grid item xs={12} sm={6}>
					<Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
						Anverso
					</Typography>
					<img
						src="https://d2gvzqttsr1gma.cloudfront.net/images/kyc/docs-front.svg"
						width={200}
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
						Reverso
					</Typography>
					<img
						src="https://d2gvzqttsr1gma.cloudfront.net/images/kyc/docs-back.svg"
						width={200}
					/>
				</Grid>
			</Grid>
			<Grid container spacing={2}>
				<Grid item>
					<Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
						imagen selfie
					</Typography>
					<img
						src="https://d2gvzqttsr1gma.cloudfront.net/images/kyc/docs-selfie.svg"
						width={200}
					/>
				</Grid>
			</Grid>
		</React.Fragment>
	);
}
