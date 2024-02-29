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
              <a className="btn btn-success" href="/login">
                Login
              </a>
            </li>
            <li className="nav-item">
              <a className="btn btn-primary" href="/signup">
                Signup
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
