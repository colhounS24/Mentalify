import NavBarLoggedIn from "../NavBarLoggedIn";
import Footer from "../Footer";
import Brain from "../Brain";
import AboutIllnesses from "../AboutIllnesses";
import MapClinic from "../Map";
import Recent from "../../Stylesheets/Recent";

function Education() {
  return (
    <>
      <div className="content-container">
        <NavBarLoggedIn></NavBarLoggedIn>
        <Brain></Brain>
        <AboutIllnesses></AboutIllnesses>
        <MapClinic></MapClinic>
        <Recent></Recent>
      </div>
      <div className="footer--pin">
        <Footer />
      </div>
    </>
  );
}

export default Education;
