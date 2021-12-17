import { Outlet } from "react-router-dom";
import Sidebar from "../components/Navigation/Sidebar";
import Topbar from "../components/Navigation/Topbar";
import "./../pages/card.css";
import Modal from "./../components/Modal";

function DashboardLayout() {
	return (
		<div>
			{/* <!-- Page Wrapper --> */}
			<div id="wrapper">
				{/* <!-- Sidebar --> */}
				<Sidebar />
				{/* <!-- End of Sidebar --> */}
				{/* <!-- Content Wrapper --> */}
				<div id="content-wrapper" className="d-flex flex-column">
					{/* <!-- Main Content --> */}
					<div id="content">
						{/* <!-- Topbar --> */}
						<Topbar />
						{/* <!-- End of Topbar --> */}
						<Outlet />
					</div>
					{/* <!-- End of Main Content --> */}
					{/* <!-- Footer --> */}
					<footer className="sticky-footer bg-white">
						<div className="container my-auto">
							<div className="copyright text-center my-auto">
								<span>Copyright &copy; Your Website 2019</span>
							</div>
						</div>
					</footer>
					{/* <!-- End of Footer --> */}
				</div>
				{/* <!-- End of Content Wrapper --> */}
			</div>
			{/* <!-- End of Page Wrapper --> */}
			{/* <!-- Scroll to Top Button--> */}

			<a className="scroll-to-top rounded" href="#page-top">
				<i className="fas fa-angle-up"></i>
			</a>
			{/* <!-- Modal --> */}
			<Modal />
		</div>
	);
}

export default DashboardLayout;
