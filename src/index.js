import React, {

    useState

} from "react";
import ReactDOM from 'react-dom';
import './index.css';
import styles from './index.module.css';

function Message () {
    const [msg, setMsg] = useState([]);
    const [author, setAuthor] = useState('author');
    const [message, setMessage] = useState('message');
    // useEffect(() => {
    //     if (msg.length !== null)
    //     alert('Сообщение отправлено')
    // }, [msg])
    const addMsg = () => {

        setMsg((msg) => [...msg, {id: `${Math.random().toFixed(3)}` ,author: author , msgText: message}])
        console.log(msg)

    };
    const test = msg.map((obj) => {
        return <span key={obj.id}>
            {obj.msgText}
        </span> ;
    })
    return (
        <div>
            <div>
                <h1>Сообщения</h1>
                <p>{test}<br/></p>
            </div>
            <hr/>

            <input className={styles.test} type="text" name="input1" value={author} onChange={event => setAuthor(event.target.value)} />
            <input className={styles.test} type="text" name="input2" value={message} onChange={event => setMessage(event.target.value)} />
            <button onClick={addMsg}>Отправить сообщение</button>

        </div>
    )
}


ReactDOM.render(
  <React.StrictMode>
     <Message/>
  </React.StrictMode>,
  document.getElementById('root')
);

