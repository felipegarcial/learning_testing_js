/* eslint-disable no-undef */
const {
	addUser,
	getUsers,
	findUserByUid,
	updateUserByUid,
	removeUserByUid,
} = require('./User.model');
const { buildUser } = require('../__fixtures__/users.fixture');

describe('User model', () => {
	it('should add new user', () => {
		const user = buildUser();
		addUser(user);
		expect(getUsers()).toEqual([user]);
	});

	it('findUserByUid - should return undefined when there are no users', () => {
		const user = findUserByUid({ uid: '' });
		expect(user).toBe(undefined);
	});

	it('findUserByUid - should return a valid user', () => {
		const user = buildUser();
		const userFound = findUserByUid({ uid: user.uid });
		expect(userFound).toEqual(user);
	});

	it('updateUserByUid - should update a valid user', () => {
		const user = buildUser();
		const userUpdated = { ...user, name: 'updated' };
		const usersUpdated = updateUserByUid(userUpdated);
		expect(usersUpdated).toEqual([userUpdated]);
	});

	it('removeUserByUid - should remove a valid user', () => {
		const user = buildUser();
		addUser(user);
		const usersRemove = removeUserByUid({ uid: user.uid });
		expect(usersRemove).toEqual([]);
	});
});
