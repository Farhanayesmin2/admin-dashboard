import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { useSpinner } from "../../../Hooks/useSpinner";

const RadialBarChart = () => {
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState([]);
	const { Spinner } = useSpinner();
	const [series, setSeries] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch("/allinfo.json");
				const jsonData = await response.json();
				setData(jsonData);

				const totalPassenger = jsonData.length;
				let maleCount = 0;
				let femaleCount = 0;
				let totalTicketCount = 0;

				for (let i = 0; i < jsonData.length; i++) {
					if (jsonData[i].Sex === "male") {
						maleCount++;
					} else if (jsonData[i].Sex === "female") {
						femaleCount++;
					}
					totalTicketCount++;
				}

				const newSeries = [
					totalPassenger,
					maleCount,
					femaleCount,
					totalTicketCount,
				];

				setSeries(newSeries);

				setLoading(false);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchData();
	}, []);

	if (loading) {
		return Spinner();
	}

	const optionsRadial = {
		series: series,
		chart: {
			height: 350,
			type: "radialBar",
		},
		plotOptions: {
			radialBar: {
				dataLabels: {
					name: {
						fontSize: "22px",
					},
					value: {
						fontSize: "16px",
					},
					total: {
						show: true,
						label: "Total",
						formatter: function (w) {
							return series[0];
						},
					},
				},
			},
		},
		labels: ["Total Passenger", "Total Male", "Total Female", "Total Ticket"],
	};

	return (
		<>
			<h1 className="text-center pb-5 pt-10 text-xl font-sans text-gray-600 font-semibold">
				Total Number of Passengers:
			</h1>
			<div className="py-5 shadow-lg shadow-rose-300 border-2 border-t-rose-300">
				<Chart
					options={optionsRadial}
					series={series}
					type="radialBar"
					height={350}
				/>
			</div>
		</>
	);
};

export default RadialBarChart;
