import React from 'react';
import styles from './Todo.scss';

import Themed from './Themed';

class Todo extends React.Component {
  render() {
    const { text, complete, theme } = this.props;
    console.log(theme);

    return (
      <div className={`${styles.container} ${complete ? styles.complete : ''}`}>
        <input type='checkbox' />
        <p className={styles.text}>{ text }</p>
      </div>
    );
  }
}

export default Themed(Todo);
