const express = require('express');
const { celebrate, Joi } = require('celebrate');
const controller = require('../controllers/movies');

const router = express.Router();

router.get('/movies', controller.getMovies);

router.post('/movies', celebrate({
  body: Joi.object().keys({
    country: Joi.string().required().min(1).max(200),
    director: Joi.string().required().min(1).max(200),
    duration: Joi.number().required(),
    year: Joi.string().required().min(1).max(10),
    description: Joi.string().required().min(1).max(3000),
    image: Joi.string().required().uri(),
    trailerLink: Joi.string().required().uri(),
    thumbnail: Joi.string().required().uri(),
    movieId: Joi.number().required(),
    nameRU: Joi.string().required().min(1).max(200),
    nameEN: Joi.string().required().min(1).max(200),
  }),
}), controller.createMovie);

router.delete('/movies/:movieId', celebrate({
  params: Joi.object().keys({
    cardId: Joi.string().required().length(24).hex(),
  }),
}), controller.deleteMovie);

module.exports = router;
