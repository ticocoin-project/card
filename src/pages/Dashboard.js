import Sidebar from "../components/Navigation/Sidebar";
import Topbar from "../components/Navigation/Topbar";
// import CardInfo from "../components/Cards/Info";
import "./card.css";
import Modal from "./../components/Modal";
import { Link } from "react-router-dom";

// tamaño imagen card 1400 X 3200 px

function Dashboard() {
	return (
		<>
			{/* <!-- Begin Page Content --> */}
			<div className="container-fluid">
				{/* <!-- Page Heading --> */}

				{/* <PageHeading title="Dashboard" /> */}

				<div className="row d-none d-md-block">
					<div className="col-12 col-sm-6 col-lg-4">
						<div class="card-token">
							<div class="additional">
								<div class="user-card">
									<div class="level center">CCA-001</div>
									<div class="points center">1.000 Tokens</div>
									<div class="sell center">COMPRAR</div>
									<img
										className="avatar"
										width={150}
										src="https://i.ibb.co/n8rr6MR/iumagen.jpg"
										alt="Card image cap"
									/>
								</div>
								<div class="more-info">
									<h1>Creditos Cardona</h1>
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
								<h1>Creditos Cardona</h1>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing
									elit. Fusce a volutpat mauris, at molestie lacus.
									Nam vestibulum sodales odio ut pulvinar.
								</p>
								<span class="more">Más información</span>
							</div>
						</div>
					</div>
				</div>
				<div className="row d-md-none">
					<div class="col-12 mb-5">
						<div class="card flip-card">
							<div class="flip-card-inner">
								<div class="flip-card-front">
									<div class="mask">
										<div class="align-end">Título</div>
									</div>
									<img
										src="https://i.ibb.co/n8rr6MR/iumagen.jpg"
										alt="imagen"
									/>
								</div>
								<div class="flip-card-back">
									<div class="row no-gutters">
										<div class="card-body">
											<h5 class="card-title">Título</h5>
											<p class="card-text pl-2 mt-2">
												Lorem ipsum dolor sit amet, consectetur
												adipiscing elit. Sed dui tellus, maximus ac
												lacinia vitae, hendrerit sed tellus. Quisque
												mattis nec tellus eu vehicula. Donec posuere
												egestas leo, a condimentum velit molestie
												vitae. Etiam neque nisl, faucibus nec
												consequat eu, aliquam a sapien. Maecenas
												finibus neque nec eros sollicitudin gravida.
												Phasellus et ultrices justo. Praesent
												dignissim pellentesque pretium. Nam tempus
												nunc laoreet luctus blandit. Cras feugiat nec
												mi ac fringilla.
											</p>
										</div>
									</div>
								</div>
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
