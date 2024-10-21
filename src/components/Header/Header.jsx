import Complexity from './Complexity/Complexity';

function Header() {
  return (
    <header>
      <div className="header-logo-container">
        <img className="header-logo" src="./src/assets/d20_logo.png"></img>
        <h1 className="header-title">Roll <br></br> The Dice</h1>
      </div>
      <Complexity />
    </header>
  )
}

export default Header;