import { FaMoon, FaSun } from "react-icons/fa";
import useColorMode from "../../Hooks/useColorMode";

const DarkMode = () => {
	const [colorMode, setColorMode] = useColorMode();

	const handleToggle = () => {
		const newColorMode = colorMode === "light" ? "dark" : "light";
		setColorMode(newColorMode);
	};

	return (
		<div>
			<li className="pr-5">
				<label
					className={`relative m-0 block h-7.5 w-14 rounded-full ${
						colorMode === "dark" ? "bg-red-400" : "bg-gray-400"
					}`}
				>
					<input
						type="checkbox"
						onChange={handleToggle}
						checked={colorMode === "dark"}
						className="absolute top-0 z-50 m-0 h-full w-full cursor-pointer opacity-0"
					/>
					<span className="shadow-lg shadow-purple-400 bg-white absolute top-1/2 left-3 flex h-8 w-8 -translate-y-1/2 translate-x-0 items-center justify-center rounded-full shadow-switcher duration-75 ease-linear">
						{colorMode === "dark" ? <FaMoon /> : <FaSun />}
					</span>
				</label>
			</li>
		</div>
	);
};

export default DarkMode;
