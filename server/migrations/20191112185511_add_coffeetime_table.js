// yarn run knex migrate:make add_coffeetime_table
exports.up = function(knex) {
  // create the 'voca' table with six columns
  return knex.schema.createTable("coffeetime", t => {
    // t.increments() // auto-incrementing id column
    //   .index(); // index this column
    // t.string("index")
    //   .unique()
    //   .index(); // index this column

    t.string("URL", 300) // maximum length of 300 characters
      // .unique() // add a unique constraint to this column
      .notNullable() // add a not-null constraint to this column
      .index(); // index it

    t.string("date", 15) // maximum length of 15 characters
      .unique()
      .index(); // index it

    t.string("name", 100) // maximum length of 100 characters
      .index(); // index it

    t.boolean("isRead");

    t.string("readDate", 15) // maximum length of 15 characters
      .index(); // index it

    t.string("thumbnail", 10000); // maximum length of 10000 characters

    t.string("tag", 100); // maximum length of 100 characters

    t.timestamp("created_at")
      .notNullable()
      .defaultTo(knex.fn.now()); // default to the current time
  });
};

exports.down = function(knex) {
  // undo this migration by destroying the 'voca' table
  return knex.schema.dropTable("coffeetime");
};
