import { Form } from "../Form/Form";
import TitleSection from "../Title of Section/TitleSection";
import { useConfirm } from "../../API/hooks/useConfirm";

const WorkerExprerience: React.FC<{ [key: string]: string | undefined }> = ({
	expreince,
}) => {
	const { handleToggle, toggle } = useConfirm();
	return (
		<div className="worker-content worker__experience">
			<TitleSection title="Профессиональная информация" />
			<div>Опыт работы</div>
			<Form
				label={"km"}
				inputs={[
					{ name: expreince.name },
					{
						name: "job",
						label: "Статус работы",
						type: "select",
						classname: "createWorker-inp",
						options: ["Текущая", "Министерство юстиции"],
					},
					{
						name: "job",
						label: "Место работы",
						type: "select",
						classname: "createWorker-inp",
						options: ["Текущая", "Министерство юстиции"],
					},
					{
						name: "job",
						label: "Должность",
						type: "select",
						classname: "createWorker-inp",
						options: ["Текущая", "Министерство юстиции"],
					},
					{
						name: "job",
						label: "Период с",
						type: "select",
						classname: "createWorker-inp",
						options: ["Текущая", "Министерство юстиции"],
					},
					{
						name: "job",
						label: "Период до",
						type: "select",
						classname: "createWorker-inp",
						options: ["Текущая", "Министерство юстиции"],
					},
					{ name: "worker-file", type: "file" },
				]}
			/>
			<button onClick={handleToggle}>confirm</button>
			{/* {toggle && <Worker} */}
		</div>
	);
};
export default WorkerExprerience;
