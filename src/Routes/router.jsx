import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import DashboardLayout from "../Layout/DashboardLayout/DashboardLayout";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Data from "../Pages/DataChart/Data/Data";
import ProductCard from "../Pages/Dashboard/ProductCard/ProductCard";
import Charts from "../Pages/Charts/Charts";
import BarChart from "../Pages/Dashboard/BarChart/BarChart";
import User from "../Pages/Dashboard/User/User";

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
	{
		path: "dashboard",
		element: <DashboardLayout></DashboardLayout>,

		children: [
			{
				path: "dashboard",
				element: <Dashboard></Dashboard>,
			},
			{
				path: "data",
				element: <Data></Data>,
			},
			{
				path: "charts",
				element: <Charts></Charts>,
			},
			{
				path: "bar",
				element: <BarChart></BarChart>,
			},
			{
				path: "product",
				element: <ProductCard></ProductCard>,
			},
			{
				path: "table",
				element: <User></User>,
			},
		],
	},
]);
export default router;
