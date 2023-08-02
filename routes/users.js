const express = require('express');
const validator = require('../middlewares/validators/userValidator');

const router = express.Router();
const controller = require('../controllers/users');

router.get('/users/me', controller.getUserMe);

router.patch('/users/me', validator.validateEditUser, controller.editUser);

module.exports = router;
