
const {Pool} = require('pg');

 const connection = new Pool({
     user: 'postgres',
     host: 'localhost',
     database: 'socyetydb',
     password: 'postySQLpw',
     port: 5432
 });

 module.exports = connection;
