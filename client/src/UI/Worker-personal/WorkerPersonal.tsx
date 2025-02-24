import { Form } from "../Form/Form";
import TitleSection from "../Title of Section/TitleSection";
import { useConfirm } from "../../API/hooks/useConfirm";
import WorkerExprerience from "../Worker-exprerience/WorkerExperience";
import { WorkerData, IWorker } from "../../API/data/Workers";
import { useEffect, useState } from "react";
import "./WorkerPersolan.css";

const WorkerPersonal: React.FC<{ [key: string]: string | undefined }> = ({
	worker,
}) => {
	const { handleToggle, toggle } = useConfirm();
	const validWorker = WorkerData.find((item) => item.fname === worker.name);
	console.log(validWorker);
	useEffect(() => {
		console.log(validWorker);
		console.log(typeof validWorker);
	}, [worker]);
	return (
		<>
			<div className="worker-content worker__personal-content">
				<TitleSection title="Данные пользователя" />
				<Form
					inputs={[
						{
							name: "name",
							classname: "workerPersonal-inp",
							value: worker?.name,
							disabled: true,
							label: "Имя сотрудника",
						},

						{
							name: "position",
							value: validWorker?.position,
							classname: "workerPersonal-inp",
							disabled: true,
							label: "Должность",
						},

						{
							name: "org",
							value: validWorker?.org,
							classname: "workerPersonal-inp",
							disabled: true,
							label: "Организация",
						},

						{
							name: "email",
							value: validWorker?.email,
							classname: "workerPersonal-inp",
							disabled: true,
							label: "Электронная почта",
						},

						{
							name: "tel",
							value: validWorker?.tel,
							classname: "workerPersonal-inp",
							disabled: true,
							label: "Телефон",
						},

						{
							name: "status",
							value: validWorker?.currJobStatus,
							label: "Статус",
							disabled: true,
							classname: "workerPersonal-inp",
						},
					]}
					classname="workerPersonal-form"
				/>
				<TitleSection title="Личная информация" />
				<Form
					inputs={[
						{
							name: "bdate",
							value: validWorker?.bDate,
							classname: "workerPersonal-inp",
							label: "Дата рождения",
						},
						{ name: "inn", value: validWorker?.inn, label: "ИНН" },
						{
							name: "living",
							value: validWorker?.living,
							classname: "workerPersonal-inp",
							label: "Адрес проживания",
						},
						{
							name: "passportId",
							value: validWorker?.passportId,
							classname: "workerPersonal-inp",
							label: "Серия и номер паспорта",
						},
					]}
					classname="workerPersonal-form"
				/>
			</div>
			<WorkerExprerience worker={worker} />
		</>
	);
};
export default WorkerPersonal;
