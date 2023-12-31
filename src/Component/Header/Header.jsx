import { Link } from "react-router-dom";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BsChatDots } from "react-icons/bs";
import DarkMode from "../DarkMode/DarkMode";
import UserProfile from "../UserProfile/UserProfile";
import { BsList, BsX } from "react-icons/bs";
import { useState } from "react";
const Header = ({ sidebarOpen, setSidebarOpen }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<header className="bg-gray-50 flex w-full  drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none">
			<div className="flex flex-grow items-center justify-between py-4 px-4 shadow-2 md:px-6 2xl:px-11">
				<div className="flex items-center gap-2 sm:gap-4 lg:hidden">
					{/* <!-- Hamburger Toggle BTN --> */}
					<button
						aria-controls="sidebar"
						onClick={(e) => {
							e.stopPropagation();
							setSidebarOpen(!sidebarOpen);
						}}
						className="z-99999 block rounded-full border border-stroke bg-white p-1.5 shadow-lg shadow-purple-400 dark:border-strokedark dark:bg-boxdark lg:hidden"
					>
						{isOpen ? (
							<BsList className="text-black" onClick={toggleMenu} />
						) : (
							<BsX className="text-black" onClick={toggleMenu} />
						)}
					</button>
					{/* <!-- Hamburger Toggle BTN --> */}

					<Link className="block flex-shrink-0 lg:hidden" to="/"></Link>
				</div>

				<div className="hidden sm:block">
					<form action="https://formbold.com/s/unique_form_id" method="POST">
						<div className="relative">
							<button className="absolute top-1/2 left-0 -translate-y-1/2">
								<svg
									className="fill-body hover:fill-primary dark:fill-bodydark dark:hover:fill-primary"
									width="20"
									height="20"
									viewBox="0 0 20 20"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M9.16666 3.33332C5.945 3.33332 3.33332 5.945 3.33332 9.16666C3.33332 12.3883 5.945 15 9.16666 15C12.3883 15 15 12.3883 15 9.16666C15 5.945 12.3883 3.33332 9.16666 3.33332ZM1.66666 9.16666C1.66666 5.02452 5.02452 1.66666 9.16666 1.66666C13.3088 1.66666 16.6667 5.02452 16.6667 9.16666C16.6667 13.3088 13.3088 16.6667 9.16666 16.6667C5.02452 16.6667 1.66666 13.3088 1.66666 9.16666Z"
										fill=""
									/>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M13.2857 13.2857C13.6112 12.9603 14.1388 12.9603 14.4642 13.2857L18.0892 16.9107C18.4147 17.2362 18.4147 17.7638 18.0892 18.0892C17.7638 18.4147 17.2362 18.4147 16.9107 18.0892L13.2857 14.4642C12.9603 14.1388 12.9603 13.6112 13.2857 13.2857Z"
										fill=""
									/>
								</svg>
							</button>

							<input
								type="text"
								placeholder="Type to search..."
								className="text-gray-600 rounded-full bg-white shadow-md brightness-105  shadow-purple-400   w-full border border-gray-600 pr-4 pl-9 focus:outline-none"
							/>
						</div>
					</form>
				</div>

				<div className="flex items-center gap-3 2xsm:gap-7">
					<ul className="flex items-center gap-2 2xsm:gap-4">
						{/* <!-- Dark Mode Toggler --> */}
						<DarkMode />
						{/* <!-- Dark Mode Toggler --> */}
						{/* <!-- Notification Menu Area --> */}
						<div className="shadow-xl shadow-purple-400 bg-white  flex h-8 w-8  items-center justify-center rounded-full">
							<IoMdNotificationsOutline className="text-black"></IoMdNotificationsOutline>
						</div>

						{/* <!-- Notification Menu Area --> */}
						{/* <!-- Chat Notification Area --> */}

						<div className="shadow-xl shadow-purple-400 bg-white  flex h-8 w-8  items-center justify-center rounded-full">
							<BsChatDots></BsChatDots>
						</div>

						{/* <!-- Chat Notification Area --> */}
					</ul>

					{/* <!-- User Area --> */}
					<UserProfile />
					{/* <!-- User Area --> */}
				</div>
			</div>
		</header>
	);
};

export default Header;
