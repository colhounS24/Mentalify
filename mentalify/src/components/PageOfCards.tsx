import "../Stylesheets/PageOfCards.css";
import { Link } from "react-router-dom";

function PageOfCards() {
  const userString = localStorage.getItem("user");
  const user = userString ? JSON.parse(userString) : null;
  return (
    <>
      <div id="title1-bg">
        {user && (
          <p className="display-4" id="homeTitle">
            Welcome {user.firstName}
          </p>
        )}
      </div>

      <div id="card-container1" className="card-container1">
        <div className="card1">
          <div id="cardEducational" className="card-background rounded">
            <div className="card-body1">
              <Link to={"/education"}>
                <a style={{ textDecoration: "none", color: "black" }}>
                  <h2 className="card-headings text3">Education</h2>
                </a>
              </Link>
            </div>
          </div>
        </div>

        <div className="card1">
          <div id="cardTraining" className="card-background rounded">
            <div className="card-body1">
              <Link to={"/training"}>
                <a style={{ textDecoration: "none", color: "black" }}>
                  <h2 className="card-headings text3">Training</h2>
                </a>
              </Link>
            </div>
          </div>
        </div>

        {user && user.email === "seancolhoun08@gmail.com" && (
          <div className="card1">
            <div id="cardNewsLetter" className="card-background rounded">
              <div className="card-body1">
                <Link to={"/newsletter"}>
                  <a style={{ textDecoration: "none", color: "black" }}>
                    <h2 className="card-headings text3">Newsletter</h2>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default PageOfCards;
