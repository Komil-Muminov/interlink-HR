export interface EmploeePersonalCardDataFilterType {
  id: number;
  title: string;
  types: string[];
}

export const EmploeePersonalCardDataFilter: EmploeePersonalCardDataFilterType[] =
  [
    {
      id: 1,
      title: "Номер карточки",
      types: [],
    },
    {
      id: 2,
      title: "ФИО",
      types: [],
    },
    {
      id: 3,
      title: "Дата рождения",
      types: [],
    },
    {
      id: 4,
      title: "Контакты",
      types: [],
    },
    {
      id: 5,
      title: "Стаж в компании",
      types: [],
    },
    {
      id: 6,
      title: "Общий стаж",
      types: [],
    },
  ];
