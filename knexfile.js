// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'RNTR_dev'
    }
    //, seeds: {
    //   directory: './seeds/'
    // }
  },

  test: {
    client: 'postgresql',
    connection: {
      database: 'RNTR_test'
    }
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL
    //does this need to be an object to remain consistant with the other two environments? if something doesnt work, 
    //when we try to deploy, research this.
  }
  //, seeds: {
  //  directory: './seeds/'
  // }

}
