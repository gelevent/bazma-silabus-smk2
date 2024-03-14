const express = require("express");
const router = express.Router();

const TodoController = require("../Controllers/TodoController");

router.get("/", TodoController.getAllTodo);
router.post("/", TodoController.storeTodo);
router.put("/:id", TodoController.putTodo);
router.delete("/:id", TodoController.deleteTodo);
router.get("/:id", TodoController.showTodo);
module.exports = router