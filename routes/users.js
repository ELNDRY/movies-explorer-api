const express = require('express');
const validator = require('../middlewares/validators/userValidator');
const controller = require('../controllers/users');

const router = express.Router();

router.get('/users/me', controller.getUserMe);

router.patch('/users/me', validator.validateEditUser, controller.editUser);

module.exports = router;
