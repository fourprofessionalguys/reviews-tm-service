const faker = require('faker');
const moment = require('moment');


exports.seed = async (knex, Promise) => {
  await knex('reviews').del()
  let chunk = []
  let date;
  for (let i = 0; i < 10000000; i += 1) {
    date = JSON.stringify(faker.date.past(10, '2019-05-01')).slice(0, 11).split('-').join('');
    chunk.push({
      username: faker.name.findName(),
      postdate: moment(date, 'YYYYMMDD').fromNow(),
      title: faker.lorem.sentence(),
      review: faker.lorem.paragraph(),
      rating: faker.random.number({
        min: 0,
        max: 5,
      }),
      sizerating: faker.random.number({
        min: 0,
        max: 5,
      }),
      recommended: faker.random.boolean(),
      yesvote: faker.random.number({
        min: 0,
        max: 50,
      }),
      novote: faker.random.number({
        min: 0,
        max: 50,
      }),
      image1: 'randomUrl.url',
      image2: 'randomUrl.url'
    });
    if(i % 1000 === 0) await knex('reviews').insert(chunk).then(() => chunk = []);
  }
} 
