import "../Stylesheets/LoginCardHome.css";
function LoginCardHome() {
  return (
    <div className="card" id="cont" style={{ margin: "0 auto" }}>
      <div className="card-body">
        <h5 className="card-title text-center">Start your Journey today</h5>
        <div id="buttons">
          <a href="/login" className="btn btn-success ">
            Login
          </a>
          <a href="/signup" className="btn btn-primary">
            Signup
          </a>
        </div>
      </div>
    </div>
  );
}

export default LoginCardHome;
