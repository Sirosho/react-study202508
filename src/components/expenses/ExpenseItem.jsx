import React, {useState} from 'react';
import './ExpenseItem.css';
import ExpenseDate from "./ExpenseDate.jsx";
// css 파일의 이름은 컴포넌트와 동일하게, 경로도 같은 곳에 넣는 것이 관례


const ExpenseItem = ({expense}) => {


    // 상태변수를 사용하는 useState 훅

    /*
    useState훅의 리턴값은 배열이며
    첫번째 요소는 관리할 상태값의 초기값
    두번째 요소는 해당 상태값을 변경할 때 사용하는 setter함수
  */

    const {title, price, date} = expense;

    // 0번 인덱스: 상태값, 1번 인덱스: 상태값을 변경 할 수 있는 세터함수
    const [itemTitle,setItemTitle] = useState(title);
    

    console.log('x', {itemTitle});


// 원화 표기법으로 변환
    const formatPrice = new Intl.NumberFormat('ko-KR').format(price);

// 이벤트 핸들러
    const clickHandler = () => {
        console.log(`변경 전 : ${itemTitle}`);
        // title = "짜장면";
        setItemTitle('짜장면');
        console.log(`변경 후 : ${itemTitle}`);
    }


    return (
        <div className='expense-item'>
            <ExpenseDate expenseDate={date}/>
            <div className='expense-item__description'>
                <h2>{itemTitle}</h2>
                <div className='expense-item__price'>{formatPrice}원</div>
            </div>

            <button id='btn-1' onClick={clickHandler}>버튼1</button>

        </div>
    );
};

export default ExpenseItem;
