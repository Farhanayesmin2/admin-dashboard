import { useEffect, useRef } from "react";
import ApexCharts from "apexcharts";
import LineWithData from "../LineWithData/LineWithData";

const GenderData = () => {
	const chartRef = useRef(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch("/public/data.json");
				const data = await response.json();

				const { totalDead, totalAlive } = getTotalDeadAndAlive(data);

				const options = {
					series: [totalDead, totalAlive],
					chart: {
						width: 380,
						type: "donut",
					},
					labels: ["Dead", "Alive"],
					dataLabels: {
						enabled: false,
					},
					responsive: [
						{
							breakpoint: 480,
							options: {
								chart: {
									width: 200,
								},
								legend: {
									show: false,
								},
							},
						},
					],
					legend: {
						position: "right",
						offsetY: 0,
						height: 230,
					},
				};

				const chart = new ApexCharts(chartRef.current, options);
				chart.render();

				return () => {
					chart.destroy();
				};
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchData();
	}, []);

	const getTotalDeadAndAlive = (data) => {
		let totalDead = 0;
		let totalAlive = 0;

		data.forEach((item) => {
			if (item.Survived === 0) {
				totalDead++;
			} else if (item.Survived === 1) {
				totalAlive++;
			}
		});

		return { totalDead, totalAlive };
	};

	return (
		<div className="border-2 border-red-500 w-full">
			<h1 className="text-start pl-10 text-xl font-sans text-gray-600 font-semibold">
				Passenger Survive:
			</h1>
			<div ref={chartRef}></div>
			<LineWithData></LineWithData>
		</div>
	);
};

export default GenderData;

// import { useEffect } from "react";
// import ApexCharts from "apexcharts";

// const GenderData = () => {
// 	useEffect(() => {
// 		const options = {
// 			series: [44, 55, 13, 33], // Replace with your data series
// 			chart: {
// 				width: 380,
// 				type: "donut",
// 			},
// 			dataLabels: {
// 				enabled: false,
// 			},
// 			responsive: [
// 				{
// 					breakpoint: 480,
// 					options: {
// 						chart: {
// 							width: 200,
// 						},
// 						legend: {
// 							show: false,
// 						},
// 					},
// 				},
// 			],
// 			legend: {
// 				position: "right",
// 				offsetY: 0,
// 				height: 230,
// 			},
// 		};

// 		const chart = new ApexCharts(document.getElementById("chart"), options);
// 		chart.render();

// 		// Clean up
// 		return () => {
// 			chart.destroy();
// 		};
// 	}, []);

// 	const appendData = () => {
// 		const arr = chart.w.globals.series.slice();
// 		arr.push(Math.floor(Math.random() * (100 - 1 + 1)) + 1);
// 		return arr;
// 	};

// 	const removeData = () => {
// 		const arr = chart.w.globals.series.slice();
// 		arr.pop();
// 		return arr;
// 	};

// 	const randomize = () => {
// 		return chart.w.globals.series.map(() => {
// 			return Math.floor(Math.random() * (100 - 1 + 1)) + 1;
// 		});
// 	};

// 	const reset = () => {
// 		return options.series;
// 	};

// 	return (
// 		<div>
// 			<div id="chart"></div>
// 			<button onClick={() => chart.updateSeries(randomize())}>Randomize</button>
// 			<button onClick={() => chart.updateSeries(appendData())}>Add</button>
// 			<button onClick={() => chart.updateSeries(removeData())}>Remove</button>
// 			<button onClick={() => chart.updateSeries(reset())}>Reset</button>
// 		</div>
// 	);
// };

// export default GenderData;
