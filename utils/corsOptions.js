const corsOptions = {
  origin: [
    'http://localhost:3000',
    'https://localhost:3000',
    'http://elndry.movies-explorer.nomoreparties.co',
    'https://elndry.movies-explorer.nomoreparties.co',
    'http://api.elndry.movie-explorer.nomoreparties.co',
    'https://api.elndry.movie-explorer.nomoreparties.co',
  ],
  methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
};

module.exports = corsOptions;
