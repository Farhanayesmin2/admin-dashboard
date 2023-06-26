import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Main></Main>,
		errorElement: <ErrorPage></ErrorPage>,
		children: [
			{
				path: "/",
				element: <Home></Home>,
			},
			{
				path: "register",
				element: <Register></Register>,
			},
			{
				path: "login",
				element: <Login></Login>,
			},
		],
	},
	// {
	// 	path: "dashboard",
	// 	element: (
	// 		// <PrivetRoutes>
	// 		<DashboardLayout></DashboardLayout>
	// 		// </PrivetRoutes>
	// 	),
	// 	children: [
	// 		{
	// 			path: "dashboard",
	// 			element: <Dashboard></Dashboard>,
	// 		},
	// 	],
	// },
]);
export default router;