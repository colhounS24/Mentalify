import NavBarLoggedIn from "../NavBarLoggedIn";
import Game from "../Game";
import Footer from "../Footer";

function MemoryGame1() {
  return (
    <>
      <div className="content-container">
        <NavBarLoggedIn></NavBarLoggedIn>
        <Game></Game>
      </div>
      <div className="footer--pin">
        <Footer />
      </div>
    </>
  );
}

export default MemoryGame1;
