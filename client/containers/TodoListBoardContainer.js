import board, * as boardActions from '../modules/todoListBoard';
import * as todoListActions from '../modules/todoList';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const mapStateToProps = ({ board }) => ({ board });

const pushTodoInList = boardActions.updateTodoList(todoListActions.pushTodo);
const popTodoInList = boardActions.updateTodoList(todoListActions.popTodo);
const editTodoInList = (listIndex,todoIndex,...args) => boardActions.updateTodoList(todoListActions.editTodo)(listIndex, todoIndex, ...args);
const completeTodoInList = (listIndex, todoIndex, ...args) => boardActions.updateTodoList(todoListActions.completeTodo)(listIndex, todoIndex, ...args);

const mapDispatchToProps = dispatch => ({
  editTodoInList: l => t => (...args) => dispatch(editTodoInList(l,t,...args)),
  completeTodoInList: l => t => v => dispatch(completeTodoInList(l,t,v)),
  pushTodoInList: i => () => dispatch(pushTodoInList(i)),
  popTodoInList: i => () => dispatch(popTodoInList(i)),

  pushTodoList: () => dispatch(boardActions.pushTodoList())
});

import TodoListBoard from '../components/TodoListBoard';
export default connect(mapStateToProps, mapDispatchToProps)(TodoListBoard);
