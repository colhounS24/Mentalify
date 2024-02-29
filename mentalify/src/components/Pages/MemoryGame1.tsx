import NavBarLoggedIn from "../NavBarLoggedIn";
import GoFish from "../GoFish";
import Footer from "../Footer";

function MemoryGame1() {
  return (
    <>
      <div className="content-container">
        <NavBarLoggedIn></NavBarLoggedIn>
        <GoFish></GoFish>
      </div>
      <div className="footer--pin">
        <Footer />
      </div>
    </>
  );
}

export default MemoryGame1;
