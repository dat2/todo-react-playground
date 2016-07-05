import React from 'react';
import styles from './TodoList.scss';

import Themed from './Themed';

import Todo from './Todo';

class TodoList extends React.Component {
  render() {
    const { theme, todos, pushTodo, popTodo, editTodo, completeTodo } = this.props;

    return (
      <div>
        <div className={styles.list}>
          {
            todos.map((todo, i) => <Todo text={todo.text} isComplete={todo.completed} complete={completeTodo(i)} edit={editTodo(i)} key={i} />)
          }
        </div>
        <button onClick={() => pushTodo()}>add todo</button>
        <button onClick={() => popTodo()}>remove last todo</button>
      </div>
    );
  }
}

export default Themed(TodoList);
