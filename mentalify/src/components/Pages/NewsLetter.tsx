import NavBarLoggedIn from "../NavBarLoggedIn";
import Footer from "../Footer";
import TextInput from "../TextInput";

function NewsLetter() {
  return (
    <>
      <div className="content-container">
        <NavBarLoggedIn></NavBarLoggedIn>
        <TextInput></TextInput>
      </div>
      <div className="footer--pin">
        <Footer />
      </div>
    </>
  );
}

export default NewsLetter;
