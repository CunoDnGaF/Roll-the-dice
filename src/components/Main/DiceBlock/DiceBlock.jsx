import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from "react";
import { setIsSuccessState, setComplexityErrorState } from '../../../redux/slice/appStateSlice';

function DiceBlock() {
  const dispatch = useDispatch();
  const {complexityNumberlState} = useSelector(state => state.appState);
  const [diceFace, setDiceFace] = useState(20);
  const [diceState, setDiceState] = useState('');
  const [isSuccess, setIsSuccess] = useState('');

  const onDiceClick = function() {
    if(complexityNumberlState !== 0) {
      setIsSuccess('');
      setDiceState('rolling');
      setTimeout(() => {
        getRandomDiceFace();
        setDiceState('shaking');
      }, 3000);
      setTimeout(() => {
        setDiceState('');
      }, 3700);
    } else {
      dispatch(setComplexityErrorState(true));
    }
    
  }

  const getRandomDiceFace = function() {
    let randomNumber = Math.floor(Math.random() * (20 - 1 + 1)) + 1;
    let isSuccess = '';

    if (randomNumber > complexityNumberlState - 1) {
      isSuccess = 'Успех';
      }
    if(randomNumber < complexityNumberlState) {
        isSuccess = 'Неудача';
      }
    if(randomNumber === 1) {
        isSuccess = 'Критический провал';
      }
    if(randomNumber === 20) {
        isSuccess = 'Критический Успех';
      }

    setDiceFace(randomNumber);
    setIsSuccess(isSuccess);
  }  

  useEffect(() => {
    setIsSuccess('');
  }, [complexityNumberlState]);

  useEffect(() => {
    dispatch(setIsSuccessState(isSuccess));
  }, [isSuccess]);

  return (
    <div className='dice-block'>
      <span className={isSuccess === '' ? 'result-content' : 'result-content rc-active'}>
        {isSuccess}
      </span>
      <div className={diceState === 'rolling' ? 'dice drolling' : diceState === 'shaking' ? 'dice dshaking' : 'dice'} onClick={() => onDiceClick()}>
        <span className='dice-face'>{diceState === 'rolling' ? '' : diceFace}</span>
      </div>
    </div>
  )
}

export default DiceBlock;