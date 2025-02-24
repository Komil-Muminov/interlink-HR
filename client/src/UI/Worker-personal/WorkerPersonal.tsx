import { Form } from "../Form/Form";
import TitleSection from "../Title of Section/TitleSection";
import { useConfirm } from "../../API/hooks/useConfirm";
import WorkerExprerience from "../Worker-exprerience/WorkerExperience";
import { WorkerData, IWorker } from "../../API/data/Workers";
import { useState } from "react";

const WorkerPersonal: React.FC<{ worker: string }> = ({ worker }) => {
	const { handleToggle, toggle } = useConfirm();
	const findWorker = WorkerData.find((item) => item.fname === worker);
	console.log(findWorker);
	return (
		<div className="worker-content worker__personal-content">
			<TitleSection title="Личная информация" />
			<Form
				inputs={[
					{
						name: "education-level",
						value: worker,
						label: "ФИО",
						disabled: true,
					},

					{
						name: "education-level",
						value: findWorker?.bDate,
						label: "Дата рождения",
						disabled: true,
					},

					{
						name: "education-level",
						value: findWorker?.email,
						label: "Электронная почта",
						disabled: true,
					},

					{
						name: "education-level",
						value: findWorker?.citizenship,
						label: "Гражданство",
						disabled: true,
					},

					{
						name: "education-level",
						value: findWorker?.status,
						label: "Статус",
						disabled: true,
					},
					{
						name: "position",
						value: findWorker?.position,
						disabled: true,
						label: "Должность",
					},
					{
						name: "org",
						value: findWorker?.org,
						disabled: true,
						label: "Организация",
					},
				]}
			/>
			<button onClick={handleToggle}>confirm</button>
		</div>
	);
};
export default WorkerPersonal;
