require('dotenv').config();

const { PORT, MONGO_URI } = process.env;

const appConfig = {
  port: PORT || 3000,
  mongo_uri: MONGO_URI || 'mongodb://0.0.0.0:27017/bitfilmsdb',
};

module.exports = appConfig;
