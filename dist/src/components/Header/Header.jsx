import Complexity from './Complexity/Complexity';

function Header() {
  return (
    <header>
      <img className="header-logo" src="./src/assets/d20_logo.png"></img>
      <h1 className="header-title">Roll <br></br> The Dice</h1>
      <Complexity />
    </header>
  )
}

export default Header;