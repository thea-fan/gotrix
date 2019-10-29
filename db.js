const pg = require('pg');
//require the url library
//this comes with node, so no need to yarn add
const url = require('url');
var configs;

//check to see if we have this heroku environment variable
if( process.env.DATABASE_URL ){

  //we need to take apart the url so we can set the appropriate configs

  const params = url.parse(process.env.DATABASE_URL);
  const auth = params.auth.split(':');

  //make the configs object
  var configs = {
    user: gotrix,
    password: gotrix2020,
    host: gotrix.cdqhdgzkhqoa.ap-southeast-1.rds.amazonaws.com,
    port: 5432,
    database: gotrix,
    ssl: true
  };

}else{

  //otherwise we are on the local network
  var configs = {
      user: 'admin',
      host: '127.0.0.1',
      database: 'trix',
      port: 5432
  };
}

//this is the same
const pool = new pg.Pool(configs);

pool.on('error', function (err) {
  console.log('idle client error', err.message, err.stack);
});



/*
 * ===================================================
 * ===================================================
 * ===================================================
 * ===================================================
 * ======        REQUIRE MODEL FILES         =========
 * ===================================================
 * ===================================================
 * ===================================================
 * ===================================================
 */


const allNeiModelsFunction = require('./models/nei');
const neiModelsObject = allNeiModelsFunction( pool );


/*
 * ===================================================
 * ===================================================
 * ===================================================
 * ===================================================
 * ======          MODULE EXPORTS            =========
 * ===================================================
 * ===================================================
 * ===================================================
 * ===================================================
 */


module.exports = {
  //make queries directly from here
  queryInterface: (text, params, callback) => {
    return pool.query(text, params, callback);
  },

  // get a reference to end the connection pool at server end
  pool:pool,

  nei: neiModelsObject
};