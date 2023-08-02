const express = require('express');

const router = express.Router();

const usersRouter = require('./users');
const moviesRouter = require('./movies');
const authRouter = require('./auth');
const authVerifier = require('../middlewares/auth');
const NotFoundError = require('../errors/NotFoundError');

router.use('/', authRouter);
router.use('/', authVerifier);
router.use('/', usersRouter);
router.use('/', moviesRouter);
router.use('*', (req, res, next) => {
  next(new NotFoundError('Страница не найдена.'));
});

module.exports = router;
