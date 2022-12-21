/** @format */

const express = require('express');
const { conn } = require('./utils/db');
const app = express();

// const genericError = 'Sorry, something went wrong!';

app.use(express.json());

// post new employee
app.post('/', function (req, res) {
  let newEmployee = { ...req.body };

  conn.query('INSERT INTO employee SET ?', newEmployee, (error, result) => {
    if (error) {
      return res.status(500).json({ status: 'ERROR', error });
    }

    return res.status(200).json({ status: 'SUCCESS', newEmployee });
  });
});

//Get all employees from the database
app.get('/employees', (req, res) => {
  conn.query('SELECT * from employee', (error, data) => {
    if (error) {
      return res.json({ status: 'ERROR', error });
    }

    return res.status(200).json(data);
  });
});

app.put('/employees', function (req, res) {
  conn.query(
    'UPDATE `employee` SET `name`=?,`department`=?,`address`=? where `id`=?',
    [req.body.name, req.body.department, req.body.address, req.body.id],
    function (error, results, fields) {
      if (error) throw error;
      // res.end(JSON.stringify(results));
      res.status(200).json(results);
    }
  );
});

//rest api to delete record from mysql database
app.delete('/employees', function (req, res) {
  conn.query(
    'DELETE FROM `employee` WHERE `id`=?',
    [req.query.id],
    function (error, results, fields) {
      if (error) throw error;
      res.status(200).json(results);
    }
  );
});

app.listen(8001);
