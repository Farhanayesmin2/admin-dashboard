import { Link } from "react-router-dom";
import { BsApple, BsWindows } from "react-icons/bs";
import { GiLotusFlower } from "react-icons/gi";
import { SiAmazonaws } from "react-icons/si";
import { BiLogoMicrosoft } from "react-icons/bi";
import { FaGooglePlus } from "react-icons/fa";
import { AiFillAmazonCircle } from "react-icons/ai";
import { useEffect } from "react";
const NavMenu = () => {
	useEffect(() => {
		const handleScroll = (e) => {
			const header = document.querySelector("#header_");
			e.preventDefault();
			header.classList.toggle("sticky-nav", window.scrollY > 0);
		};

		const handleMenuToggle = (e) => {
			e.preventDefault();
			const toggleMobileMenu = document.querySelector("#hamburger");
			const navbar = document.querySelector("#navbar");
			const line = toggleMobileMenu.querySelector("#line");
			const line2 = toggleMobileMenu.querySelector("#line2");
			line.classList.toggle("rotate-45");
			line.classList.toggle("translate-y-1.5");
			line2.classList.toggle("-rotate-45");
			line2.classList.toggle("-translate-y-1");
			if (navbar.clientHeight === 0) {
				navbar.style.paddingTop = "20px";
				navbar.style.paddingBottom = "20px";
				navbar.style.height = `${parseInt(navbar.scrollHeight) + 60}px`;
			} else {
				navbar.style.height = "0px";
				navbar.style.paddingTop = "0px";
				navbar.style.paddingBottom = "0px";
			}
		};

		window.addEventListener("scroll", handleScroll);
		const toggleMobileMenu = document.querySelector("#hamburger");
		toggleMobileMenu.addEventListener("click", handleMenuToggle);

		return () => {
			window.removeEventListener("scroll", handleScroll);
			toggleMobileMenu.removeEventListener("click", handleMenuToggle);
		};
	}, []);

	return (
		<div>
			<header>
				<nav
					id="header_"
					className="  z-index fixed top-0 left-0 z-20 w-full transition-all ease-in"
				>
					<div className=" sticky container m-auto px-6 md:px-12 lg:px-6">
						<div className="flex flex-wrap items-center justify-between py-6 md:py-4 md:gap-0">
							<div className="w-full flex items-center justify-between lg:w-auto">
								<a href="#" aria-label="logo">
									<GiLotusFlower className="shadow-xl rounded-full shadow-white    text-purple-500 h-20 w-20"></GiLotusFlower>
								</a>

								<div className="block max-w-max">
									<button
										aria-label="humburger"
										id="hamburger"
										className="block relative h-auto lg:hidden"
									>
										<div
											aria-hidden="true"
											id="line"
											className="m-auto h-0.5 w-6 rounded bg-gray-100 transition duration-300"
										></div>
										<div
											aria-hidden="true"
											id="line2"
											className="m-auto mt-2 h-0.5 w-6 rounded bg-gray-100 transition duration-300"
										></div>
									</button>
								</div>
							</div>

							<div
								id="navbar"
								className="flex h-0 lg:h-auto overflow-hidden lg:flex lg:pt-0 w-full md:space-y-0 lh:p-0 md:bg-transparent lg:w-auto transition-all duration-300"
							>
								<div
									id="navBox"
									className="w-full p-6 lg:p-0 bg-white bg-opacity-40 backdrop-blur-md lg:items-center flex flex-col lg:flex-row lg:bg-transparent transition-all ease-in"
								>
									<ul className="space-y-6 pb-6 tracking-wide font-medium text-gray-800 lg:text-gray-100 lg:pb-0 lg:pr-6 lg:items-center lg:flex lg:space-y-0">
										<li>
											<a href="#" className="block md:px-3">
												<span>Product</span>
											</a>
										</li>
										<li>
											<Link to="/dashboard" className="block md:px-3">
												<span>Dashboard</span>
											</Link>
										</li>
										<li>
											<a href="#" className="block md:px-3">
												<span>Integrations</span>
											</a>
										</li>
										<li>
											<a href="#" className="block md:px-3">
												<span>Pricing</span>
											</a>
										</li>
										<li>
											<a href="#" className="block md:px-3">
												<span>Blog</span>
											</a>
										</li>
									</ul>

									<ul className="border-t w-full lg:w-max gap-3 pt-2 lg:pt-0 lg:pl-2 lg:border-t-0 lg:border-l flex flex-col lg:gap-0 lg:items-center lg:flex-row">
										<li className="flex w-full lg:max-w-max justify-center">
											<button
												type="button"
												title="Start buying"
												className="flex w-full py-3 px-6 rounded-md text-center transition border border-purple-600 bg-white bg-opacity-40 backdrop-blur-md lg:backdrop-blur-none lg:bg-opacity-0 lg:bg-transparent lg:border-transparent active:border-purple-400 justify-center max-w-lg lg:max-w-max"
											>
												<span className="block text-gray-700 lg:text-white font-semibold">
													Login
												</span>
											</button>
										</li>

										<li className="flex w-full lg:max-w-max justify-center">
											<button
												type="button"
												title="Start buying"
												className="flex w-full py-3  px-6 rounded-lg text-center transition bg-purple-600 lg:bg-white active:bg-purple-700 lg:active:bg-purple-200 focus:bg-purple-500 lg:focus:bg-purple-100 justify-center max-w-lg lg:max-w-max"
											>
												<span className="block text-sm text-white lg:text-purple-600 font-semibold">
													Sign In
												</span>
											</button>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</nav>
			</header>

			<div className="relative">
				<img
					className="absolute inset-0 w-full h-full object-cover object-top"
					src="https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=600"
					width="400"
					height="500"
					alt="hero background image"
				/>
				<div
					aria-hidden="true"
					className="absolute inset-0 w-full h-full bg-purple-900 bg-opacity-30 backdrop-blur-sm"
				></div>
				<div className="relative container m-auto px-6 md:px-12 lg:px-6">
					<div className="mb-12 pt-40 space-y-16 md:mb-20 md:pt-56 lg:w-8/12 lg:mx-auto">
						<h1 className="text-white text-center text-3xl font-bold sm:text-4xl md:text-5xl">
							Don not look again for your next freelance projects, you got them.
						</h1>

						<form action="" className="w-full">
							<div className="relative flex p-1 rounded-xl bg-white shadow-2xl md:p-2">
								<div
									id="catJobBox"
									className="hidden text-gray-600 relative md:flex justify-between items-center min-w-max select-none"
								>
									<input
										type="checkbox"
										name=""
										id="toggleJobLstCat"
										className="peer hidden outline-none"
									/>
									<input
										type="text"
										name=""
										id="catJobName"
										value="Design"
										className="pl-3 w-full bg-white text-base font-medium cursor-pointer"
										readOnly
									/>
									<label
										htmlFor="toggleJobLstCat"
										className="absolute top-0 left-0 w-full h-full"
									></label>
									<span className="min-w-max">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-5 w-5"
											viewBox="0 0 20 20"
											fill="currentColor"
										>
											<path
												fillRule="evenodd"
												d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
												clipRule="evenodd"
											/>
										</svg>
									</span>
									<div
										id="catJobLst"
										className="absolute transition-all duration-500 ease-in-out translate-y-10 opacity-0 invisible peer-checked:opacity-100 peer-checked:visible peer-checked:translate-y-1 top-full left-0 w-full bg-white bg-opacity-80 rounded-lg py-2"
									>
										<ul className="flex flex-col w-full">
											<li className="cursor-default transition hover:bg-gray-100 hover:bg-opacity-80 flex px-5 py-2">
												Design
											</li>
											<li className="cursor-default transition hover:bg-gray-100 hover:bg-opacity-80 flex px-5 py-2">
												Development
											</li>
											<li className="cursor-default transition hover:bg-gray-100 hover:bg-opacity-80 flex px-5 py-2">
												Marketing
											</li>
										</ul>
									</div>
								</div>
								<input
									placeholder="Your favorite position"
									className="w-full p-4 outline-none text-gray-600"
									type="text"
								/>
								<button
									type="button"
									title="Start buying"
									className="ml-auto py-3 px-6 rounded-lg text-center transition bg-gradient-to-br from-pink-500 to-purple-500 hover:to-purple-600 active:from-pink-700 focus:from-pink-600 md:px-12"
								>
									<span className="hidden text-white font-semibold md:block">
										Search
									</span>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="w-5 mx-auto text-white md:hidden"
										fill="currentColor"
										viewBox="0 0 16 16"
									>
										<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
									</svg>
								</button>
							</div>
						</form>
					</div>

					<div className="pb-16">
						<div className="md:px-12">
							<span className="block text-center font-medium text-pink-50">
								Trusted by your favorite giants
							</span>
							<div className="mt-8 -mx-6 px-6 overflow-x-auto md:overflow-x-hidden">
								<div className="w-max flex justify-center flex-wrap items-center gap-4 md:w-auto md:gap-6 lg:gap-8">
									<div className="flex items-center">
										<AiFillAmazonCircle className="w-20 h-20"></AiFillAmazonCircle>
									</div>
									<div className="flex items-center">
										<BsWindows className="w-20 h-20"></BsWindows>
									</div>
									<div className="flex items-center">
										<BsApple className="w-20 h-20"></BsApple>
									</div>
									<div className="flex items-center">
										<SiAmazonaws className="w-20 h-20" />
									</div>
									<div className="flex items-center">
										<BiLogoMicrosoft className="w-20 h-20"></BiLogoMicrosoft>
									</div>
									<div className="flex items-center">
										<FaGooglePlus className="w-20 h-20"></FaGooglePlus>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NavMenu;
