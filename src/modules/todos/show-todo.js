const { NotFoundError } = require("../../shared/errors");
const Todo = require("./Todo");

const showTodo = async ({ id, user }) => {
    const todo = await Todo.findOne({ _id: id, user});

    if (!todo) {
        throw new NotFoundError("Todo topilmadi.");
    }

    return todo;
};

module.exports = showTodo;
