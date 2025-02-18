import React from "react";
import NavigationOfModules from "../../UI/Navigation of Modules/NavigationOfModules";
import CardSubmodule from "../../UI/Card of Submodule/CardSubmodule";
import submoduleImage from "../../assets/module-1.png";
import notFound from "../../assets/notfound.png";
import "./Hr.css";

export interface ModulesListScheme {
	id: number;
	title: string;
	image: string;
	link: string;
}

export interface SubmoduleProps {
	id: number;
	title: string;
	image: string;
	link: string;
}

// Список подумодулей HR
// const subModulesList: SubmoduleProps[] = [
// 	{
// 		id: 1,
// 		title: "Констурктор документов",
// 		image: notFound,
// 		link: "/hr/creatDoc",
// 	},

// 	{
// 		id: 2,
// 		title: "Кадровое делопроизводство",
// 		image: notFound,
// 		link: "/hr/managment",
// 	},

// 	{
// 		id: 3,
// 		title: "Личная карточка сотрудника",
// 		image: notFound,
// 		link: "/hr/workerCard",
// 	},

// 	{
// 		id: 4,
// 		title: "Учет рабочего времени",
// 		image: notFound,
// 		link: "/hr/working-hours",
// 	},

// 	{
// 		id: 5,
// 		title: "Кадровая отчетность",
// 		image: notFound,
// 		link: "/hr/hrreport",
// 	},
// ];
const Hr: React.FC<ModulesListScheme> = () => {
	const modulesList: ModulesListScheme[] = [
		{
			id: 1,
			title: "Заявки",
			image: notFound,
			link: "/primary-docs/request",
		},
		{
			id: 2,
			title: "СРМ",
			image: notFound,
			link: "/primary-docs/crm",
		},
		{
			id: 3,
			title: "Первичые документы",
			image: submoduleImage,
			link: "/primary-docs/contracts",
		},
		{
			id: 4,
			title: "Кадр",
			image: notFound,
			link: "/hr/contracts",
		},
		{
			id: 5,
			title: "Хаб",
			image: notFound,
			link: "/primary-docs/hub",
		},
		{
			id: 6,
			title: "Корреспонденция",
			image: notFound,
			link: "/primary-docs/correspondence",
		},
		{
			id: 7,
			title: "Государственные услуги",
			image: notFound,
			link: "/primary-docs/government-services",
		},
	];

	return (
		<main>
			<NavigationOfModules list={modulesList} />
			<div className="wrapper-submodules-card">
				{modulesList.map((e) => (
					<CardSubmodule key={e.id} item={e} />
				))}
			</div>
		</main>
	);
};

export default Hr;
