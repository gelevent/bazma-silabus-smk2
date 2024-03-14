const database = require("../db/connection.js");
const response = require("../helpers/response.js");

// membuat getTodo = localhost:6000/api/todos

const getAllTodo = (req, res) => {
  const querySql = "SELECT * FROM todo";
  database.query(querySql, (err, result) => {
    if (err) throw err;
    response(res, 200, { message: "Success", data: result });
  });
};

const storeTodo = (req, res) => {
  const { title, description } = req.body;

  // Validasi: Memastikan title dan description tidak kosong
  if (!title || !description) {
      return response(res, 400, { message: 'Title dan description harus diisi' });
  }

  database.query('INSERT INTO todo (title, description) VALUES (?, ?)', [title, description], (err, result) => {
      if (err) {
          throw err;
      } else {
          response(res, 200, { message: 'Success get todo', data: result });
      }
  });
};


const putTodo = (req, res) => {
  const id = req.params.id;
  const { title, description } = req.body;

  if (!title || !description) {
      return response(res, 400, { message: 'Data tidak boleh kosong' })
  }

  database.query("UPDATE todo SET title = ?, description = ? WHERE id = ?",
      [title, description, id], (err, result) => {
          if (err) {
              throw err;
          } else {
              if (result.length === 0) {
                  response(res, 404, { message: `Todo ${id} not found ` })
              } else {
                  response(res, 200, { message: 'Success UPDATE todo' })
              }
          }
      })
};

const deleteTodo = (req, res) => {
  const id = req.params.id;

  database.query("DELETE FROM todo WHERE id = ?", [id], (err, result) => {
    if (err) throw err;
    if (result.affectedRows === 0) {
      response(res, 404, { message: `Todo with id ${id} not found` });
    } else {
      response(res, 200, { message: "Success deleted todo" });
    }
  });
};

const showTodo = (req, res) => {
  const id = req.params.id;
  database.query(`SELECT * from todo where id =  ${id}`, (err, result) => {
    if (err) throw err;
    response(res, 200, { message: "Success get todos", data: result });
  });
};

module.exports = {
  getAllTodo,
  storeTodo,
  putTodo,
  deleteTodo,
  showTodo
};
