const { celebrate, Joi } = require('celebrate');

const validateCreateMovie = celebrate({
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
});

const validateDeleteMovie = celebrate({
  params: Joi.object().keys({
    movieId: Joi.string().required().length(24).hex(),
  }),
});

module.exports = { validateCreateMovie, validateDeleteMovie };
