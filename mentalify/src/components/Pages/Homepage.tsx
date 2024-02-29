import "../../Stylesheets/Homepage.css";
import NavBarLoggedIn from "../NavBarLoggedIn";
import Footer from "../Footer";
import PageOfCards from "../PageOfCards";

function Homepage() {
  return (
    <>
      <div className="content-container">
        <NavBarLoggedIn></NavBarLoggedIn>
        <PageOfCards></PageOfCards>
      </div>
      <div className="footer--pin">
        <Footer />
      </div>
    </>
  );
}

export default Homepage;
