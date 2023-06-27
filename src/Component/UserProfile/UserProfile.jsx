import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FiChevronUp, FiSettings } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";

const UserProfile = () => {
	const [dropdownOpen, setDropdownOpen] = useState(false);

	const trigger = useRef(null);
	const dropdown = useRef(null);

	// close on click outside
	useEffect(() => {
		const clickHandler = ({ target }) => {
			if (!dropdown.current) return;
			if (
				!dropdownOpen ||
				dropdown.current.contains(target) ||
				trigger.current.contains(target)
			)
				return;
			setDropdownOpen(false);
		};
		document.addEventListener("click", clickHandler);
		return () => document.removeEventListener("click", clickHandler);
	});

	// close if the esc key is pressed
	useEffect(() => {
		const keyHandler = ({ keyCode }) => {
			if (!dropdownOpen || keyCode !== 27) return;
			setDropdownOpen(false);
		};
		document.addEventListener("keydown", keyHandler);
		return () => document.removeEventListener("keydown", keyHandler);
	});

	return (
		<div className="relative">
			<Link
				ref={trigger}
				onClick={() => setDropdownOpen(!dropdownOpen)}
				className="flex items-center gap-4"
				to="#"
			>
				<span className="hidden text-right lg:block">
					<span className="block font-600 font-sans font-medium text-black dark:text-white">
						Admin Admin
					</span>
					<span className="block font-600 font-mono text-xs">Founder</span>
				</span>

				<span>
					<span className="relative flex h-3 top-3  w-3">
						<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
						<span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
					</span>
					<img
						className="h-12 w-12 rounded-full border border-purple-600"
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAMbgyyQPC6iBFWrAgLKcXuv3oebJHblmlUw&usqp=CAU"
						alt="User"
					/>
				</span>

				<FiChevronUp
					className={`hidden fill-current sm:block ${
						dropdownOpen ? "rotate-180" : ""
					}`}
					size={22}
				/>
			</Link>

			{/* <!-- Dropdown Start --> */}
			<div
				ref={dropdown}
				onFocus={() => setDropdownOpen(true)}
				onBlur={() => setDropdownOpen(false)}
				className={`absolute right-0 mt-4 flex w-62.5 flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark ${
					dropdownOpen === true ? "block" : "hidden"
				}`}
			>
				<ul className="flex flex-col gap-5 border-b border-stroke px-6 py-7.5 dark:border-strokedark">
					<li>
						<Link
							to="/profile"
							className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
						>
							<FaRegUser className="fill-current" size={22} />
							My Profile
						</Link>
					</li>
					<li>
						<Link
							to="#"
							className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
						>
							<FaRegUser className="fill-current" size={22} />
							My Contacts
						</Link>
					</li>
					<li>
						<Link
							to="/settings"
							className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
						>
							<FiSettings className="fill-current" size={22} />
							Settings
						</Link>
					</li>
				</ul>
			</div>
			{/* <!-- Dropdown End --> */}
		</div>
	);
};

export default UserProfile;
