import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import "../../index.css";

interface FormProps {
	inputs: {
		name?: string;
		type?: string;
		placeholder?: string;
		classname?: string;
		value?: unknown;
		disabled?: boolean;
	}[];
	classname?: string;
	onSubmit?: (data: unknown) => void;
	submitText?: string;
	sbtClassName?: string;
}

export const Form: React.FC<FormProps> = ({
	inputs,
	classname,
	onSubmit,
	submitText,
	sbtClassName,
}) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	return (
		<form className={classname} onSubmit={handleSubmit(onSubmit)}>
			{inputs?.map(
				({ name, type, placeholder, classname, value, disabled }) => (
					<>
						<input
							{...register(name, { required: `Поле ${name} обязательно` })}
							type={type || "text"}
							placeholder={placeholder || "Введите данные"}
							className={`input ${classname} `}
							disabled={disabled}
							value={value}
						/>
						{errors[name] && <span>{errors[name]?.message}</span>}
					</>
				),
			)}

			<Button type="submit" className={`${sbtClassName}`}>
				{submitText}
			</Button>
		</form>
	);
};
