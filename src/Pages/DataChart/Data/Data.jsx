import GenderData from "../../Dashboard/GenderData/GenderData";
import LineWithData from "../../Dashboard/LineWithData/LineWithData";
import ProductCard from "../../Dashboard/ProductCard/ProductCard";

const Data = () => {
	return (
		<>
			<ProductCard></ProductCard>
			<div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 gap-4">
				<div>
					<GenderData></GenderData>
				</div>
				<div>
					<LineWithData></LineWithData>
				</div>
			</div>
		</>
	);
};

export default Data;
