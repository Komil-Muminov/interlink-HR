import React from "react";
import "./SelectUI.css";
import { Box, FormControl, InputLabel, MenuItem } from "@mui/material";
import { Controller } from "react-hook-form";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { TUsers } from "../../API/data/Users";

interface TData {
  id: number;
  title: string;
}

interface TProps {
  disable: boolean;
  control: any;
  nameValue: string;
  labelValue: string;
  borderRadiusStyle: string;
  heightStyle?: string;
  widthStyle: string;
  data: TData[] | TUsers[];
}

const SelectUI = ({
  control,
  disable,
  nameValue,
  labelValue,
  borderRadiusStyle,
  widthStyle,
  data,
}: TProps) => {
  return (
    <Box width={widthStyle}>
      <Controller
        name={nameValue}
        control={control}
        defaultValue=""
        render={({ field }) => (
          <FormControl fullWidth>
            <InputLabel id="terCode-label">{labelValue}</InputLabel>
            <Select
              {...field}
              id={nameValue}
              disabled={disable}
              labelId={`${nameValue}-label`}
              label={labelValue}
              sx={{
                "& .MuiOutlinedInput-notchedOutline": {
                  borderRadius: borderRadiusStyle,
                },
              }}
            >
              {data.map((e) => {
                return (
                  <MenuItem
                    key={e.id}
                    value={"title" in e ? e.title : e.fullname}
                  >
                    {"fullname" in e ? e.fullname : e.title}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        )}
      />
    </Box>
  );
};

export default SelectUI;
