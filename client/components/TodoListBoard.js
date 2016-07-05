import React from 'react';
import styles from './TodoListBoard.scss';

import Themed from './Themed';

import TodoList from './TodoList';

class TodoListBoard extends React.Component {

  render() {
    const {
      board,
      pushTodoList,

      editTodoInList,
      completeTodoInList,
      pushTodoInList,
      popTodoInList
    } = this.props;

    return (
      <div>
        <div className={styles.container}>
          {
            board.map((todos,i) => <TodoList key={i} todos={todos} pushTodo={pushTodoInList(i)} popTodo={popTodoInList(i)} editTodo={editTodoInList(i)} completeTodo={completeTodoInList(i)} /> )
          }
        </div>
        <button onClick={() => pushTodoList()}>add list</button>
      </div>
    );
  }
}

export default Themed(TodoListBoard);
