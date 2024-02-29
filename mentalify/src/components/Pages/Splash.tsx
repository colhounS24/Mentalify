import Footer from "../Footer";
import HomeContent from "../HomeContent";
import HomeIntro from "../HomeIntro";
import NavBar from "../NavBar";
import Quote from "../Quote";
import LoginCardHome from "../LoginCardHome";
import "../../Stylesheets/Splash.css";

function Splash() {
  return (
    <>
      <div className="content-container">
        <NavBar></NavBar>
        <HomeIntro></HomeIntro>
        <HomeContent></HomeContent>
        <Quote></Quote>
        <LoginCardHome></LoginCardHome>
      </div>
      <div className="footer--pin">
        <Footer></Footer>
      </div>
    </>
  );
}

export default Splash;
