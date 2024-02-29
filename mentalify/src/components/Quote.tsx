import "../Stylesheets/Quote.css";
function Quote() {
  return (
    <div
      className="card"
      style={{ backgroundColor: "rgba(255, 255, 255, 0.0)", border: "none" }}
    >
      <div className="card-body">
        <blockquote className="blockquote mb-0 text-center" id="test">
          <p>"We have to start teaching ourselves to not be afraid."</p>
          <footer className="blockquote-footer">
            William Faulkner
            <cite title="Source Title"> American Writer on Alzheimer's</cite>
          </footer>
        </blockquote>
      </div>
    </div>
  );
}

export default Quote;
