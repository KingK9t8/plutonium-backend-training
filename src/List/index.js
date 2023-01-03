import User from "./User";
import usersList from "./users.json";
const ListComponent = () => (
	<div>
		<h2>List of Users</h2>
		{usersList.map((userData, index) => (
			<User
				name={userData.name}
				age={userData.age}
				gender={userData.gender}
				key={index}
			/>
		))}
	</div>
);

export default ListComponent;
