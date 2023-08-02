const express = require('express');
const validator = require('../middlewares/validators/movieValidator');
const controller = require('../controllers/movies');

const router = express.Router();

router.get('/movies', controller.getMovies);

router.post('/movies', validator.validateCreateMovie, controller.createMovie);

router.delete('/movies/:movieId', validator.validateDeleteMovie, controller.deleteMovie);

module.exports = router;
