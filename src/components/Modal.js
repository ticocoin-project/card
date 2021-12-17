import { useState } from "react";
function Modal() {
	const [maticVal, setMaticVal] = useState("");
	const [tokenVal, setTokenVal] = useState("");
	const [checkTokenVal, setCheckTokenVal] = useState(false);
	return (
		<div
			className="modal fade"
			id="comprar"
			tabIndex="-1"
			role="dialog"
			aria-labelledby="exampleModalLongTitle"
			aria-hidden="true"
		>
			<div
				className="modal-dialog modal-dialog-centered"
				role="document"
			>
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title" id="exampleModalLongTitle">
							Comprar Token
						</h5>
						<button
							type="button"
							className="close"
							data-dismiss="modal"
							aria-label="Close"
						>
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div className="modal-body">
						<form>
							<div className="form-group">
								<div className="input-group mb-2 mr-sm-2">
									<div className="input-group-prepend">
										<div className="input-group-text">MATIC</div>
									</div>
									<input
										type="number"
										value={maticVal}
										required
										min={0}
										onChange={(e) => setMaticVal(e.target.value)}
										className="form-control"
										id="inlineFormInputGroupUsername2"
										placeholder="Monto"
									/>
								</div>
							</div>

							<div className="form-group">
								<div className="input-group mb-2 mr-sm-2">
									<div className="input-group-prepend">
										<div className="input-group-text">CCA-01</div>
									</div>
									<input
										type="number"
										required
										min={0}
										value={tokenVal}
										onChange={(e) => setTokenVal(e.target.value)}
										className="form-control"
										id="inlineFormInputGroupUsername2"
										placeholder="Recibe"
										disabled
									/>
								</div>
							</div>
							<div className="form-check">
								<input
									className="form-check-input"
									type="checkbox"
									checked={checkTokenVal}
									id="flexCheckDefault"
									onChange={() => setCheckTokenVal(!checkTokenVal)}
								/>
								<label
									className="form-check-label"
									for="flexCheckDefault"
								>
									Confirmo que he leido y acepto el ACUERDO SE
									SUSCRIPCION DE TOKENS
								</label>
								{/* {checkTokenVal ? "true" : "false"} */}
							</div>
						</form>
					</div>
					<div className="modal-footer">
						<button
							type="button"
							className="btn btn-secondary"
							data-dismiss="modal"
						>
							Close
						</button>
						<button type="button" className="btn btn-primary">
							Comprar
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Modal;
