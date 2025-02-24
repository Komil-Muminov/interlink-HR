import { Form } from "../Form/Form";
import TitleSection from "../Title of Section/TitleSection";
import { useConfirm } from "../../API/hooks/useConfirm";
import { WorkerData } from "../../API/data/Workers";
import "../Worker-personal/WorkerPersolan.css";
import "./WorkerExperience.css";

const WorkerExprerience: React.FC<{ worker: string }> = ({ worker }) => {
	const validWorker = WorkerData.find((item) => item.fname === worker.name);
	return (
		<div className="worker-content worker__experience">
			<TitleSection title="Профессиональная информация" />
			<h2 className="worker__education-title">Образование</h2>
			<Form
				inputs={[
					{
						name: "educationLevel",
						value: validWorker?.educationLevel,
						label: "Уровень образование",
						disabled: true,
						classname: "workerPersonal-inp",
					},

					{
						name: "educationSpecialization",
						value: validWorker?.specialization,
						classname: "workerPersonal-inp",
						disabled: true,
						label: "Специальность",
					},

					{
						name: "educationUniversity",
						value: validWorker?.university,
						classname: "workerPersonal-inp",
						disabled: true,
						label: "Учебное заведение",
					},

					{
						name: "educationEndingYear",
						value: validWorker?.eductionEndingYear,
						label: "Год окончание",
						disabled: true,
						classname: "workerPersonal-inp",
					},
				]}
				classname="workerPersonal-form"
			/>

			<div className="workerExperience__card-content">
				<div className="workerExperience-card">
					<h3 className="work__experience-title">Опыт работы</h3>
					<Form
						inputs={[
							{
								name: "currJobStatus",
								value: validWorker?.currJobStatus,
								classname: "workerPersonal-inp",
								disabled: true,
								label: "Статус работы",
							},

							{
								name: "currJob",
								value: validWorker?.currJob,
								classname: "workerPersonal-inp",
								disabled: true,
								label: "Место работы",
							},

							{
								name: "currJobPosition",
								classname: "workerPersonal-inp",
								value: validWorker?.currJobPosition,
								disabled: true,
								label: "Должность",
							},

							{
								name: "workStatus",
								value: validWorker?.currJobPeriod,
								disabled: true,
								classname: "workerPersonal-inp",
								label: "Период",
							},
						]}
						classname="workerPersonal-form workerExperience-form"
					/>
				</div>

				<div className="workerExperience-card">
					<h3 className="prevjob-title">PreJob</h3>
					<Form
						inputs={[
							{
								name: "PrevJobStatus",
								value: validWorker?.prevJobStatus,
								disabled: true,
								classname: "workerPersonal-inp",
								label: "Статус работы",
							},
							{
								name: "prevJob",
								value: validWorker?.prevJob,
								classname: "workerPersonal-inp",
								disabled: true,
								label: "Место работы",
							},
							{
								name: "prevJobPosition",
								value: validWorker?.prevJobPositon,
								disabled: true,
								classname: "workerPersonal-inp",
								label: "Должность",
							},
							{
								name: "prevJobPeriod",
								value: validWorker?.prevJobPeriod,
								label: "Период",
								classname: "workerPersonal-inp",
								disabled: true,
							},
						]}
						classname="workerPersonal-form workerExperience-form"
					/>
				</div>
				<div className="work-eperience-file">
					<label htmlFor="fileInput" className="file-label">
						+
						<input type="file" id="fileInput" className="file-input" />
					</label>
				</div>
			</div>
		</div>
	);
};
export default WorkerExprerience;
