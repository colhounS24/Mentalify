import NavBar from "../NavBar";
import Footer from "../Footer";
import "../../Stylesheets/NotFound.css";

function NotFound() {
  return (
    <>
      <div className="content-container">
        <NavBar></NavBar>
        <div className="card text-center w-50 m-auto" id="NotFoundCard">
          <div className="card-body">
            <h6 className="card-subtitle mb-2 text-body-secondary">
              Oops this page could not be found!
            </h6>
            <p className="card-text">
              Click the button below to return to the homepage!
            </p>
            <a className="btn btn-primary" href="/">
              Return Home
            </a>
          </div>
        </div>
      </div>
      <div className="footer--pin">
        <Footer />
      </div>
    </>
  );
}

export default NotFound;
