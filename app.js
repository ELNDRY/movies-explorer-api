require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const { errors } = require('celebrate');
const cors = require('cors');
const limiter = require('./middlewares/rateLimiter');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const router = require('./routes/index');
const errorHandler = require('./middlewares/errorHandler');
const corsOptions = require('./utils/corsOptions');

const { PORT = 3000, MONGO_URI = 'mongodb://0.0.0.0:27017/bitfilmsdb' } = process.env;

const app = express();
mongoose.connect(MONGO_URI);
app.use(limiter);
app.use(helmet());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(requestLogger);
app.use(limiter);
app.use(cors(corsOptions));
app.use(router);
app.use(errorLogger);
app.use(errors());
app.use(errorHandler);

app.listen(PORT);
