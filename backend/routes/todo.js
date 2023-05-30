const express = require('express');
// const requireAuth = require('../middleware/requireAuth');

const { getTodos, createTodo, deleteTodo, completeTodo, undoTodo } = require('../controllers/todoController');

const router = express.Router();

// router.use(requireAuth);

router.get('/:user', getTodos);

router.post('/create', createTodo);

router.delete('/:id', deleteTodo);

router.put('/complete/:id', completeTodo);

router.put('/undo/:id', undoTodo);

module.exports = router;