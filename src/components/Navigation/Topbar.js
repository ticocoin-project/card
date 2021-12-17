import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { clickMenuOpen } from "./../../redux/PanelDucks";
import { Web3Context } from "./../../utils/context";

function Topbar() {
	const [amount, setAmount] = React.useState(0);
	const [accounts, setAccounts] = React.useState(null);
	const [chainkId, setChainkId] = React.useState(null);
	const [idCadena, setIdCadena] = React.useState(null);
	const {
		web3,
		provedor,
		// accounts,
		// amount,
		// contract
	} = useContext(Web3Context);

	const dispatch = useDispatch();
	React.useEffect(() => {
		provedor.on("chainChanged", (_chainId) => setIdCadena(_chainId));
		provedor.on("accountsChanged", (accounts) => {
			setAccounts(accounts);
		});
	}, []);
	React.useEffect(() => {
		async function obtener() {
			// Use web3 to get the user's accounts.
			let acts = await web3.eth.getAccounts();
			// Get the netWork instance.
			let chId = await web3.eth.net.getId();
			setAccounts(acts);
			setChainkId(chId);
			await web3.eth.getBalance(acts[0]).then((r) => {
				setAmount(r);
			});
		}
		obtener();
	}, [accounts, idCadena]);

	return (
		<nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
			{/* <!-- Sidebar Toggle (Topbar) --> */}
			<button
				onClick={() => {
					dispatch(clickMenuOpen());
				}}
				id="sidebarToggleTop"
				className="btn btn-link d-md-none rounded-circle mr-3"
			>
				<i className="fa fa-bars"></i>
			</button>

			{/* <!-- Topbar Navbar --> */}
			<ul className="navbar-nav ml-auto">
				{/* <!-- Nav Item - Search Dropdown (Visible Only XS) --> */}

				<li className="nav-item dropdown no-arrow d-sm-none">
					<a
						className="nav-link dropdown-toggle"
						href="#"
						id="searchDropdown"
						role="button"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false"
					>
						<i className="fas fa-search fa-fw"></i>
					</a>
					{/* <!-- Dropdown - Messages --> */}
					<div
						className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
						aria-labelledby="searchDropdown"
					>
						<form className="form-inline mr-auto w-100 navbar-search">
							<div className="input-group">
								<input
									type="text"
									className="form-control bg-light border-0 small"
									placeholder="Search for..."
									aria-label="Search"
									aria-describedby="basic-addon2"
								/>
								<div className="input-group-append">
									<button className="btn btn-primary" type="button">
										<i className="fas fa-search fa-sm"></i>
									</button>
								</div>
							</div>
						</form>
					</div>
				</li>

				<li className="nav-item dropdown no-arrow mx-1">
					<a
						className="nav-link dropdown-toggle"
						href="#"
						id="searchDropdown"
						role="button"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false"
					>
						{chainkId === 80001 || chainkId === 137 ? (
							<button type="button" className="btn btn-warning m-5">
								Solicitar Whitelist
							</button>
						) : null}
						{chainkId === 80001 ? (
							<span className="badge badge-primary">Testnet</span>
						) : null}
						{chainkId === 80001 || chainkId === 137 ? (
							<>
								<button type="button" className="btn border">
									{amount
										? parseFloat(
												web3.utils.fromWei(amount.toString(), "ether")
										  ).toFixed(4)
										: null}{" "}
									MATIC
								</button>
								<button
									type="button"
									className="btn btn-secondary border"
								>
									{accounts
										? accounts[0].substr(0, 5) +
										  "..." +
										  accounts[0].substr(-4)
										: null}
								</button>
							</>
						) : (
							<button type="button" className="btn btn-danger">
								Conectate a la Red POLYGON
							</button>
						)}
					</a>
				</li>

				{/* <!-- Nav Item - Messages --> */}
				{/* <li className="nav-item dropdown no-arrow mx-1">
					<a
						className="nav-link dropdown-toggle"
						href="#"
						id="messagesDropdown"
						role="button"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false"
					>
						<i className="fas fa-envelope fa-fw"></i> */}
				{/* <!-- Counter - Messages --> */}
				{/* <span className="badge badge-danger badge-counter">
							7
						</span>
					</a> */}
				{/* <!-- Dropdown - Messages --> */}
				{/* <div
						className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
						aria-labelledby="messagesDropdown"
					>
						<h6 className="dropdown-header">Message Center</h6>
						<a
							className="dropdown-item d-flex align-items-center"
							href="#"
						>
							<div className="dropdown-list-image mr-3">
								<img
									className="rounded-circle"
									src="https://source.unsplash.com/fn_BT9fwg_E/60x60"
									alt=""
								/>
								<div className="status-indicator bg-success"></div>
							</div>
							<div className="font-weight-bold">
								<div className="text-truncate">
									Hi there! I am wondering if you can help me with a
									problem I've been having.
								</div>
								<div className="small text-gray-500">
									Emily Fowler · 58m
								</div>
							</div>
						</a>
						<a
							className="dropdown-item d-flex align-items-center"
							href="#"
						>
							<div className="dropdown-list-image mr-3">
								<img
									className="rounded-circle"
									src="https://source.unsplash.com/AU4VPcFN4LE/60x60"
									alt=""
								/>
								<div className="status-indicator"></div>
							</div>
							<div>
								<div className="text-truncate">
									I have the photos that you ordered last month, how
									would you like them sent to you?
								</div>
								<div className="small text-gray-500">
									Jae Chun · 1d
								</div>
							</div>
						</a>
						<a
							className="dropdown-item d-flex align-items-center"
							href="#"
						>
							<div className="dropdown-list-image mr-3">
								<img
									className="rounded-circle"
									src="https://source.unsplash.com/CS2uCrpNzJY/60x60"
									alt=""
								/>
								<div className="status-indicator bg-warning"></div>
							</div>
							<div>
								<div className="text-truncate">
									Last month's report looks great, I am very happy
									with the progress so far, keep up the good work!
								</div>
								<div className="small text-gray-500">
									Morgan Alvarez · 2d
								</div>
							</div>
						</a>
						<a
							className="dropdown-item d-flex align-items-center"
							href="#"
						>
							<div className="dropdown-list-image mr-3">
								<img
									className="rounded-circle"
									src="https://source.unsplash.com/Mv9hjnEUHR4/60x60"
									alt=""
								/>
								<div className="status-indicator bg-success"></div>
							</div>
							<div>
								<div className="text-truncate">
									Am I a good boy? The reason I ask is because someone
									told me that people say this to all dogs, even if
									they aren't good...
								</div>
								<div className="small text-gray-500">
									Chicken the Dog · 2w
								</div>
							</div>
						</a>
						<a
							className="dropdown-item text-center small text-gray-500"
							href="#"
						>
							Read More Messages
						</a>
					</div>
				</li> */}

				{/* <div className="topbar-divider d-none d-sm-block"></div> */}

				{/* <!-- Nav Item - User Information --> */}
				{/* <li className="nav-item dropdown no-arrow">
					<a
						className="nav-link dropdown-toggle"
						href="#"
						id="userDropdown"
						role="button"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false"
					>
						<span className="mr-2 d-none d-lg-inline text-gray-600 small">
							Valerie Luna
						</span>
						<img
							className="img-profile rounded-circle"
							src="https://source.unsplash.com/QAB-WJcbgJk/60x60"
						/>
					</a> */}
				{/* <!-- Dropdown - User Information --> */}
				{/* <div
						className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
						aria-labelledby="userDropdown"
					>
						<a className="dropdown-item" href="#">
							<i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
							Profile
						</a>
						<a className="dropdown-item" href="#">
							<i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
							Settings
						</a>
						<a className="dropdown-item" href="#">
							<i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
							Activity Log
						</a>
						<div className="dropdown-divider"></div>
						<a
							className="dropdown-item"
							href="#"
							data-toggle="modal"
							data-target="#logoutModal"
						>
							<i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
							Logout
						</a>
					</div>
				</li> */}
			</ul>
		</nav>
	);
}

export default Topbar;
