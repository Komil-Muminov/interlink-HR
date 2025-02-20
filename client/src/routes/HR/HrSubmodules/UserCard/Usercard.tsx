import UserCard from "../../../../UI/User Card/UserCard";

const Usercard: React.FC = () => {
	return (
		<>
			<div className="usercard__content">
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
