import { useEffect, useState } from "react";
import Chart from "react-apexcharts";

const LineWithData = () => {
	const [series, setSeries] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		// Initialize count variables
		let maleCount = 0;
		let femaleCount = 0;
		let firstClassCount = 0;
		let secondClassCount = 0;
		let thirdClassCount = 0;
		let age18to30Count = 0;
		let age30to60Count = 0;

		// Fetch the data from the JSON file
		const fetchData = async () => {
			try {
				const response = await fetch("/allinfo.json");
				const data = await response.json();

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

				setLoading(false);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchData();
	}, []);

	if (loading) {
		return <div>Loading...</div>;
	}

	const options = {
		chart: {
			width: "100%",
			type: "polarArea",
		},
		series: series,
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
		colors: [
			"#22d3ee",
			"#fb7185",
			"#c026d3",
			"#FEB019",
			"#775DD0",
			"#F86624",
			"#3D3D3D",
		], // Set your custom colors
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

	return (
		<>
			<h1 className="text-center py-2  text-xl font-sans text-gray-600 font-semibold">
				Passenger Information:
			</h1>
			<div className="shadow-lg shadow-sky-400 border-2 border-t-sky-500">
				<Chart
					options={options}
					series={series}
					type="polarArea"
					height={350}
				/>
			</div>
		</>
	);
};

export default LineWithData;
