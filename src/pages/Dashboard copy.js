import Sidebar from "../components/Navigation/Sidebar";
import Topbar from "../components/Navigation/Topbar";
// import CardInfo from "../components/Cards/Info";
import "./card.css";
import Modal from "./../components/Modal";
import { Link } from "react-router-dom";

// tamaño imagen card 1400 X 2200 px

function Dashboard() {
	return (
		<>
			{/* <!-- Begin Page Content --> */}
			<div className="container-fluid">
				{/* <!-- Page Heading --> */}

				{/* <PageHeading title="Dashboard" /> */}

				<div className="row">
					<div className="col-12 col-sm-6 col-lg-3">
						<div
							className="single_advisor_profile wow fadeInUp"
							data-wow-delay="0.2s"
							style={{
								visibility: "visible",
								animationDelay: "0.2s",
								animationName: "fadeInUp",
							}}
						>
							<div className="advisor_thumb">
								<button
									type="button"
									className="btn btn-success"
									data-toggle="modal"
									data-target="#comprar"
									style={{ position: "absolute", margin: "25px" }}
								>
									COMPRAR
								</button>
								{/* <nav className="navbar">
                                            <div className="navbar-nav ml-auto">
                                                <button
                                                    type="button"
                                                    className="btn btn-danger"
                                                >
                                                    VENDIDO
                                                </button>
                                            </div>
                                        </nav> */}
								<img
									style={{ margin: "-15px" }}
									width={280}
									src="https://i.ibb.co/R9BkrgK/iumagen.png"
									alt=""
								/>

								<div className="social-info">
									<a href="#">
										Whitepaper &nbsp;
										<i className="fas fa-file-contract"></i>
									</a>
									<a href="#">
										Contrato &nbsp;
										<i className="fas fa-link"></i>
									</a>
									{/* <a href="#">
                                                <i className="fab fa-linkedin"></i>
                                            </a> */}
								</div>
							</div>

							<div className="single_advisor_details_info">
								<h6>CREDITOS CARDONA 01</h6>
								{/* <p className="designation">Founder &amp; CEO</p> */}
								<p className="designation">CCA-01</p>
								<p className="designation">100.000,00€</p>
								<p className="designation">Tokens: 1000</p>
								<p className="designation">Precio x Token: 100,00€</p>
								<p className="designation">APR: 13,00%</p>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-xl-8 col-lg-6">
						{/* <ChartLine /> */}
					</div>
					<div className="col-xl-4 col-lg-6">
						{/* <ChartDonut /> */}
					</div>
				</div>
				<div className="row pb-5">
					<div className="col-12 col-sm-6 col-lg-4">
						<div
							className="card despuesito"
							style={{ overflow: "hidden" }}
						>
							<img
								className="card-img-top"
								src="https://i.ibb.co/H4fT1ws/iumagen-1.png"
								alt="Card image cap"
							/>
							<div className="social-info">
								<a href="#">
									Whitepaper &nbsp;
									<i className="fas fa-file-contract"></i>
								</a>
								<a href="#">
									Contrato &nbsp;
									<i className="fas fa-link"></i>
								</a>
								{/* <a href="#">
                                                <i className="fab fa-linkedin"></i>
                                            </a> */}
							</div>
							<div
								className="card-body line-green"
								style={{ zIndex: 20 }}
							>
								<h6 className="card-title text-right">
									CREDITOS CARDONA 01
								</h6>
								<p className="card-text text-right h6">CCA-01</p>
								<p className="card-text text-right h6">100.000,00€</p>
								<p className="card-text text-right h6">
									Tokens: 1000
								</p>
								<p className="card-text text-right h6">
									Precio x Token: 100,00€
								</p>
								<p className="card-text text-right h6">APR: 13,00%</p>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-12 col-sm-6 col-lg-4">
						<div class="card">
							<div class="additional">
								<div class="user-card">
									<div class="level center">Level 13</div>
									<div class="points center">5,312 Points</div>
									<img
										className="avatar"
										width={150}
										src="https://i.ibb.co/H4fT1ws/iumagen.png"
										alt="Card image cap"
									/>
								</div>
								<div class="more-info">
									<h1>Jane Doe</h1>
									<div class="coords">
										<span>Group Name</span>
										<span>Joined January 2019</span>
									</div>
									<div class="coords">
										<span>Position/Role</span>
										<span>City, Country</span>
									</div>
									<div class="stats">
										<div>
											<div class="title">Awards</div>
											<i class="fa fa-trophy"></i>
											<div class="value">2</div>
										</div>
										<div>
											<div class="title">Matches</div>
											<i class="fa fa-gamepad"></i>
											<div class="value">27</div>
										</div>
										<div>
											<div class="title">Pals</div>
											<i class="fa fa-group"></i>
											<div class="value">123</div>
										</div>
										<div>
											<div class="title">Coffee</div>
											<i class="fa fa-coffee"></i>
											<div class="value infinity">∞</div>
										</div>
									</div>
								</div>
							</div>
							<div class="general">
								<h1>Jane Doe</h1>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing
									elit. Fusce a volutpat mauris, at molestie lacus.
									Nam vestibulum sodales odio ut pulvinar.
								</p>
								<span class="more">
									Mouse over the card for more info
								</span>
							</div>
						</div>
					</div>
				</div>
				{/* <!-- /.KYC imcompleto --> */}
				<div className="cardKYC">
					<div className="infoKYC">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
							></path>
						</svg>
					</div>
					<div className="contenidoKYC">
						<h2>Registro incompleto</h2>
						<h3>
							Completa tu registro (KYC) para poder invertir en
							inmuebles los próximos días
						</h3>
						<div>
							<Link to="/dashboard/kyc">
								<button type="button" className="btn btn-warning">
									Completar KYC
									<span>→</span>
								</button>
							</Link>
						</div>
					</div>
					<div>
						<img
							className="imagenKYC"
							src="https://d2gvzqttsr1gma.cloudfront.net/images/kyc/status-draft.svg"
							alt=""
						/>
					</div>
				</div>
				{/* <!-- /Fin KYC incompleto --> */}
			</div>
			{/* <!-- /.container-fluid --> */}
		</>
	);
}

export default Dashboard;
