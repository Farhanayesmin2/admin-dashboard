import { useEffect, useRef, useState } from "react";
import ApexCharts from "apexcharts";
import data from "./../../../../public/allinfo.json"; // Import the JSON data

const RadialBarChart = () => {
	const chartRef = useRef(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				// Calculate the total number of passengers
				const totalPassenger = data.length;

				// Initialize count variables
				let maleCount = 0;
				let femaleCount = 0;
				let totalTicketCount = 0;

				// Iterate through the JSON data and calculate counts
				for (let i = 0; i < data.length; i++) {
					// Count sex
					if (data[i].Sex === "male") {
						maleCount++;
					} else if (data[i].Sex === "female") {
						femaleCount++;
					}

					// Count total tickets
					totalTicketCount++;
				}

				// Update the series data with the counts
				const series = [
					totalPassenger,
					maleCount,
					femaleCount,
					totalTicketCount,
				];

				const options = {
					series,
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
										return totalPassenger;
									},
								},
							},
						},
					},
					labels: [
						"Total Passenger",
						"Total Male",
						"Total Female",
						"Total Ticket",
					],
				};

				const chart = new ApexCharts(chartRef.current, options);
				chart.render();
				setLoading(false);

				return () => {
					chart.destroy();
				};
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchData();
	}, []);

	if (loading) {
		return <div>Loading...</div>;
	}

	return (
		<>
			<h1 className="text-center pb-5 pt-10  text-xl font-sans text-gray-600 font-semibold">
				Total Number of Passengers:
			</h1>
			<div
				className="py-5 shadow-lg shadow-rose-300 border-2 border-t-rose-300"
				ref={chartRef}
			></div>
		</>
	);
};

export default RadialBarChart;
