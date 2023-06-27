import { useEffect, useState } from "react";
import ApexCharts from "apexcharts";
import data from "./../../../../public/allinfo.json"; // Import the JSON data

const LineWithData = () => {
	const [series, setSeries] = useState([]);

	useEffect(() => {
		// Initialize count variables
		let maleCount = 0;
		let femaleCount = 0;
		let firstClassCount = 0;
		let secondClassCount = 0;
		let thirdClassCount = 0;
		let age18to30Count = 0;
		let age30to60Count = 0;

		// Iterate through the JSON data and calculate counts
		for (let i = 0; i < data.length; i++) {
			// Count sex
			if (data[i].Sex === "male") {
				maleCount++;
			} else if (data[i].Sex === "female") {
				femaleCount++;
			}

			// Count pclass
			if (data[i].Pclass === 1) {
				firstClassCount++;
			} else if (data[i].Pclass === 2) {
				secondClassCount++;
			} else if (data[i].Pclass === 3) {
				thirdClassCount++;
			}

			// Count age
			const age = data[i].Age;
			if (age >= 18 && age <= 30) {
				age18to30Count++;
			} else if (age > 30 && age <= 60) {
				age30to60Count++;
			}
		}

		// Create the series array
		const newSeries = [
			maleCount,
			femaleCount,
			age18to30Count,
			age30to60Count,
			firstClassCount,
			secondClassCount,
			thirdClassCount,
		];

		// Update the series state
		setSeries(newSeries);

		// Define custom colors for each data point
		const colors = [
			"#22d3ee",
			"#fb7185",
			"#c026d3",
			"#FEB019",
			"#775DD0",
			"#F86624",
			"#3D3D3D",
		];

		// ApexCharts options
		const options = {
			series: newSeries,
			chart: {
				width: "100%",

				type: "polarArea",
			},
			labels: [
				"Male",
				"Female",
				"18-30 Age",
				"30-60 Age",
				"First Class Passenger",
				"Second Class Passenger",
				"Third Class Passenger",
			],
			fill: {
				opacity: 1,
			},
			stroke: {
				width: 1,
				colors: undefined,
			},
			yaxis: {
				show: false,
			},
			legend: {
				position: "right",
				offsetY: 0,
				height: 550,
			},
			plotOptions: {
				polarArea: {
					rings: {
						strokeWidth: 0,
					},
					spokes: {
						strokeWidth: 0,
					},
				},
			},
			theme: {
				monochrome: {
					enabled: true,
					shadeTo: "light",
					shadeIntensity: 0.6,
				},
			},
			colors: colors, // Set the custom colors
			responsive: [
				{
					breakpoint: 480,
					options: {
						chart: {
							width: 200,
						},
						legend: {
							show: true,
						},
					},
				},
			],
		};

		// Render the chart
		const chart = new ApexCharts(document.querySelector("#chart"), options);
		chart.render();

		// Cleanup
		return () => {
			chart.destroy();
		};
	}, []);

	return (
		<>
			<h1 className="text-center py-2  text-xl font-sans text-gray-600 font-semibold">
				Passenger Information:
			</h1>
			<div
				id="chart"
				className="shadow-lg shadow-sky-400 border-2 border-t-sky-500"
			></div>
		</>
	);
};

export default LineWithData;
