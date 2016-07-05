import todoList from './todoList';
import { list } from 'redux-list';

const {
  reducer: board,
  actions: { push: pushTodoList, pop: popTodoList, update: updateTodoList, insert: insertTodoList, remove: removeTodoList }
} = list(todoList);

export { pushTodoList, popTodoList, updateTodoList, insertTodoList, removeTodoList };
export default board;
