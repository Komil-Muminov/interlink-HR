import { Form } from "../../../../UI/Form/Form";
import UserCard from "../../../../UI/User Card/UserCard";
import "./Usercard.css";

const Usercard: React.FC = () => {
	const onsubmit = (data) => {
		console.log(data);
	};
	return (
		<>
			<div className="usercard__content">
				<Form
					inputs={[
						{
							name: "usercard",
							placeholder: "Введите ИНН сотрудника",
							classname: "input usercard__inn",
							type: "text",
						},
					]}
					submitText="Поиск"
					classname="usercard__form"
					onSubmit={onsubmit}
				/>
				<UserCard
					position="Мутахассис"
					fullname="Коргар Коргаров"
					contacts={"999991313"}
				/>
			</div>
		</>
	);
};
export default Usercard;
