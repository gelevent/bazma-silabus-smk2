const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'smk_bazma_todo'
});

connection.connect((err) => {
    if (err) console.log(err);
    else console.log('connected to database');
  })
  
  module.exports = connection;