import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="left-header">
        <span>Home</span>
        <span>About</span>
        <span>Shop</span>
      </div>
      <span className="right-header btn">cart</span>
    </header>
  );
};

export default Header;
