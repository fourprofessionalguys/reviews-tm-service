exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable("reviews", table => {
      table.increments('id').primary()
      table.string("username")
      table.string("postdate")
      table.string("title")
      table.string("review", 500)
      table.integer("rating")
      table.integer("sizerating")
      table.boolean("recommended")
      table.integer("yesvote")
      table.integer("novote")
      table.text("image1")
      table.text("image2")
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable("reviews")
  ]);
};
