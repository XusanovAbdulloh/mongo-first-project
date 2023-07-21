const User = require("../users/User");
const Todo = require("./Todo");

const addTodo = async (data) => {
  const result = await Todo.create(data);

  await User.findByIdAndUpdate(data.user, { $push: { todos: result._id } });

  return result;
};

module.exports = addTodo;