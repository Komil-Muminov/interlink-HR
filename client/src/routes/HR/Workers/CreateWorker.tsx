import { Worker } from "../../../API/data/Workers";
import { Form } from "../../../UI/Form/Form";
import { useMutation } from "@tanstack/react-query";
import "./CreateWorker.css";
import { queryClient } from "../../../API/hooks/queryClient";
import { useEffect, useState } from "react";
import UserCard from "../../../UI/User Card/UserCard";
import { Input } from "@mui/material";
import "./CreateWorker.css";
import WorkerCard from "./WorkerCard";

const CreateWorker: React.FC = () => {
	const [worker, setWorker] = useState<
		| {
				name: string | undefined;
				inn: string | undefined;
		  }
		| undefined
	>(undefined);
	const onsubmit = (data) => {
		console.log(data.name);
		if (data) {
			setWorker(data);
			console.log(worker);
		}
	};

	useEffect(() => {
		console.log(worker);
	}, [worker]);

	// Если нужно на сервер сохранить данные через useMutation
	return (
		<div className="creatWorker___contnet">
			<Form
				classname="creatWorker__form"
				inputs={[
					{
						name: "name",
						classname: "createWorker-inp",
						placeholder: "Введите имя нового сотрудника",
					},
					{
						name: "organization",
						placeholder: "Введите организацию сотрудника",
						classname: "createWorker-inp",
					},
					{
						name: "position",
						placeholder: "Введите позицию сотрудника",
						classname: "createWorker-inp",
					},

					{
						name: "email",
						placeholder: "Введите email сотрудника",
						classname: "createWorker-inp",
					},

					{
						name: "tel",
						placeholder: "Введите номер телефон сотрудника",
						classname: "createWorker-inp",
					},

					{
						name: "status",
						placeholder: "Введите статус сотрудника",
						classname: "createWorker-inp",
						type: "select",
						options: ["Актив", "Пассив"],
					},
				]}
				submitText="Добавить"
				sbtClassName="createWorker-sbt btn-mui"
				onSubmit={onsubmit}
			/>
			{/* Доработать с userCard или по другому */}
			<div className="creatWorker-send-props">
				{worker ? <WorkerCard item={worker} /> : "Ничего нет"}
			</div>
		</div>
	);
};

export default CreateWorker;
