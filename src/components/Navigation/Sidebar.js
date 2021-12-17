import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clickMenuOpen } from "./../../redux/PanelDucks";
import Logo from "./../../logo.png";

// #b3b483   #6ebe53

function Sidebar() {
	const dispatch = useDispatch();
	const toggled = useSelector((store) => store.panel.menuOpen);
	return (
		<ul
			style={{ backgroundColor: "#6ebe53" }}
			className={
				toggled
					? "navbar-nav  sidebar sidebar-dark accordion toggled"
					: "navbar-nav  sidebar sidebar-dark accordion"
			}
			id="accordionSidebar"
		>
			{/* <!-- Sidebar - Brand --> */}
			<a
				className="sidebar-brand d-flex align-items-center justify-content-center"
				href="index.html"
			>
				<div
					className="sidebar-brand-icon "
					// rotate-n-15"
				>
					<img
						// src="https://www.creditoscardona.com/images/logo.png"
						src={Logo}
						width={40}
						height={40}
					/>
					{/* <i className="fas fa-american-sign-language-interpreting"></i> */}
					{/* <i class="far fa-closed-captioning"></i> */}
					{/* <i class="fab fa-contao"></i> */}
					{/* <i class="fab fa-creative-commons-share"></i> */}
				</div>
				<div className="sidebar-brand-text mx-3">
					CREDITOS CARDONA
					{/* <sup>2</sup> */}
				</div>
			</a>

			{/* <!-- Divider --> */}
			<hr className="sidebar-divider my-0" />

			{/* <!-- Nav Item - Dashboard --> */}
			<li className="nav-item">
				<div className="nav-link">
					<img
						className="img-profile rounded-circle"
						src="https://raw.githubusercontent.com/StartBootstrap/startbootstrap-sb-admin-2/f0309881ef82794a1bd6257cd321801bc38a0f3d/img/undraw_profile.svg"
					/>
					<span>Bryan Gonzalez</span>
				</div>
			</li>

			{/* <!-- Divider --> */}
			<hr className="sidebar-divider" />

			{/* <!-- Heading --> */}
			<div className="sidebar-heading">Interface</div>

			{/* <!-- Nav Item - Pages Collapse Menu --> */}
			<li className="nav-item">
				<Link className="nav-link" to="/">
					<i className="fas fa-fw fa-tachometer-alt"></i>
					<span>Dashboard</span>
				</Link>
			</li>

			<li className="nav-item">
				<Link className="nav-link" to="/dashboard/config">
					<i className="fas fa-fw fa-cog"></i>
					<span>Configuración</span>
				</Link>
			</li>

			{/* <!-- Nav Item - Utilities Collapse Menu --> */}
			{/* <li className="nav-item">
				<div
					className="nav-link collapsed"
					// href="#"
					data-toggle="collapse"
					data-target="#collapseUtilities"
					aria-expanded="true"
					aria-controls="collapseUtilities"
				>
					<i className="fas fa-fw fa-wrench"></i>
					<span>Utilities</span>
				</div>
				<div
					id="collapseUtilities"
					className="collapse"
					aria-labelledby="headingUtilities"
					data-parent="#accordionSidebar"
				>
					<div className="bg-white py-2 collapse-inner rounded">
						<h6 className="collapse-header">Custom Utilities:</h6>
						<a className="collapse-item" href="utilities-color.html">
							Colors
						</a>
						<a className="collapse-item" href="utilities-border.html">
							Borders
						</a>
						<a
							className="collapse-item"
							href="utilities-animation.html"
						>
							Animations
						</a>
						<a className="collapse-item" href="utilities-other.html">
							Other
						</a>
					</div>
				</div>
			</li> */}

			{/* <!-- Divider --> */}
			<hr className="sidebar-divider" />

			{/* <!-- Heading --> */}
			<div className="sidebar-heading">Sesión</div>

			{/* <!-- Nav Item - Charts --> */}
			<li className="nav-item">
				<Link className="nav-link" to="/">
					<i className="fas fa-sign-out-alt"></i>
					<span>Salir</span>
				</Link>
			</li>

			{/* <!-- Nav Item - Tables --> */}
			{/* <li className="nav-item">
				<a className="nav-link" href="tables.html">
					<i className="fas fa-fw fa-table"></i>
					<span>Tables</span>
				</a>
			</li> */}

			{/* <!-- Divider --> */}
			<hr className="sidebar-divider d-none d-md-block" />

			{/* <!-- Sidebar Toggler (Sidebar) --> */}
			<div className="text-center d-none d-md-inline">
				<button
					onClick={() => {
						dispatch(clickMenuOpen());
					}}
					className="rounded-circle border-0"
					id="sidebarToggle"
				></button>
			</div>
		</ul>
	);
}

export default Sidebar;
