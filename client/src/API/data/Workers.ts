export interface IWorker {
	id: number;
	fname: string;
	bDate: string;
	tel: string;
	experience: string;
	fExperience: string;
}

export const Worker: IWorker[] = [
	{
		id: 1,
		fname: "Шарипов Амир",
		tel: "+9919999991382",
		bDate: "12.12.1999",
		experience: "3 года, 2 месяца",
		fExperience: "3 года, 2 месяца",
	},
	{
		id: 2,
		fname: "Табаров Комил",
		tel: "+9919999991306",
		bDate: "12.12.1997",
		experience: "3 года, 2 месяца",
		fExperience: "3 года, 2 месяца",
	},
];
