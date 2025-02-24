export interface IWorker {
	id: number;
	fname: string;
	bDate: string;
	tel: string;
	experience: string;
	fExperience: string;
	position: string;
	org: string;
	email: string;
	citizenship: string;
	status: string;
}

export const WorkerData: IWorker[] = [
	{
		id: 1,
		fname: "Шарипов Амир",
		tel: "+9919999991382",
		bDate: "12.12.1999",
		experience: "3 года, 2 месяца",
		fExperience: "3 года, 2 месяца",
		org: `ГУП "ЦФИТ"`,
		email: "test@gmail.com",
		position: "Специалист",
		citizenship: "Таджикистан",
		status: "Активный",
	},
	{
		id: 2,
		fname: "Табаров Комил",
		tel: "+9919999991306",
		bDate: "12.12.1997",
		citizenship: "Таджикистан",
		org: `ГУП "ЦФИТ"`,
		status: "Активный",
		experience: "3 года, 2 месяца",
		email: "test@gmail.com",
		fExperience: "3 года, 2 месяца",
		position: "Специалист",
	},
];
