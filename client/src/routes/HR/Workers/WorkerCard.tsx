import { Form } from "../../../UI/Form/Form";

const WorkerCard: React.FC<{
	item: { [key: string | undefined]: string | undefined };
}> = ({ item }) => {
	// const onsubmit = (data) => {
	// 	console.log(data);
	// };
	return (
		<>
			<Form
				inputs={[
					{ name: "name", value: item.name, disabled: true },
					{ name: "inn", value: item.inn, disabled: true },
					{ name: "position", value: item.position, disabled: true },
				]}
			/>
		</>
	);
};
export default WorkerCard;
