import "../Stylesheets/LoginCardHome.css";
import { Link } from "react-router-dom";
function LoginCardHome() {
  return (
    <div className="card" id="cont" style={{ margin: "0 auto" }}>
      <div className="card-body ">
        <h3 className="card-title text-center loginTitle">
          Start your Journey today
        </h3>
        <div id="buttons">
          <Link to={"/login"}>
            <a className="btn btn-success loginButtons">Login</a>
          </Link>
          <Link to={"/signup"}>
            <a className="btn btn-primary loginButtons">Signup</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginCardHome;
