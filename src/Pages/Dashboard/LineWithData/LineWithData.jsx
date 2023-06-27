import React from "react";
import ApexCharts from "apexcharts";

const LineWithData = () => {
	const [passengerData, setPassengerData] = React.useState([]);

	React.useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch("/data.json");
				const data = await response.json();
				setPassengerData(data);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchData();
	}, []);

	React.useEffect(() => {
		if (passengerData.length === 0) return;

		const categories = passengerData.map((entry) => entry.PassengerId);
		const seriesData = [
			{
				name: "Dead",
				data: passengerData.map((entry) => (entry.Survived === 0 ? 1 : null)),
			},
			{
				name: "Alive",
				data: passengerData.map((entry) => (entry.Survived === 1 ? 1 : null)),
			},
		];

		const options = {
			series: seriesData,
			chart: {
				id: "area-datetime",
				type: "area",
				height: 350,
				zoom: {
					autoScaleYaxis: true,
				},
			},
			annotations: {
				yaxis: [
					{
						y: 30,
						borderColor: "#999",
						label: {
							show: true,
							text: "Support",
							style: {
								color: "#fff",
								background: "#00E396",
							},
						},
					},
				],
				xaxis: [
					{
						x: new Date("14 Nov 2012").getTime(),
						borderColor: "#999",
						yAxisIndex: 0,
						label: {
							show: true,
							text: "Rally",
							style: {
								color: "#fff",
								background: "#775DD0",
							},
						},
					},
				],
			},
			dataLabels: {
				enabled: false,
			},
			markers: {
				size: 0,
				style: "hollow",
			},
			xaxis: {
				type: "datetime",
				min: new Date("01 Mar 2012").getTime(),
				tickAmount: 6,
			},
			tooltip: {
				x: {
					format: "dd MMM yyyy",
				},
			},
			fill: {
				type: "gradient",
				gradient: {
					shadeIntensity: 1,
					opacityFrom: 0.7,
					opacityTo: 0.9,
					stops: [0, 100],
				},
			},
		};

		const chart = new ApexCharts(document.querySelector("#chart"), options);
		chart.render();

		const resetCssClasses = function (activeEl) {
			const els = document.querySelectorAll("button");
			Array.prototype.forEach.call(els, function (el) {
				el.classList.remove("active");
			});

			activeEl.target.classList.add("active");
		};

		document
			.querySelector("#one_month")
			.addEventListener("click", function (e) {
				resetCssClasses(e);

				chart.zoomX(
					new Date("28 Jan 2013").getTime(),
					new Date("27 Feb 2013").getTime()
				);
			});

		document
			.querySelector("#six_months")
			.addEventListener("click", function (e) {
				resetCssClasses(e);

				chart.zoomX(
					new Date("27 Sep 2012").getTime(),
					new Date("27 Feb 2013").getTime()
				);
			});

		document.querySelector("#one_year").addEventListener("click", function (e) {
			resetCssClasses(e);

			chart.zoomX(
				new Date("27 Feb 2012").getTime(),
				new Date("27 Feb 2013").getTime()
			);
		});

		document.querySelector("#ytd").addEventListener("click", function (e) {
			resetCssClasses(e);

			chart.zoomX(
				new Date("01 Jan 2013").getTime(),
				new Date("27 Feb 2013").getTime()
			);
		});
	}, [passengerData]);

	return (
		<div id="chart">
			<div id="chart-timeline"></div>

			<button id="one_month">1 Month</button>
			<button id="six_months">6 Months</button>
			<button id="one_year">1 Year</button>
			<button id="ytd">YTD</button>
			<button id="all">All</button>
		</div>
	);
};

export default LineWithData;
