import React from 'react';
import './ExpenseItem.css';// css 파일의 이름은 컴포넌트와 동일하게, 경로도 같은 곳에 넣는 것이 관례



const ExpenseItem = ({title, price, date}) => {



    return (
        <div className='expense-item'>
            <div>{date.toLocaleString()}</div>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>{price}원</div>
            </div>
        </div>
    );
};

export default ExpenseItem;
