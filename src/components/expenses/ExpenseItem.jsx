import React from 'react';
import './ExpenseItem.css';// css 파일의 이름은 컴포넌트와 동일하게, 경로도 같은 곳에 넣는 것이 관례

const ExpenseItem = () => {
    return (
        <div className='expense-item'>
            <div>2025-08-24</div>
            <div className='expense-item__description'>
                <h2>점심밥</h2>
                <div className='expense-item__price'>10000원</div>
            </div>
        </div>
    );
};

export default ExpenseItem;
