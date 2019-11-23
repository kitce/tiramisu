import React from 'react';
import styles from './styles.scss';

interface Props {
  message: string
}

const App = (props: Props) => {
  return (
    <div className={styles.app}>
      {props.message}
    </div>
  );
};

export default App;
