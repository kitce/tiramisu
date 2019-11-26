import React from 'react';
import styles from './styles.scss';

interface IProps {
  message: string;
}

const App: React.FunctionComponent<IProps> = (props) => {
  return (
    <div className={styles.app}>
      {props.message}
    </div>
  );
};

export default App;
