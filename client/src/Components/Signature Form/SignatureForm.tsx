import React, { useEffect } from "react";
import "./SignatureForm.css";
import { Button, Typography } from "@mui/material";
import Input from "../../UI/Input/Input";
import ModeIcon from "@mui/icons-material/Mode";
import { useForm } from "react-hook-form";
import SelectUI from "../../UI/Select/SelectUI";
import { ICordinationUserListData } from "../../API/data/CoordinationUserList";

interface ISignatureCoordination {
  fullname: string;
  role: string;
  item: ICordinationUserListData;
}

interface IProps {
  item: ICordinationUserListData;
}

export const SignatureForm = ({ item }: IProps) => {
  const { register, watch, control, handleSubmit, setValue, getValues } =
    useForm<ISignatureCoordination>({
      defaultValues: {
        fullname: "",
        role: "",
      },
    });

  useEffect(() => {
    setValue("fullname", item.fullname);
    setValue("role", item.role);
  }, [item, setValue]);


  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div style={{ width: "100%", display: "flex", gap: "10px" }}>
      <Input
        register={register}
        classname="crtPrimaryDocs__form--isDataSuccess"
        idValue="fullname"
        labelValue="ФИО"
        value={item.fullname}
        borderRadiusStyle="30px"
        heightStyle="50px"
        widthStyle="32%"
      />

      <Input
        register={register}
        classname="crtPrimaryDocs__form--isDataSuccess"
        idValue="role"
        labelValue="Должность"
        value={item.role}
        borderRadiusStyle="30px"
        heightStyle="50px"
        widthStyle="32%"
      />
      <Button
        onClick={handleSubmit(onSubmit)}
        type="submit"
        sx={{
          color: "var(--primary-color)",
          borderColor: "var(--primary-color)",
          width: "32%",
          minHeight: "50px",
          display: "flex",
          alignItems: "center",
          gap: "10px",
          borderRadius: "30px",
        }}
        variant="outlined"
      >
        <ModeIcon />
        <Typography fontSize="14px" fontWeight="500">
          Подписать
        </Typography>
      </Button>
    </div>
  );
};
