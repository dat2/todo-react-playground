import React from 'react';
import styles from './App.scss';

import TodoListBoardContainer from '../containers/TodoListBoardContainer';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      theme: 'light'
    };
  }

  getChildContext() {
    return { theme: this.state.theme };
  }

  render() {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>To Do</h1>

        <div className={styles.lists}>
          <TodoListBoardContainer />
        </div>
      </div>
    );
  }
}
App.childContextTypes = {
  theme: React.PropTypes.string
};

export default App;
