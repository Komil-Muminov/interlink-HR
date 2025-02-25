import React, { useEffect, useState } from "react";
import "./CreatePersonnelRecordsManagement.css";
import TitleSection from "../../../../UI/Title of Section/TitleSection";
import PanelControl from "../../../../UI/Panel Control/PanelControl";
import { documentsList } from "../../../../API/data/documentsList";
import { Button } from "@mui/material";
import Input from "../../../../UI/Input/Input";
import { useForm } from "react-hook-form";
import SelectUI from "../../../../UI/Select/SelectUI";
import { users } from "../../../../API/data/Users";

const CreatePersonnelRecordsManagement = () => {
  const { register, watch, control, handleSubmit, setValue, getValues } =
    useForm({
      defaultValues: {
        fullname: "",
        role: "",
        subdivision: "",
        orgName: `ГУП "Центр финансовых информационных технологий"`,
        phone: "",
        email: "",
        status: "Активный",
        userType: "Новый",
      },
    });

  const userType = watch("userType");
  const chooseUser = watch("fullname");

  const currentUser = users.find((e) => e.fullname === chooseUser);

  // Используйте useEffect для обновления значений формы при изменении fullname
  useEffect(() => {
    if (userType === "Новый") {
      // Если выбран "Новый", очищаем fullname и другие поля
      setValue("fullname", "");
      setValue("role", "");
      setValue("subdivision", "");
      setValue("phone", "");
      setValue("email", "");
    } else if (currentUser) {
      // Если выбран существующий пользователь и он найден, устанавливаем данные
      setValue("role", currentUser.role);
      setValue("subdivision", currentUser.subdivision);
      setValue("phone", currentUser.phone);
      setValue("email", currentUser.email);
    }
  }, [userType, currentUser, setValue]);

  const [activeTab, setActiveTab] = useState<string>(documentsList[0].item);

  return (
    <main className="create-personnel-records-management">
      <TitleSection title="Новый документ" />
      <PanelControl
      //   handleSubmit={handleSubmit(onSubmit)}
      //   saveButtonState={!isValidInn ? true : false}
      // editButtonState
      />
      <section>
        <div className="wrapper-nav-documents-list">
          {documentsList.map((tab) => (
            <Button
              onClick={() => setActiveTab(tab.item)}
              className={activeTab === tab.item ? "active-tab" : ""}
              key={tab.id}
              variant={activeTab === tab.item ? "contained" : "outlined"}
            >
              {tab.item}
            </Button>
          ))}
        </div>
      </section>
      {/* Трудовой договор */}
      {activeTab === "Трудовой договор" && (
        <>
          <TitleSection title="Данные пользователя" />
          <section>
            <form>
              <SelectUI
                control={control}
                nameValue="userType"
                labelValue="Тип пользователя"
                borderRadiusStyle="30px"
                widthStyle="100%"
                data={[
                  {
                    id: 1,
                    title: "Новый",
                  },
                  { id: 2, title: "Существующий" },
                ]}
              />
              {userType === "Новый" && (
                <Input
                  register={register}
                  classname="crtPrimaryDocs__form--isDataSuccess"
                  idValue="fullname"
                  labelValue="ФИО *"
                  borderRadiusStyle="30px"
                  heightStyle="90%"
                  widthStyle="49%"
                />
              )}
              {userType === "Существующий" && (
                <SelectUI
                  control={control}
                  nameValue="fullname"
                  labelValue="ФИО *"
                  borderRadiusStyle="30px"
                  widthStyle="49%"
                  data={users}
                />
              )}

              <Input
                register={register}
                classname="crtPrimaryDocs__form--isDataSuccess"
                idValue="role"
                labelValue="Должность *"
                borderRadiusStyle="30px"
                heightStyle="90%"
                widthStyle="49%"
              />
              <SelectUI
                control={control}
                nameValue="subdivision"
                labelValue="Подразделение *"
                borderRadiusStyle="30px"
                widthStyle="49%"
                data={
                  currentUser
                    ? [{ id: 1, title: currentUser.subdivision }]
                    : [
                        {
                          id: 1,
                          title:
                            "Отдел разработки и внедрения информационных программ",
                        },
                        { id: 2, title: "Отдел по работе с клиентами" },
                        { id: 3, title: "Отдел кадров" },
                        { id: 3, title: `ГУП "ЦФИТ"` },
                      ]
                }
              />
              <Input
                register={register}
                classname="crtPrimaryDocs__form--isDataSuccess"
                idValue="orgName"
                labelValue="Организация *"
                borderRadiusStyle="30px"
                heightStyle="90%"
                widthStyle="49%"
                disabled={true}
              />
              <Input
                register={register}
                classname="crtPrimaryDocs__form--isDataSuccess"
                idValue="phone"
                labelValue="Номер телефона *"
                borderRadiusStyle="30px"
                heightStyle="90%"
                widthStyle="49%"
              />
              <Input
                register={register}
                classname="crtPrimaryDocs__form--isDataSuccess"
                idValue="email"
                labelValue="Электронная почта *"
                borderRadiusStyle="30px"
                heightStyle="90%"
                widthStyle="49%"
              />
            </form>
          </section>
          <TitleSection title="Трудовой договор" />
          <section></section>
        </>
      )}

      {/* Другие документы */}
      {activeTab !== "Трудовой договор" && <p>На этапе разработки...</p>}
    </main>
  );
};

export default CreatePersonnelRecordsManagement;
