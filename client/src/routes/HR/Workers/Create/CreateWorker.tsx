import { Worker, WorkerData } from "../../../../API/data/Workers";
import { Form } from "../../../../UI/Form/Form";
import "./CreateWorker.css";
import { useEffect, useState } from "react";
import "./CreateWorker.css";
import WorkerPersonal from "../../../../UI/Worker-personal/WorkerPersonal";
import TitleSection from "../../../../UI/Title of Section/TitleSection";

const CreateWorker: React.FC = () => {
	const [worker, setWorker] = useState<{ workerName: string }>();
	const onsubmit = (data: { [key: string]: string | undefined }) => {
		setWorker(data.name);
		console.log(worker.name);
	};

	// Если нужно на сервер сохранить данные через useMutation
	return (
		<div className="creatWorker___contnet">
			<TitleSection title="Данные пользователя" />
			<Form
				classname="creatWorker__form"
				inputs={[
					{
						name: "name",
						type: "select",
						classname: "createWorker-inp",
						placeholder: "Сотрудинки",
						options: WorkerData.map((item) => item.fname),
					},
				]}
				submitText="Получить данные"
				sbtClassName="createWorker-sbt btn-mui"
				onSubmit={onsubmit}
			/>
			{/* Доработать с userCard или по другому */}
			<div className="creatWorker-send-props">
				{worker && <WorkerPersonal worker={worker} />}
			</div>
		</div>
	);
};

export default CreateWorker;
