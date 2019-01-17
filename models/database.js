const mysql = require('mysql2');
 
// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'xCreep'
});
 
// simple query
connection.query(
  'SELECT * FROM `products`',
  function(err, results, fields) {
    console.log(results[0]); // results contains rows returned by server
   // console.log(fields); // fields contains extra meta data about results, if available
  }
);