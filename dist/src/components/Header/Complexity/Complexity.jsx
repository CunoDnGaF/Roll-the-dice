import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setComplexityNumberlState, setComplexityErrorState } from '../../../redux/slice/appStateSlice';

function Complexity() {
  const dispatch = useDispatch();
  const [complexityLevel, setComplexityLevel] = useState('');
  const [complexityNumber, setComplexityNumber] = useState(0);
  const {complexityErrorState} = useSelector(state => state.appState);

  const onComplexityLevelClick = function(level) {
    if (complexityLevel === level) {
      setComplexityLevel('');
      setComplexityNumber(0);
    } else {
      setComplexityLevel(level);
      setComplexityNumber(getRandomComplexityNumber(level));
    }
  }

  const onComplexityBtnClick = function(value) {
    if (value === 'plus') {
      setComplexityNumber(complexityNumber + 1);
    } else {
      setComplexityNumber(complexityNumber - 1);
    }
  }

  const getRandomComplexityNumber = function(level) {
    if(level === 'easy') {
      return Math.floor(Math.random() * (10 - 5 + 1)) + 5;
    }
    if(level === 'medium') {
      return Math.floor(Math.random() * (15 - 10 + 1)) + 10;
    }
    if(level === 'hard') {
      return Math.floor(Math.random() * (20 - 15 + 1)) + 15;
    }
    if(level === 'impossible') {
      return Math.floor(Math.random() * (25 - 20 + 1)) + 20;
    }
  }  

  useEffect(() => {
    if(complexityNumber !== 0) {
      dispatch(setComplexityErrorState(null));
    }
    dispatch(setComplexityNumberlState(complexityNumber));
  }, [complexityNumber]);

  return (
    <div className="complexity">
      <h2 className="complexity-header">Сложность проверки</h2>
      <div className="complexity-body">
        <div className={complexityLevel === 'easy' ? "complexity-level cl-active" : "complexity-level"} onClick={() => onComplexityLevelClick('easy')}>
          <h3>Просто (5-10)</h3>
          <span>Справится даже ребёнок</span>
        </div>
        <div className={complexityLevel === 'medium' ? "complexity-level cl-active" : "complexity-level"} onClick={() => onComplexityLevelClick('medium')}>
          <h3>Средне (10-15)</h3>
          <span>Нужны определённые навыки</span>
        </div>
        <div className={complexityLevel === 'hard' ? "complexity-level cl-active" : "complexity-level"} onClick={() => onComplexityLevelClick('hard')}>
          <h3>Сложно (15-20)</h3>
          <span>Необходимо обладать мастерством</span>
        </div>
      </div>
      <div className={complexityLevel === 'impossible' ? "complexity-impossible ci-active" : "complexity-impossible"} onClick={() => onComplexityLevelClick('impossible')}>Невозможно (20-25)</div>
      {complexityNumber === 0 
      ? <div className={complexityErrorState ? 'error-banner cn-active' : 'error-banner'}>
          выберите сложность проверки
        </div>
      : <div className={complexityNumber === 0 ? 'complexity-number' : 'complexity-number cn-active'}>
          <span>{complexityNumber}</span>
          <div className="complexity-btns">
            <button className="complexity-btn" onClick={()=>onComplexityBtnClick('plus')}><img src='./src/assets/plus.png'></img></button>
            <button className="complexity-btn" onClick={()=>onComplexityBtnClick('minus')}><img src='./src/assets/minus.png'></img></button>
          </div>
        </div>
      }
    </div>
  )
}

export default Complexity;