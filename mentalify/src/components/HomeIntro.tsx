import "../Stylesheets/HomeIntro.css";
function HomeIntro() {
  return (
    <div id="main">
      <p className="display-6 text-center " id="main-para">
        Welcome to Mentalify
      </p>
      <div className="container">
        <div className="card text-center" id="topCard">
          <div className="card-body">
            <h6 className="card-subtitle mb-2 text-body-secondary">
              What Is Mentalify?
            </h6>
            <p className="card-text">
              Mentalify is a platform for improvement. It allows users to access
              an abundance of materials to further their knowledge regarding the
              topic of human memory education, specifically the diseases that
              can arise, their symptoms, and current treatments that are
              available.
            </p>
          </div>
        </div>

        <div className="card text-center" id="bottomCard">
          <div className="card-body">
            <h6 className="card-subtitle mb-2 text-body-secondary">
              How Can Mentalify Help?
            </h6>
            <p className="card-text">
              Mentalify allows users to assess their current cognitive ability
              through a test, gauging their ability in various categories.
              Furthering this, Mentalify promotes training to help users improve
              and sharpen their cognitive abilities whilst also providing games
              that can be played against your peers to encourage training
              together.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeIntro;
