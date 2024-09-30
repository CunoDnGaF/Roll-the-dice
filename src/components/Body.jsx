import Header from './Header/Header';
import Main from './Main/Main';
import { useSelector } from 'react-redux';

function Body() {
  const {isSuccessState} = useSelector(state => state.appState);

  return (
    <div className={isSuccessState === '' ? 'body' : isSuccessState.includes('Успех') ? 'body body-success' : 'body body-failure'}>
      <Header />
      <Main />
    </div>
  )
}

export default Body;