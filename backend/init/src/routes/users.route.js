const express = require('express');

const usersRouter = express.Router();

const {
	getUsers,
	addUser,
	findUserByUid,
	updateUserByUid,
	removeUserByUid,
} = require('../models/User.model');

usersRouter.get('/', (req, res) => {
	return res.status(200).send(getUsers());
});

usersRouter.get('/:uid', (req, res) => {
	const { uid } = req.params;
	const user = findUserByUid({ uid });
	return res.status(200).send(user);
});

usersRouter.post('/', (req, res) => {
	addUser(req.body);
	return res.status(201).send({ message: 'success' });
});

usersRouter.put('/:uid', (req, res) => {
	const { name, address, age } = req.body;
	const { uid } = req.params;

	const usersUpdated = updateUserByUid({ name, address, age, uid });

	return res.status(200).send(usersUpdated);
});

usersRouter.delete('/:uid', (req, res) => {
	const { uid } = req.params;
	const usersUpdated = removeUserByUid({ uid });
	return res.status(200).send(usersUpdated);
});

module.exports = usersRouter;
