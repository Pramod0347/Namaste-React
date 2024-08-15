const Title = () => (
  <a href="/">
    <img
      className="logo"
      alt="logo"
      src="https://s.tmimgcdn.com/scr/800x500/302600/logo-de-dragon-et-modele-de-logo-de-tete-de-dragon_302668-original.jpg"
    ></img>
  </a>
);

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
