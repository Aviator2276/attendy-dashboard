require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const rateLimiter = require('express-rate-limit');
const path = require('path');
const app = express();

/*
app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000,
    max: 90,
    message: 'Too many requests. Please try again later.',
  })
);*/
//app.use(cors); //Add in production
app.use(
  helmet({
    contentSecurityPolicy: {
      useDefaults: true,
      directives: {
        'script-src': ["'self'", "'unsafe-inline'"],
      },
    },
  })
);

app.use(express.static('./public'));
app.use(express.json());

app.use((req, res, next) => {
  res.status(404).sendFile(path.resolve(__dirname, './public/status/404.html'));
});
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).sendFile(path.resolve(__dirname, './public/status/500.html'));
});

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();