import React from 'react';

import styles from './styles.scss';

class Square extends React.Component {
  render() {
    return <button className={styles.square}>{this.props.value}</button>;
  }
}

export default Square;
