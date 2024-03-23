import Footer from "../Footer";
import HomeContent from "../HomeContent";
import HomeIntro from "../HomeIntro";
import NavBar from "../NavBar";
import Quote from "../Quote";
import LoginCardHome from "../LoginCardHome";

function Landing() {
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

export default Landing;
