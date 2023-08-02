const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const { errors } = require('celebrate');
const cors = require('cors');
const appConfig = require('./utils/appConfig');
const limiter = require('./middlewares/rateLimiter');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const router = require('./routes/index');
const errorHandler = require('./middlewares/errorHandler');
const corsOptions = require('./utils/corsOptions');

const app = express();
mongoose.connect(appConfig.mongo_uri);
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

app.listen(appConfig.port);
