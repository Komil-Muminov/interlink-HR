import { Worker } from "../../../API/data/Workers";
import { Form } from "../../../UI/Form/Form";
import { useMutation } from "@tanstack/react-query";
import "./CreateWorker.css";
import { queryClient } from "../../../API/hooks/queryClient";
import { useEffect, useState } from "react";
import UserCard from "../../../UI/User Card/UserCard";
import { Input } from "@mui/material";
import './CreateWorker.css'
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

	// Если нужно на сервер сохранить данные
	// const createWorkerMutation = useMutation(
	// 	{
	// 		mutationFn: () => {
	// 			return fetch(`http://localhost:3000/createUser`, {
	// 				method: "POST",
	// 				headers: {
	// 					"Content-Type": "application/json",
	// 				},
	// 				body: JSON.stringify(worker),
	// 			});
	// 		},
	// 	},
	// 	queryClient,
	// );
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
						name: "inn",
						classname: "createWorker-inp",
						placeholder: "Введите ИНН нового сотрудника",
					},
					{
						name: "position",
						placeholder: "Введите позицию сотрудника",
						classname: "createWorker-inp",
					},
				]}
				submitText="Добавить"
				sbtClassName="btn-mui"
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
