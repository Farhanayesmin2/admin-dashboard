import { useEffect, useRef, useState } from "react";
import ApexCharts from "apexcharts";
import { useSpinner } from "../../../Hooks/useSpinner";

const RadialBarChart = () => {
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState([]);
	const { Spinner } = useSpinner();
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch("/public/allinfo.json"); // Replace "/data.json" with the actual URL or path to your JSON data
				const jsonData = await response.json();
				setData(jsonData);

				// Calculate the total number of passengers
				const totalPassenger = jsonData.length;

				// Initialize count variables
				let maleCount = 0;
				let femaleCount = 0;
				let totalTicketCount = 0;

				// Iterate through the JSON data and calculate counts
				for (let i = 0; i < jsonData.length; i++) {
					// Count sex
					if (jsonData[i].Sex === "male") {
						maleCount++;
					} else if (jsonData[i].Sex === "female") {
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

				const optionsRadial = {
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
				// Render the chart
				const chart3 = new ApexCharts(
					document.querySelector("#chart"),
					optionsRadial
				);
				chart3.render();
				// Update loading state
				setLoading(false);
				// Cleanup
				// // Render the chart
				// const radial = new ApexCharts(
				// 	document.querySelector("#chart"),
				// 	optionsRadial
				// );
				// radial.render();

				// Update loading state
				setLoading(false);

				// Cleanup
				return () => {
					chart3.destroy();
				};
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchData();
	}, []);

	if (loading) {
		return Spinner();
	}

	return (
		<>
			<h1 className="text-center pb-5 pt-10 text-xl font-sans text-gray-600 font-semibold">
				Total Number of Passengers:
			</h1>
			<div
				id="chart"
				className="py-5 shadow-lg shadow-rose-300 border-2 border-t-rose-300"
			></div>
		</>
	);
};

export default RadialBarChart;
