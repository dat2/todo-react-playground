import React from 'react';
import styles from './Todo.scss';

import Themed from './Themed';

class Todo extends React.Component {

  render() {
    const { text, isComplete, theme, edit, complete } = this.props;

    return (
      <div className={`${styles.container} ${isComplete ? styles.complete : ''}`}>
        <input type='checkbox' checked={isComplete} onChange={e => complete(e.target.checked)}/>
        <input className={styles.text} placeholder='bruh put something in here' value={text} onChange={e => edit(e.target.value)}/>
      </div>
    );
  }
}

export default Themed(Todo);
