/** @format */

const mysql = require('mysql2');
// async function getConnection() {
//   // create the connection
//   const connection = await mysql.createConnection({
//     host: 'localhost',
//     user: 'olatocode',
//     password: '123456',
//     database: 'workplace',
//   });
//   return connection;
// }

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'olatocode',
  password: '123456',
  database: 'workplace',
});

conn.connect();

// constructor
const Employee = function (tutorial) {
  this.title = tutorial.title;
  this.description = tutorial.description;
  this.published = tutorial.published;
};

module.exports = { conn, Employee };
