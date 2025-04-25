import React, { useEffect, useState } from "react";
import "./EmploeePersonalCard.css";
import NavigationOfModules from "../../../UI/Navigation of Modules/NavigationOfModules";
import Filter from "../../../components/Filter/Filter";
import { Link } from "react-router";
import { Button } from "@mui/material";
import Registry from "../../../components/Registry/Registry";
import { WorkingHoursDataFilter } from "../../../API/data/WorkingHoursDataFilter";
import { IDocuments } from "../../../API/services/types/Document";
import { getDocuments } from "../../../API/services/documents/getDocuments";
import { useQuery } from "@tanstack/react-query";
import { queryClient } from "../../../API/hooks/queryClient";
import { IWorkingHours } from "../../../API/services/types/WorkingHours";
import { getWorkingHours } from "../../../API/services/workingHours/getWorkingHours";
import dayjs from "dayjs";
import { getMonth } from "../../../API/hooks/getData";
import { EmploeePersonalCardDataFilter } from "../../../API/data/EmploeePersonalCardDataFilter";
import { IEmploeePersonalCard } from "../../../API/services/types/EmploeePersonalCard";
import { getEmploeePersonalCard } from "../../../API/services/emploeePersonalCard/getEmploeePersonalCard";

interface SubmodulesList {
  id: number;
  title: string;
  link: string;
}

const modulesList: SubmodulesList[] = [
  {
    id: 1,
    title: "Кадровое делопроизводство",
    link: "/modules/hr/submodules/personnel-records-management",
  },
  {
    id: 2,
    title: "Личная карточка сотрудника",
    link: "/modules/hr/submodules/employee-personal-card",
  },
  {
    id: 3,
    title: "Учет рабочего времени",
    link: "/modules/hr/submodules/working-house",
  },
];

const EmploeePersonalCard = () => {
  const headers = EmploeePersonalCardDataFilter.filter((e) => {
    return [
      "Номер карточки",
      "ФИО",
      "Дата рождения",
      "Контакты",
      "Стаж в компании",
      "Общий стаж",
    ].includes(e.title);
  }).map((e) => e.title);

  console.log(headers);

  const [emploeePersonalCard, setEmploeePersonalCard] =
    useState<IEmploeePersonalCard[]>();

  const getEmploeePersonalCardQuery = useQuery(
    {
      queryFn: () => getEmploeePersonalCard(),
      queryKey: ["emploeePersonalCard"],
    },
    queryClient
  );

  useEffect(() => {
    if (getEmploeePersonalCardQuery.status === "success") {
      setEmploeePersonalCard(getEmploeePersonalCardQuery.data);
    }
  }, [getEmploeePersonalCardQuery.data]);

  const rows = emploeePersonalCard?.map((item: IEmploeePersonalCard, index) => {
    return [item.id, index + 1];
  });

  return (
    <main className="main-emploee-personal-card">
      <NavigationOfModules
        list={modulesList}
        currentList="Личная карточка сотрудника"
      />
      <section>
        <h1 className="submodule-title">Реестр</h1>
        <div className="panel-control-filter">
          <Filter data={EmploeePersonalCardDataFilter} />
          <Link to="/modules/hr/submodules/employee-personal-card/create">
            <Button variant="contained">Добавить</Button>
          </Link>
        </div>
      </section>
      <section>
        <Registry
          headersProps={headers}
          rowsProps={rows}
          url="employee-personal-card"
        />
      </section>
    </main>
  );
};

export default EmploeePersonalCard;
