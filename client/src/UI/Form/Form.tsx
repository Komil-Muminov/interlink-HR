import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import "../../index.css";

interface FormProps {
	inputs: {
		name?: string;
		type?: string;
		placeholder?: string;
		classname?: string;
		value?: string;
		label?: string | undefined;
		disabled?: boolean;
		options?: string[];
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
				({
					name,
					type,
					placeholder,
					classname,
					value,
					label,
					disabled,
					options,
				}) => (
					<>
						{type === "select" ? (
							<>
								<select
									{...register(name, {
										required: true,
										message: "Выберите значение",
									})}
									className={classname}
									id={name}
								>
									<option value={``}></option>
									{options
										? options.map((item) => (
												<>
													<option value={item}>{item}</option>
												</>
										  ))
										: null}
								</select>
							</>
						) : (
							<>
								<label htmlFor={name}>{label}</label>
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
						)}
					</>
				),
			)}

			<Button type="submit" className={`${sbtClassName}`}>
				{submitText}
			</Button>
		</form>
	);
};
