/** @format */

const mysql = require('mysql2/promise');
async function getConnection() {
  // create the connection
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'olatocode',
    password: '',
    database: 'workplace',
  });
  return connection;
}

module.exports = getConnection;
