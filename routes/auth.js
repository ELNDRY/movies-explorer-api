const express = require('express');
const validator = require('../middlewares/validators/authValodator');

const router = express.Router();
const controller = require('../controllers/users');

router.post('/signup', validator.validateCreateUser, controller.createUser);

router.post('/signin', validator.validateLogin, controller.login);

router.post('/signout', controller.logout);

module.exports = router;
