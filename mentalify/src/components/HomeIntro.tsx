import "../Stylesheets/HomeIntro.css";
function HomeIntro() {
  return (
    <div id="main">
      <p className="display-6 text-center mainT">Welcome to Mentalify</p>
      <div className="container5">
        <div className="card text-center topCard">
          <div className="card-body">
            <h6 className="card-subtitle mb-2 text-body-secondary cardT">
              What Is Mentalify?
            </h6>
            <p className="card-text descrips">
              Mentalify is a platform for improvement. It allows users to access
              an abundance of materials to further their knowledge regarding the
              topic of human memory education, specifically the diseases that
              can arise, their symptoms, and current treatments that are
              available.
            </p>
          </div>
        </div>

        <div className="card text-center topCard">
          <div className="card-body">
            <h6 className="card-subtitle mb-2 text-body-secondary cardT">
              How Can Mentalify Help?
            </h6>
            <p className="card-text descrips">
              Mentalify allows for users to play a game that has been
              clinically-proven to reduce cognitive-decline and improve memory
              abilities. Users can set their own highscore, compare it with
              their friends, and then aim to beat it. This encourages users to
              return to Mentalify and to subconsciously better themselves.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeIntro;
