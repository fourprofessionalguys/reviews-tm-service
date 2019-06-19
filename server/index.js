/* eslint-disable no-console */
require('newrelic');
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const faker = require('faker');
//const { getReview } = require('../database/index.js')

const environment = process.env.NODE_ENV || 'development';
const configuration = require('../knexfile')[environment];
const database = require('knex')(configuration);

const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, '/../public/dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/reviews', (req, res) => {
  console.log('request at server, heading to database');
  database('reviews').limit(8).then((reviews) => {
  	res.status(200).send(reviews);
  });
});

app.get('/review', (req, res) => {
  console.log('request at server, heading to database');
  database('reviews').where({ username: faker.name.findName() }).limit(20).then((review) => {
  	res.status(200).send(review);
  });


});

username: faker.name.findName()

app.get('/bundle', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/dist/bundle.js'));
});

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});
