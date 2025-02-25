import React, { useState } from "react";
import { Form } from "../Form/Form";
import TitleSection from "../Title of Section/TitleSection";
import { WorkerData } from "../../API/data/Workers";
import "../Worker-personal/WorkerPersolan.css";
import "./WorkerExperience.css";

interface WorkerExperienceProps {
	worker: string;
}

const uploadUrl = "http://localhost:3000/users/worker-card";

const WorkerExperience: React.FC<WorkerExperienceProps> = ({ worker }) => {
	// Ищем работника по имени (worker — строка)
	const validWorker = WorkerData.find((item) => item.fname === worker);

	// Состояния для загрузки файлов
	const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);
	const [uploadStatus, setUploadStatus] = useState("");

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSelectedFiles(e.target.files);
	};

	const handleUpload = async () => {
		if (!selectedFiles || !selectedFiles.length) {
			setUploadStatus("Выберите файлы для загрузки.");
			return;
		}

		const formData = new FormData();
		// Преобразуем FileList в массив с помощью spread-оператора
		[...selectedFiles].forEach((file) => formData.append("worker-card", file));

		try {
			const response = await fetch(uploadUrl, {
				method: "POST",
				body: formData,
			});
			setUploadStatus(
				response.ok
					? "Файлы успешно загружены!"
					: "Ошибка при загрузке файлов.",
			);
		} catch {
			setUploadStatus("Ошибка при загрузке файлов.");
		}
	};

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
					<h3 className="work__experience-title">Текущая работа</h3>
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
					<h3 className="prevjob-title">Предыдущая работа</h3>
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

				{/* Загрузка файлов */}
				<div className="file-upload">
					<label htmlFor="fileInput" className="file-label">
						+
					</label>
					<input
						type="file"
						id="fileInput"
						className="file-input"
						multiple
						onChange={handleFileChange}
					/>
					<button onClick={handleUpload} className="upload-button">
						Загрузить файлы
					</button>
					{uploadStatus && <p>{uploadStatus}</p>}
				</div>
			</div>
		</div>
	);
};

export default WorkerExperience;
