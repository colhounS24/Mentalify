import "../Stylesheets/PageOfCards.css";

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
              <a
                href="/education"
                style={{ textDecoration: "none", color: "black" }}
              >
                <h2 className="card-headings">Education</h2>
              </a>
            </div>
          </div>
        </div>

        <div className="card1">
          <div id="cardTraining" className="card-background rounded">
            <div className="card-body1">
              <a
                href="/training"
                style={{ textDecoration: "none", color: "black" }}
              >
                <h2 className="card-headings">Training</h2>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PageOfCards;
