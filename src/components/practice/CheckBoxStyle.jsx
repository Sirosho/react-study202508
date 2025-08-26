import React, {useState} from 'react';
import './CheckBoxStyle.css';

const CheckBoxStyle = () => {

    /*
      1. input[checkbox]에 change이벤트가 걸려서
      2. check상태가 바뀔 때마다 상태변수를 논리값으로 업데이트하여
      3. label의 클래스를 유동적으로 변경해야함.
    */


    const [isChecked, setIsChecked] = useState('checked');

    const onClick = () => {
        if (isChecked === 'checked') {
            setIsChecked('unchecked')
        } else if (isChecked === 'unchecked') {
            setIsChecked('checked');
        }

    };

    return (
        <div className='checkbox-container'>
            <input
                type='checkbox'
                id='styled-checkbox'
                onClick={onClick}
            />
            <label className={isChecked} htmlFor='styled-checkbox'>Check me!</label>
        </div>
    );
};
// return 문에 상태변수가 들어있어야 랜더링에 반영이 됨.
export default CheckBoxStyle;