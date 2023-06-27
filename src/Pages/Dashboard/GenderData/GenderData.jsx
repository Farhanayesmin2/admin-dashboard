import { useEffect, useRef, useState } from "react";
import ApexCharts from "apexcharts";
import { useSpinner } from "../../../Hooks/useSpinner";

const GenderData = () => {
	const chartRef = useRef(null);
	const [loading, setLoading] = useState(true);
	const { Spinner } = useSpinner();
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch("/data.json");
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
						height: 250,
					},
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

	if (loading) {
		return Spinner();
	}

	return (
		<>
			<h1 className="text-center py-2  text-xl font-sans text-gray-600 font-semibold">
				Passenger Survive:
			</h1>
			<div
				className="py-4  shadow-lg shadow-green-400 border-2 border-t-green-500"
				ref={chartRef}
			></div>
		</>
	);
};

export default GenderData;
