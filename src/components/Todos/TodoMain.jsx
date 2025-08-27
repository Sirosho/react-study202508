import React from 'react';

import styles from './scss/TodoMain.module.scss';
import TodoItem from './TodoItem';

const TodoMain = ({dataList,deleteData}) => {


    return (
        <ul className={styles['todo-list']}>

            {dataList.map(data => <TodoItem key={data.id} data={data} deleteData={deleteData} />)}


        </ul>
    );
};

export default TodoMain;
