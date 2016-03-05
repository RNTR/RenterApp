
exports.up = function(knex, Promise) {

    return Promise.all([

        knex.schema.createTable('users', function(table) {
            table.increments('id').primary();
            table.string('username');
            table.string('password');
            table.string('email');
            table.timestamps();
        }),

        knex.schema.createTable('items', function(table){
            table.increments('id').primary();
            table.string('name');
            table.string('address');
            table.integer('zip');
            table.string('category');
            table.integer('price');
            table.string('photo');
            table.integer('itemOwner')
                 .references('id')
                 .inTable('users');
            table.dateTime('postDate');
        }),

        knex.schema.createTable('rentals', function(table){
            table.increments('id').primary();
            table.integer('user_id')
                 .references('id')
                 .inTable('users');
            table.integer('item_id')
                 .references('id')
                 .inTable('items');
            table.dateTime('date_start');
            table.dateTime('date_end');
            table.string('is_confirmed');
            table.timestamps();
        })
    ])
  
};

exports.down = function(knex, Promise) {

    return Promise.all([
        knex.schema.dropTable('users'),
        knex.schema.dropTable('items'),
        knex.schema.dropTable('rentals')
    ])

};
