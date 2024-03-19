import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top fs-4"
      id="nav"
      style={{ marginBottom: "20px" }}
    >
      <div className="container-fluid">
        <a className="navbar-brand badge text-bg-info " href="/">
          Mentalify
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto" style={{ gap: "0.35rem" }}>
            <li className="nav-item">
              <Link to={"/login"}>
                <button className="btn btn-success">Login</button>
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/signup"}>
                <button className="btn btn-primary">Signup</button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
