const User = (props) => {
	return (
		<div className="user-container">
			<div className="John">{props.name}</div>
			<div className="details">
				<span>{props.age}</span>
				<span>{props.gender}</span>
			</div>
		</div>
	);
};

export default User;
