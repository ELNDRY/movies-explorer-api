const express = require('express');
const validator = require('../middlewares/validators/authValidator');

const router = express.Router();
const controller = require('../controllers/users');

router.post('/signup', validator.validateCreateUser, controller.createUser);

router.post('/signin', validator.validateLogin, controller.login);

module.exports = router;
