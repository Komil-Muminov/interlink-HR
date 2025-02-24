import React from "react";
import "./PersonnelRecordsManagement.css";
import NavigationOfModules from "../../../UI/Navigation of Modules/NavigationOfModules";
import Filter from "../../../components/Filter/Filter";
import { Link } from "react-router";
import { PersonnelRecordsManagementDataFilter } from "../../../API/data/PersonnelRecordsManagementDataFilter";
import { Button } from "@mui/material";
import Registry from "../../../components/Registry/Registry";

const PersonnelRecordsManagement = () => {
  interface SubmodulesList {
    id: number;
    title: string;
    link: string;
  }

  const modulesList: SubmodulesList[] = [
    {
      id: 1,
      title: "Кадровое делопроизводство",
      link: "/primary-docs/request",
    },
    {
      id: 2,
      title: "Личная карточка сотрудника",
      link: "/primary-docs/crm",
    },
    {
      id: 3,
      title: "Учет рабочего времени",
      link: "/primary-docs/contracts",
    },
    {
      id: 4,
      title: "Кадровая отчетность",
      link: "/modules/hr/submodules",
    },
  ];

  const headers = PersonnelRecordsManagementDataFilter.filter((e) => {
    return [
      "Номер списка",
      "Тип документа",
      "Дата",
      "Сотрудник-(и)",
      "Статус",
    ].includes(e.title);
  }).map((e) => e.title);

  interface TData {
    id: number;
    docType: string;
    date: string;
    employees: string[];
    status: string;
  }

  const data: TData[] = [
    {
      id: 1,
      docType: "Трудовой договор",
      date: "24.02.2024",
      employees: ["Амир"],
      status: "Активный",
    },
    {
      id: 2,
      docType: "Командировка",
      date: "25.02.2024",
      employees: ["Амир"],
      status: "Активный",
    },
  ];

  const rows = data.map((item: TData, index) => [
    item.id,
    index + 1,
    item.docType,
    item.date,
    item.employees,
    item.status,
  ]);

  return (
    <main className="main-personnel-records-management">
      <NavigationOfModules
        list={modulesList}
        currentList="Кадровое делопроизводство"
      />
      <section>
        <h1 className="submodule-title">Реестр</h1>
        <div className="panel-control-filter">
          <Filter data={PersonnelRecordsManagementDataFilter} />
          <Link to="/modules/hr/sobmodules/personnel-records-management/create">
            <Button variant="contained">Добавить</Button>
          </Link>
        </div>
      </section>
      <section>
        <Registry
          headersProps={headers}
          rowsProps={rows}
          status={{ active: "Активный", inactive: "Неактивный" }}
        />
      </section>
    </main>
  );
};

export default PersonnelRecordsManagement;
