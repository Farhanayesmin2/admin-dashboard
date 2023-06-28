import { Outlet } from "react-router-dom";

import Footer from "../Shared/Footer/Footer";
import NavMenu from "../Shared/NavMenu/NavMenu";

const Main = () => {
	return (
		<div>
			<NavMenu></NavMenu>
			<Outlet></Outlet>
			<Footer></Footer>
		</div>
	);
};

export default Main;
