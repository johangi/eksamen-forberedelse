const Todo = require('../models/todoModel');
const mongoose = require('mongoose');

const errorMssg = 'Invalid object ID';

const getTodos = async (req, res) => {
    const { user } = req.params;

    try {
        const todos = await Todo.find({ owner: user }).sort({ createdAt: -1 });

        res.status(200).json({ todos });
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const createTodo = async (req, res) => {
    const { owner, text } = req.body;

    let empty = false;

    if (!text) {
        empty = true;
        return res.status(400).json({ error: 'Please enter a todo', empty })
    }

    try {
        const todo = await Todo.create({ owner, text, complete: false });

        res.status(200).json(todo);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const deleteTodo = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json(errorMssg);
    }

    const todo = await Todo.findOneAndDelete({ _id: id });

    if (!todo) {
        return res.status(400).json({ error: 'todo does not exist' });
    }

    res.status(200).json(todo);
}

const completeTodo = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json(errorMssg);
    }

    try {
        const todo = await Todo.findOneAndUpdate({ _id: id }, { complete: true }, { new: true });

        res.status(200).json(todo);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const undoTodo = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json(errorMssg);
    }

    try {
        const todo = await Todo.findOneAndUpdate({ _id: id }, { complete: false }, { new: true });

        res.status(200).json(todo);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const updateTodo = async (req, res) => {
    const id = req.params.id;
    const { todo } = req.body;

    console.log(todo);

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: errorMssg, noId: true });
    }

    if (!todo) {
        return res.status(400).json({ error: 'please fill in all fields', empty: true})
    }

    try {
        const newTodo = await Todo.findOneAndUpdate({ _id: id }, { text: todo }, { new: true });

        res.status(200).json({todo: newTodo});
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

module.exports = {
    getTodos,
    createTodo,
    deleteTodo,
    completeTodo,
    undoTodo,
    updateTodo
}