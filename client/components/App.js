import React from 'react';
import styles from './App.scss';

import Todo from './Todo';

const todos = [
  { text: 'implement todo list', complete: false },
  { text: 'include css modules', complete: true }
];

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

  onThemeChange() {

  }

  render() {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>To Do</h1>

        <div className={styles.list}>
          {
            todos.map((todo, i) => <Todo {...todo} key={i} />)
          }
        </div>
      </div>
    );
  }
}
App.childContextTypes = {
  theme: React.PropTypes.string
};

export default App;
