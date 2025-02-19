import notFound from "../../../assets/notfound.png";

export interface SubmodulesScheme {
	id: number;
	title: string;
	image?: string | File | undefined;
	link: string;
}
export const SubModulesList: SubmodulesScheme[] = [
	{
		id: 1,
		title: "Констурктор документов",
		image: notFound,
		link: "/hr/creatDoc",
	},

	{
		id: 2,
		title: "Кадровое делопроизводство",
		image: notFound,
		link: "/hr/managment",
	},

	{
		id: 3,
		title: "Личная карточка сотрудника",
		image: notFound,
		link: "/hr/workerCard",
	},

	{
		id: 4,
		title: "Учет рабочего времени",
		image: notFound,
		link: "/hr/working-hours",
	},

	{
		id: 5,
		title: "Кадровая отчетность",
		image: notFound,
		link: "/hr/report",
	},
];
