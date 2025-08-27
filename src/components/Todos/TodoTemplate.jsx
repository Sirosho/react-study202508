import React, {useState} from 'react';
import TodoHeader from './TodoHeader';
import styles from './scss/TodoTemplate.module.scss';
import TodoMain from './TodoMain';
import TodoInput from './TodoInput';


const todoData = [
    {
        id: Math.random(),
        content: '학원 가기',
        isDone: false
    },
    {
        id: Math.random(),
        content: '집에 가기',
        isDone: false
    },
    {
        id: Math.random(),
        content: '야구이기기',
        isDone: false
    }
]


const TodoTemplate = () => {

    const [data, setData] = useState(todoData);


    const deleteData = (id) => {

        let updatedData = data.filter(prev => prev.id !== id);

        setData(updatedData);
    }

    return (
        <div className={styles.TodoTemplate}>
            <TodoHeader/>
            <TodoMain dataList={data} deleteData={deleteData}/>
            <TodoInput/>
        </div>
    );
};

export default TodoTemplate;
