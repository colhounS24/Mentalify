import "../Stylesheets/index.css";
import image1 from "../assets/pexels-andrea-piacquadio-3768140.jpg";
import image2 from "../assets/pexels-monstera-production-5062815.jpg";
import image3 from "../assets/pexels-rdne-stock-project-8500273.jpg";

function HomeContent() {
  return (
    <div className="container">
      <div
        id="carouselExample"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
        data-bs-interval="8000"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={image1}
              className="d-block w-100 custom-carousel-image rounded"
              alt="First slide"
            />
            <div className="carousel-caption  fw-bold ">
              <h1 className="caroCaption">Inter-Generational Bonding</h1>
              <p className="caroPara">
                Leverage Mentalify's multiplayer platform to compete and learn
                together.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={image2}
              className="d-block w-100 custom-carousel-image rounded"
              alt="Second slide"
            />
            <div className="carousel-caption  fw-bold">
              <h1 className="caroCaption">Improve Cognitive Ability</h1>
              <p className="caroPara">
                Assess your cognitive ability and improve upon it by training.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={image3}
              className="d-block w-100 custom-carousel-image rounded"
              alt="Third slide"
            />
            <div className="carousel-caption  fw-bold">
              <h1 className="caroCaption">Gain Knowledge</h1>
              <p className="caroPara">
                Mentalify provides an abundance of educational materials
                regarding Human Memory Education
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default HomeContent;
