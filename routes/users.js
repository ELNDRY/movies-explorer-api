const express = require('express');
const { celebrate, Joi } = require('celebrate');
const controller = require('../controllers/users');

const router = express.Router();

router.get('/users/me', controller.getUserMe);

router.patch('/users/me', celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30).required(),
    email: Joi.string().required().email(),
  }),
}), controller.editUser);

module.exports = router;
