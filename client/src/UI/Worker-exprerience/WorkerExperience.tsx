import React, { useEffect, useState } from "react";
import { Form } from "../Form/Form";
import TitleSection from "../Title of Section/TitleSection";
import { WorkerData } from "../../API/data/Workers";
import { useFile } from "../../API/hooks/useFile";
import "../Worker-personal/WorkerPersolan.css";
import "./WorkerExperience.css";
import { Button } from "@mui/material";
import PanelControl from "../Panel Control/PanelControl";

interface WorkerExperienceProps {
	worker: string;
	approve: boolean;
}

const WorkerExperience: React.FC<WorkerExperienceProps> = ({
	worker,
	approve,
}) => {
	const validWorker = WorkerData.find((item) => item.fname === worker);

	// Состояния для загрузки файлов
	const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
	const [uploadStatus, setUploadStatus] = useState("");

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files) {
			const newArr = [...e.target.files].map((item) => ({
				...item,
				id: Date.now() + Math.random(),
			}));
			setSelectedFiles((prev) => [...prev, ...newArr]);
		}
	};

	const { sendFile } = useFile();

	const handleUpload = async () => {
		if (selectedFiles.length === 0) {
			setUploadStatus("Выберите файлы для загрузки.");
			return;
		}
		const formData = new FormData();
		selectedFiles.forEach((item) => formData.append("worker-card", item));

		// Выводим FormData в консоль для проверки
		console.log(...formData);

		try {
			await sendFile(formData);
			setUploadStatus("Файл успешно отправлен");
		} catch {
			setUploadStatus("Ошибка при загрузке файлов.");
			console.log("km");
		}
	};

	const handleDltFile = (fileId: number) => {
		setSelectedFiles((item) => item.filter((item) => item.id !== fileId));
	};

	useEffect(() => {
		if (approve) {
			handleUpload();
			console.log(`km2`);
		} else {
			console.log(approve);
		}
	}, [approve]);
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
				<div className="file-upload-content">
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
					{uploadStatus && <p>{uploadStatus}</p>}
					<div className="file-upload-list-content">
						{selectedFiles?.map((item) => (
							<div className="file-upload-list" key={item.id}>
								<span className="file-upload-item">
									{item.id}
									<Button onClick={() => handleDltFile(item.id)}>
										Удалить
									</Button>
								</span>
							</div>
						))}
						<Button onClick={handleUpload}>Отправит2 ь</Button>
					</div>
					{/* Квалификация */}
					<TitleSection title="Квалификация" />
					<div className="file-upload-list-content ">
						<label htmlFor="fileInput" className="file-label personaly-files">
							+
						</label>
						<input
							type="file"
							id="fileInput"
							className="file-input"
							multiple
							// onChange={handleFileChange}
						/>
						{/* {uploadStatus && <p>{uploadStatus}</p>} */}
						{/* {selectedFiles?.map((item) => (
							<div className="file-upload-list" key={item.id}>
								<span className="file-upload-item">
									{item.id}
									<Button onClick={() => handleDltFile(item.id)}>
										Удалить
									</Button>
								</span>
							</div>
						))} */}
					</div>
					{/* Личные документы */}
					<TitleSection title="Личные документы " />
					<div className="file-upload-list-content">
						<label htmlFor="fileInput" className="file-label personaly-files">
							+
						</label>
						<input
							type="file"
							id="fileInput"
							className="file-input"
							multiple
							// onChange={handleFileChange}
						/>
						{/* {selectedFiles?.map((item) => (
							<div className="file-upload-list" key={item.id}>
								<span className="file-upload-item">
									{item.id}
									<Button onClick={() => handleDltFile(item.id)}>
										Удалить
									</Button>
								</span>
							</div>
						))} */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default WorkerExperience;
