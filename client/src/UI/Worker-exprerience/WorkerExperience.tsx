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
	// Найти работника по имени
	const validWorker = WorkerData.find((item) => item.fname === worker);

	// Состояния для загрузки файлов
	const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
	const [uploadStatus, setUploadStatus] = useState("");

	// Обработчик изменения файлов
	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files) {
			const newArr = [...e.target.files].map((item) => ({
				...item,
				id: Date.now() + Math.random(),
			}));
			setSelectedFiles((prev) => {
				const updatedFiles = [...prev, ...newArr];
				console.log("Обновленные файлы: ", updatedFiles); // Логируем обновленные файлы
				return updatedFiles;
			});
		}
	};

	// Обработчик загрузки файлов
	const handleUpload = async () => {
		if (selectedFiles.length === 0) {
			setUploadStatus("Выберите файлы для загрузки.");
			return;
		}

		const formData = new FormData();
		// Добавление файлов в FormData
		selectedFiles.forEach((item) => {
			console.log("Добавляем файл в FormData: ", item); // Логируем каждый файл
			formData.append("worker-card", item);
		});

		try {
			const response = await fetch("http://localhost:3000/users/worker-card", {
				method: "POST",
				body: formData,
			});

			const result = await response.json();

			if (response.ok) {
				setUploadStatus("Файл успешно загружен");
			} else {
				setUploadStatus(
					`Ошибка при загрузке: ${result.message || "Неизвестная ошибка"}`,
				);
			}
		} catch (error) {
			setUploadStatus("Ошибка при загрузке файлов.");
		}
	};

	// Обработчик удаления файла
	const handleDltFile = (fileId: number) => {
		setSelectedFiles((prev) => prev.filter((item) => item.id !== fileId));
	};

	// Загружаем файлы, если approve = true
	useEffect(() => {
		if (approve) {
			handleUpload();
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
									{item.name}
									<Button onClick={() => handleDltFile(item.id)}>
										Удалить
									</Button>
								</span>
							</div>
						))}
						<Button
							onClick={handleUpload}
							disabled={selectedFiles.length === 0}
						>
							Отправить
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WorkerExperience;
