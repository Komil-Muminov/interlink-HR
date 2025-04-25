import React, { useEffect, useState } from "react";
import "./CreateEmploeePersonalCard.css";
import TitleSection from "../../../../UI/Title of Section/TitleSection";
import PanelControl from "../../../../UI/Panel Control/PanelControl";
import { documentsList } from "../../../../API/data/documentsList";
import { Button } from "@mui/material";
import Input from "../../../../UI/Input/Input";
import { useForm } from "react-hook-form";
import SelectUI from "../../../../UI/Select/SelectUI";
import { users } from "../../../../API/data/Users";
import { generateUniqueId } from "../../../../API/hooks/generateUniqueId";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { queryClient } from "../../../../API/hooks/queryClient";
import { createDocument } from "../../../../API/services/documents/createDocument";
import { IEmploeePersonalCard } from "../../../../API/services/types/EmploeePersonalCard";
import { INITIAL_VALUES, maritialStatus } from "./lib";
import { сreateEmployeePersonalCard } from "../../../../API/services/emploeePersonalCard/сreateEmployeePersonalCard";
import DatePickerUI from "../../../../UI/Date Picker/DatePickerUI";

const CreateEmploeePersonalCard = () => {
  const { register, watch, control, handleSubmit, setValue, getValues } =
    useForm<IEmploeePersonalCard>({
      defaultValues: {
        ...INITIAL_VALUES,
      },
    });

  const userType = watch("generalInformation.userType");
  const chooseUser = watch("generalInformation.fullname");
  const maritialStatusState = watch("personalInformation.maritalStatus");
  const isActiveNumberOfChildren =
    maritialStatusState === "Холост" ? true : false;

  const currentUser = users.find((e) => e.fullname === chooseUser);

  // Используйте useEffect для обновления значений формы при изменении fullname
  useEffect(() => {
    if (userType === "Новый") {
      // Если выбран "Новый", очищаем fullname и другие поля
      setValue("generalInformation.fullname", "");
      setValue("generalInformation.role", "");
      setValue("generalInformation.subdivision", "");
      setValue("generalInformation.phoneNumber", "");
      setValue("generalInformation.email", "");
    } else if (currentUser) {
      // Если выбран существующий пользователь и он найден, устанавливаем данные
      setValue("generalInformation.role", currentUser.role);
      setValue("generalInformation.subdivision", currentUser.subdivision);
      setValue("generalInformation.phoneNumber", currentUser.phone);
      setValue("generalInformation.email", currentUser.email);
    }
  }, [userType, currentUser, setValue]);

  const onSubmit = (data: IEmploeePersonalCard) => {
    const formData = new FormData();

    console.log(JSON.stringify(formData));

    formData.append(
      "generalInformation.fullname",
      data.generalInformation.fullname
    );
    formData.append("generalInformation.role", data.generalInformation.role);
    formData.append(
      "generalInformation.subdivision",
      data.generalInformation.subdivision
    );
    formData.append(
      "generalInformation.orgName",
      data.generalInformation.orgName
    );
    formData.append("generalInformation.phone", data.generalInformation.phone);
    formData.append("generalInformation.email", data.generalInformation.email);
    formData.append(
      "generalInformation.status",
      data.generalInformation.status
    );
    formData.append(
      "generalInformation.userType",
      data.generalInformation.userType
    );
    formData.append(
      "personalInformation.citizenship",
      data.personalInformation.citizenship
    );

    formData.append("id", generateUniqueId());
    formData.append("state", "1");

    createEmployeePersonalCardMutate.mutate(formData);
    console.log(Array.from(formData.entries()));
  };

  const navigate = useNavigate();

  const createEmployeePersonalCardMutate = useMutation<any, Error, FormData>({
    mutationFn: (data: FormData) => сreateEmployeePersonalCard(data),
    onSuccess: (_, variables) => {
      const personalCardId = variables.get("id");
      queryClient.invalidateQueries({ queryKey: "employeePersonalCard" });
      navigate(
        `/modules/hr/submodules/employee-personal-card/show/${personalCardId}`
      );
    },
    onError: (error) => {
      console.error(
        "Ошибка при создании личной карточки сотрудника:",
        error.message
      );
      alert("Для данного сотрудника личная карточка уже существует!");
    },
  });

  useEffect(() => {
    if (isActiveNumberOfChildren) {
      setValue("personalInformation.numberOfChildren", 0);
    }
  }, [isActiveNumberOfChildren, setValue]);

  return (
    <main className="create-employee-personal-card">
      <TitleSection title="Новая личная карточка" />
      <PanelControl
        handleSubmit={handleSubmit(onSubmit)}
        saveButtonState={true}
        // editButtonState
      />

      <TitleSection title="Данные пользователя" />
      <section>
        <form>
          <SelectUI
            control={control}
            nameValue="generalInformation.userType"
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
              idValue="generalInformation.fullname"
              labelValue="ФИО *"
              borderRadiusStyle="30px"
              heightStyle="90%"
              widthStyle="49%"
            />
          )}
          {userType === "Существующий" && (
            <SelectUI
              control={control}
              nameValue="generalInformation.fullname"
              labelValue="ФИО *"
              borderRadiusStyle="30px"
              widthStyle="49%"
              data={users}
            />
          )}

          <Input
            register={register}
            classname="crtPrimaryDocs__form--isDataSuccess"
            idValue="generalInformation.role"
            labelValue="Должность *"
            borderRadiusStyle="30px"
            heightStyle="90%"
            widthStyle="49%"
          />
          <SelectUI
            control={control}
            nameValue="generalInformation.subdivision"
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
            idValue="generalInformation.orgName"
            labelValue="Организация *"
            borderRadiusStyle="30px"
            heightStyle="90%"
            widthStyle="49%"
            disabled={true}
          />
          <Input
            register={register}
            classname="crtPrimaryDocs__form--isDataSuccess"
            idValue="generalInformation.phoneNumber"
            labelValue="Номер телефона *"
            borderRadiusStyle="30px"
            heightStyle="90%"
            widthStyle="49%"
          />
          <Input
            register={register}
            classname="crtPrimaryDocs__form--isDataSuccess"
            idValue="generalInformation.email"
            labelValue="Электронная почта *"
            borderRadiusStyle="30px"
            heightStyle="90%"
            widthStyle="49%"
          />
        </form>
      </section>
      <TitleSection title="Личная информация" />
      <section>
        <form>
          <DatePickerUI
            control={control}
            nameValue="personalInformation.dateOfBirth"
            labelValue="Дата рождения"
            borderRadiusStyle="30px"
            heightStyle="90%"
            widthStyle="48%"
          />
          <Input
            register={register}
            classname="crtPrimaryDocs__form--isDataSuccess"
            idValue="personalInformation.citizenship"
            labelValue="Гражданство"
            borderRadiusStyle="30px"
            heightStyle="90%"
            widthStyle="49%"
          />
          <SelectUI
            control={control}
            nameValue="personalInformation.maritalStatus"
            labelValue="Семейное положение"
            borderRadiusStyle="30px"
            widthStyle="49%"
            data={maritialStatus}
          />
          <Input
            type="number"
            register={register}
            classname="crtPrimaryDocs__form--isDataSuccess"
            idValue="personalInformation.numberOfChildren"
            labelValue="Количество детей"
            borderRadiusStyle="30px"
            heightStyle="90%"
            widthStyle="49%"
            disabled={isActiveNumberOfChildren}
          />
          <Input
            register={register}
            classname="crtPrimaryDocs__form--isDataSuccess"
            idValue="personalInformation.residentialAddress"
            labelValue="Адрес проживания"
            borderRadiusStyle="30px"
            heightStyle="90%"
            widthStyle="49%"
            disabled={isActiveNumberOfChildren}
          />
          <Input
            register={register}
            classname="crtPrimaryDocs__form--isDataSuccess"
            idValue="personalInformation.tin"
            labelValue="ИНН"
            borderRadiusStyle="30px"
            heightStyle="90%"
            widthStyle="49%"
            disabled={isActiveNumberOfChildren}
          />
          <Input
            register={register}
            classname="crtPrimaryDocs__form--isDataSuccess"
            idValue="personalInformation.passport"
            labelValue="Серия и номер паспорта"
            borderRadiusStyle="30px"
            heightStyle="90%"
            widthStyle="49%"
            disabled={isActiveNumberOfChildren}
          />
          <Input
            register={register}
            classname="crtPrimaryDocs__form--isDataSuccess"
            idValue="personalInformation.insuranceNumber"
            labelValue="СНИЛС"
            borderRadiusStyle="30px"
            heightStyle="90%"
            widthStyle="49%"
            disabled={isActiveNumberOfChildren}
          />
        </form>
      </section>
      <TitleSection title="Профессиональная информация" />
      <section></section>
    </main>
  );
};

export default CreateEmploeePersonalCard;
