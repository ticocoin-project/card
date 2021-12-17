import { Navigate, useRoutes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/Notfound";
import DashboardLayout from "./layouts/DashboardLayout";
import LogoOnlyLayout from "./layouts/LogoOnlyLayout";
import Config from "./pages/Config";
import FormKYC from "./pages/FormKYC";

export default function Routes() {
	return useRoutes([
		{
			path: "/dashboard",
			element: <DashboardLayout />,
			children: [
				{
					path: "/dashboard",
					element: <Navigate to="/dashboard/app" replace />,
				},
				{ path: "app", element: <Dashboard /> },
				{ path: "config", element: <Config /> },
				{ path: "kyc", element: <FormKYC /> },
				{ path: "404", element: <NotFound /> },
			],
		},
		{
			path: "/",
			element: <LogoOnlyLayout />,
			children: [
				// { path: 'login', element: <Login /> },
				// { path: 'register', element: <Register /> },
				{ path: "404", element: <NotFound /> },
				{ path: "/", element: <Navigate to="/dashboard" /> },
				{ path: "*", element: <Navigate to="/404" /> },
			],
		},
		{ path: "*", element: <Navigate to="/404" replace /> },
	]);
}
