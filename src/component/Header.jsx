function Header(props) {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-container-bg">
          <img src={props.image} alt="Header Background Image" />
        </div>
        <div className="header-content">
          <h2>{props.title}</h2>
          <p>{props.children}</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
