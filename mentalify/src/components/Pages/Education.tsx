import NavBarLoggedIn from "../NavBarLoggedIn";
import Footer from "../Footer";
import Brain from "../Brain";
import AboutIllnesses from "../AboutIllnesses";
import MapClinic from "../Map";

function Education() {
  return (
    <>
      <div className="content-container">
        <NavBarLoggedIn></NavBarLoggedIn>
        <Brain></Brain>
        <AboutIllnesses></AboutIllnesses>
        <MapClinic></MapClinic>
      </div>
      <div className="footer--pin">
        <Footer />
      </div>
    </>
  );
}

export default Education;
