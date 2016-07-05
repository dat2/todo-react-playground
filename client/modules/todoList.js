import todo, { createEditAction, createCompleteAction } from './todo';
import { list } from 'redux-list';

const {
  reducer: todoList,
  actions: { update: updateTodo, push: pushTodo, pop: popTodo }
} = list(todo);

const editTodo = updateTodo(createEditAction);
const completeTodo = updateTodo(createCompleteAction);

export { editTodo, completeTodo, pushTodo, popTodo };

export default todoList;
