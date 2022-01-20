import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import styles from './index.module.css';

function Message (props) {
    return (
        <h1 className={styles.test}> {props.msg}</h1>
    )
}
const Parent = () => {
    const msg = 'Hello react. This is my first functional component';
    return (
        <Message msg={msg}/>
    )
}

ReactDOM.render(
  <React.StrictMode>
     <Parent/>
  </React.StrictMode>,
  document.getElementById('root')
);

