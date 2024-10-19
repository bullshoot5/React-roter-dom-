import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="navbar bg-body-tertiary text-dark">
      <div className="container-fluid">
        <span className="navbar-brand fs-3">
          <Link to={"/"}>Router DOM</Link>
        </span>

        <nav className="d-flex gap-2">
          <NavLink to={"/"}>Anasayfa</NavLink>
          <NavLink to={"/ürünler"}>Ürünler</NavLink>
          <NavLink to={"/ekstra"}>Ekstra</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
