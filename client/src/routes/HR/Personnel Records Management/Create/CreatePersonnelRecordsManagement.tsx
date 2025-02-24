import React from "react";
import "./CreatePersonnelRecordsManagement.css";
import TitleSection from "../../../../UI/Title of Section/TitleSection";
import PanelControl from "../../../../UI/Panel Control/PanelControl";

const CreatePersonnelRecordsManagement = () => {
  return (
    <main className="create-personnel-records-management">
      <TitleSection title="Новый документ" />
      <PanelControl
      //   handleSubmit={handleSubmit(onSubmit)}
      //   saveButtonState={!isValidInn ? true : false}
      // editButtonState
      />
      <section></section>
      <TitleSection title="Данные пользователя" />
      <section></section>
      <TitleSection title="Трудовой договор" />
      <section></section>
    </main>
  );
};

export default CreatePersonnelRecordsManagement;
