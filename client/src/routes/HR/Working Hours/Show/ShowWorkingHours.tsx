import React from "react";
import "./ShowWorkingHours.css";
import TitleSection from "../../../../UI/Title of Section/TitleSection";
import DatePickerUI from "../../../../UI/Date Picker/DatePickerUI";
import dayjs, { Dayjs } from "dayjs";
import { useForm } from "react-hook-form";
import Input from "../../../../UI/Input/Input";
import { corditaionUserList } from "../../../../API/data/CoordinationUserList";
import { SignatureForm } from "../../../../Components/Signature Form/SignatureForm";

interface IWorkingHours {
  month: Dayjs | null;
  year: Dayjs | null;
  days: string;
  workingDays: Dayjs | null;
  weekendDays: Dayjs | null;
  executor: string;
}

const ShowWorkingHours = () => {
  const { register, control, watch, reset } = useForm<IWorkingHours>({
    defaultValues: {
      month: null,
      year: null,
      days: "",
      workingDays: null,
      weekendDays: null,
      executor: "",
    },
  });

  return (
    <main className="show-working-hours">
      <TitleSection title="Учет рабочего времени - Январь" />
      <section>
        <form>
          <DatePickerUI
            control={control}
            nameValue="month"
            labelValue="Месяц"
            borderRadiusStyle="30px"
            heightStyle="90%"
            widthStyle="48%"
            views={["month"]}
            disabled={true}
            value={null}
          />
          <DatePickerUI
            control={control}
            nameValue="year"
            labelValue="Год"
            borderRadiusStyle="30px"
            heightStyle="90%"
            widthStyle="48%"
            views={["year"]}
            disabled={true}
            value={null}
          />

          <Input
            register={register}
            classname="crtPrimaryDocs__form--isDataSuccess"
            idValue="days"
            labelValue="Дни"
            value={"12"}
            borderRadiusStyle="30px"
            heightStyle="90%"
            widthStyle="48%"
            disabled={true}
          />
          <DatePickerUI
            control={control}
            nameValue="workingDays"
            labelValue="Рабочие дни"
            borderRadiusStyle="30px"
            heightStyle="90%"
            widthStyle="48%"
            views={["day"]}
            disabled={true}
            value={null}
          />
          <DatePickerUI
            control={control}
            nameValue="weekendDays"
            labelValue="Выходные дни"
            borderRadiusStyle="30px"
            heightStyle="90%"
            widthStyle="48%"
            views={["day"]}
            disabled={true}
            value={null}
          />
          <Input
            register={register}
            classname="crtPrimaryDocs__form--isDataSuccess"
            idValue="executor"
            labelValue="Ответственное лицо"
            value="Зиёева Адиба"
            borderRadiusStyle="30px"
            heightStyle="90%"
            widthStyle="48%"
            disabled={true}
          />
        </form>
      </section>
      <TitleSection title="Данные о месяцах" />
      <section></section>
      <TitleSection title="Согласование" />
      <section>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            width: "100%",
          }}
        >
          {corditaionUserList.map((e) => (
            <SignatureForm key={e.id} item={e} />
          ))}
        </form>
      </section>
    </main>
  );
};

export default ShowWorkingHours;
