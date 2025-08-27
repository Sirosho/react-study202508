import React, {useState} from 'react';
import {MdDelete, MdDone} from 'react-icons/md';

import styles from './scss/TodoItem.module.scss';

const TodoItem = ({data , deleteData}) => {

    const {id, content, isDone} = data;

    const {text, remove, 'todo-list-item': itemStyle, 'check-circle': checkCircle} = styles;


    const [isComplete, setComplete] = useState(isDone);

    const circleActive = `${checkCircle} ${styles.active}`
    const textFinish = `${text} ${styles.finish}`

    const changeComplete = () => {
        !isComplete ? setComplete(true) : setComplete(false)
    }




    return (
        <li className={itemStyle}>
            <div className=
                     {!isComplete ? checkCircle : circleActive}
                 onClick={changeComplete}>
                <MdDone/>
            </div>

            <span className={!isComplete ? text : textFinish}>{content}</span>

            <div className={remove} onClick={() => deleteData(id)}>
                <MdDelete/>
            </div>
        </li>
    );
};

export default TodoItem;
