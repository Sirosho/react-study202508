import React from 'react';
import './ExpenseItem.css';
import ExpenseDate from "./ExpenseDate.jsx";
// css 파일의 이름은 컴포넌트와 동일하게, 경로도 같은 곳에 넣는 것이 관례


const ExpenseItem = ({expense}) => {


    const {title, price, date} = expense;

// 이벤트 핸들러
    const clickHandler = () => {
        alert('click!!');
    }


    return (
        <div className='expense-item'>
            <ExpenseDate expenseDate={date}/>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>{price}원</div>
            </div>

            <button id='btn-1' onClick={clickHandler}>버튼1</button>
            <button id='btn-2' onDoubleClick={() => alert('더블클릭!')}>버튼2</button>
        </div>
    );
};

export default ExpenseItem;
