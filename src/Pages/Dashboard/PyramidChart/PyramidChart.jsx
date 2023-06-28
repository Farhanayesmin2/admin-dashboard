import { useEffect, useRef } from "react";
import ApexCharts from "apexcharts";

const PyramidChart = () => {
	const chartRef = useRef(null);

	useEffect(() => {
		const options = {
			series: [
				{
					name: "",
					data: [200, 330, 548, 740, 880, 990, 1100, 1380],
				},
			],
			chart: {
				type: "bar",
				height: 350,
			},
			plotOptions: {
				bar: {
					borderRadius: 0,
					horizontal: true,
					distributed: true,
					barHeight: "80%",
					isFunnel: true,
				},
			},
			colors: [
				"#F44F5E",
				"#E55A89",
				"#D863B1",
				"#CA6CD8",
				"#B57BED",
				"#8D95EB",
				"#62ACEA",
				"#4BC3E6",
			],
			dataLabels: {
				enabled: true,
				formatter: function (val, opt) {
					return opt.w.globals.labels[opt.dataPointIndex];
				},
				dropShadow: {
					enabled: true,
				},
			},
			title: {
				text: "Passenger Information",
				align: "middle",
			},
			xaxis: {
				categories: [
					"Total Passenger",
					"Male",
					"Female",
					"18-30 Age",
					"30-60 Age",
					"First Class Passenger",
					"Second Class Passenger",
					"Third Class Passenger",
				],
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
				height: 250,
			},
		};

		const chart = new ApexCharts(chartRef.current, options);
		chart.render();

		return () => {
			chart.destroy();
		};
	}, []);

	return (
		<>
			<h1 className="text-center pb-5 pt-10  text-xl font-sans text-gray-600 font-semibold">
				Total Number of Passengers:
			</h1>
			<div
				className="py-2 shadow-lg shadow-purple-400 border-2 border-t-purple-400"
				ref={chartRef}
			></div>
		</>
	);
};

export default PyramidChart;
