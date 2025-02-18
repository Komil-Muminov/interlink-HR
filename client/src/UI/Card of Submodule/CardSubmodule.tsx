import { ModulesListScheme } from "../../routes/HR/Hr";
import { Link } from "react-router";
import "./CardSubmodule.css";

interface TProps {
	item: ModulesListScheme;
}

const CardSubmodule = ({ item }: TProps) => {
	return (
		<Link to={`${item.link}`} className="card-submodule">
			<div className="image">
				<img src={item?.image} alt="img" />
			</div>
			<div className="title">
				<p>{item?.title}</p>
			</div>
		</Link>
	);
};

export default CardSubmodule;
