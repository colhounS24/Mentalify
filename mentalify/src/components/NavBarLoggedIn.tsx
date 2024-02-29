import "../Stylesheets/NavLoggedIn.css";

function NavBarLoggedIn() {
  function logOut() {
    localStorage.clear(); // Clear all items from localStorage
  }

  const userString = localStorage.getItem("user");
  const user = userString ? JSON.parse(userString) : null;
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top fs-4"
      id="nav"
      style={{ marginBottom: "20px" }}
    >
      <div className="container-fluid">
        <a
          className="navbar-brand badge text-bg-info "
          href="/"
          onClick={logOut}
        >
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
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/homepage ">
                Homepage
              </a>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto" id="rightList">
            <li className="nav-item">
              {user && (
                <span
                  style={{
                    color: "white",
                    marginRight: "2rem",
                    fontStyle: "italic",
                  }}
                >
                  {user.firstName}
                </span>
              )}
              <a className="btn btn-success" href="/" onClick={logOut}>
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBarLoggedIn;
