const users = [];

module.exports.getUsers = () => {
	return users;
};

module.exports.addUser = ({ name, address, age }) => {
	const uid = users.length + 1;
	users.push({ name, address, age, uid });
	return { name, address, age, uid };
};

module.exports.findUserByUid = ({ uid }) =>
	users.find(({ uid: userUid }) => userUid === parseInt(uid));

module.exports.updateUserByUid = ({ uid, name, address, age }) => {
	const usersUpdated = users.map((user) => {
		if (user.uid === parseInt(uid)) {
			return { ...user, name, address, age };
		}

		return user;
	});

	return usersUpdated;
};

module.exports.removeUserByUid = ({ uid }) => {
	const userFound = users.find(
		({ uid: userUid }) => userUid == parseInt(uid)
	);

	const index = users.indexOf(userFound);

	if (index > -1) {
		users.splice(index, 1);
	}

	return users.filter(({ uid: userUid }) => userUid == parseInt(uid));
};
