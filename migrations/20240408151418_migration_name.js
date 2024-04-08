exports.up = function(knex) {
    return knex.schema.createTable('items', table => {
      table.increments('id'); 
      table.string('name').notNullable(); 
      table.text('description'); 
      table.timestamps(true, true); 
    });
  };

  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('items');
  };