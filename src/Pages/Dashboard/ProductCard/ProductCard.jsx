import { SlPeople } from "react-icons/sl";
import { BsHeartPulseFill } from "react-icons/bs";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { MdOutlineAirplaneTicket } from "react-icons/md";

const ProductCard = () => {
	return (
		<div className="pb-8 pt-2">
			<div className="grid grid-cols-2 gap-4 px-4 mt-8 sm:grid-cols-4 sm:px-8">
				<div className=" flex items-center bg-white border rounded-sm overflow-hidden border-r-teal-400 shadow-teal-400 shadow">
					<div className="p-4  bg-teal-400">
						<SlPeople className="text-white w-11 h-11"></SlPeople>
					</div>
					<div className="px-4 text-gray-700">
						<h3 className="text-sm tracking-wider">Total Passenger</h3>
						<p className="text-3xl">12,76%</p>
					</div>
				</div>
				<div className="flex items-center bg-white border rounded-sm overflow-hidden shadow-cyan-400 border-r-cyan-400 shadow">
					<div className="p-4 bg-cyan-400">
						<FaMoneyBillTrendUp className="text-white w-11 h-11"></FaMoneyBillTrendUp>
					</div>
					<div className="px-4 text-gray-700">
						<h3 className="text-sm tracking-wider">Total Money</h3>
						<p className="text-3xl">39.26%</p>
					</div>
				</div>
				<div className="flex items-center bg-white border rounded-sm overflow-hidden shadow-indigo-400 border-r-indigo-400 shadow">
					<div className="p-4 bg-indigo-400">
						<MdOutlineAirplaneTicket className="text-white w-11 h-11"></MdOutlineAirplaneTicket>
					</div>
					<div className="px-4 text-gray-700">
						<h3 className="text-sm tracking-wider">Total Ticket</h3>
						<p className="text-3xl">14.56%</p>
					</div>
				</div>
				<div className="flex items-center bg-white border rounded-sm overflow-hidden border-r-rose-400 shadow-rose-400 shadow">
					<div className="p-4 bg-rose-400">
						<BsHeartPulseFill className="text-white w-11 h-11"></BsHeartPulseFill>
					</div>
					<div className="px-4 text-gray-700">
						<h3 className="text-sm tracking-wider">Survived</h3>
						<p className="text-3xl">34.12%</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
