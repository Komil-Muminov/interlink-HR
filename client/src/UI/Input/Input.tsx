import "./Input.css";
import { TextField } from "@mui/material";

interface TProps {
  register?: any;
  idValue?: string;
  labelValue: string;
  borderRadiusStyle: string;
  heightStyle: string;
  widthStyle: string;
  classname: string | undefined;
  disabled?: boolean;
  value?: string;
  type?: string;
}

const Input = ({
  register,
  classname,
  idValue,
  labelValue,
  borderRadiusStyle,
  heightStyle,
  widthStyle,
  disabled,
  value,
  type,
}: TProps) => {
  const isRegister = register ? { ...register(idValue) } : null;

  return (
    <TextField
      type={type}
      {...isRegister}
      id={idValue}
      value={value}
      label={labelValue}
      disabled={disabled}
      className={classname}
      InputLabelProps={{
        shrink: true, // Убедитесь, что метка поднимается, когда есть значение
      }}
      sx={{
        "& .MuiOutlinedInput-root": {
          borderRadius: borderRadiusStyle,
          height: heightStyle,
        },

        width: widthStyle,
      }}
    />
  );
};

export default Input;
