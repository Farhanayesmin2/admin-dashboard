import LineWithData from "../Dashboard/LineWithData/LineWithData";
// import PyramidChart from "../Dashboard/PyramidChart/PyramidChart";
import RadialBarChart from "../Dashboard/RadialBarChart/RadialBarChart";

const Charts = () => {
	return (
		<div>
			<div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 gap-4">
				<div>
					<RadialBarChart></RadialBarChart>
				</div>
				<div>
					<LineWithData></LineWithData>
				</div>
			</div>
		</div>
	);
};

export default Charts;
