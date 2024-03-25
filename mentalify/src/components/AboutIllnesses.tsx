import "../Stylesheets/AboutIllnesses.css";

function AboutIllnesses() {
  return (
    <>
      <div>
        <h2 id="aboutText" style={{ fontSize: "5vmin" }}>
          Types of Human Memory Related Diseases
        </h2>
        <p
          style={{
            textAlign: "center",
            fontStyle: "italic",
            fontSize: "3vmin",
          }}
        >
          Below are the 5 most common types of Dementia in Ireland
        </p>
      </div>
      <div
        className="accordion"
        id="accordionPanelsStayOpenExample"
        style={{
          width: "70%",
          margin: "0 auto",
          textAlign: "center",
          boxShadow: "10px 10px 5px 0px rgba(0, 0, 0,0.55)",
          WebkitBoxShadow: "10px 10px 5px 0px rgba(0, 0, 0,0.55)",
        }}
      >
        <div
          className="accordion-item"
          style={{ backgroundColor: "rgba(117, 221, 235,0.6)" }}
        >
          <h2 className="accordion-header" id="panelsStayOpen-headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
              style={{
                backgroundColor: "rgb(117, 221, 235)",
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "3.5vmin",
              }}
            >
              Alzheimer's Disease
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="panelsStayOpen-headingOne"
          >
            <div className="accordion-body textA">
              <strong>Alzheimer's Disease</strong> makes up the majority of
              dementia cases in older people. It often develops slowly, over
              several years. Early signs usually include difficulty in forming
              new memories for recent events, difficulty finding the right
              words, figuring out problems, making decisions based on judging
              distances and finding the way to familiar places.
            </div>
          </div>
        </div>
        <div
          className="accordion-item"
          style={{ backgroundColor: "rgba(163, 221, 231,0.6)" }}
        >
          <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
              style={{
                backgroundColor: "rgb(163, 221, 231)",
                fontWeight: "bold",
                fontSize: "3.5vmin",
              }}
            >
              Vascular Dementia
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingTwo"
          >
            <div className="accordion-body textA">
              <strong>Vascular Dementia</strong> is another common type of
              dementia, but is not as well known as Alzheimer's Disease. It can
              occur suddenly, for example, following a stroke affecting major
              blood vessels. It can also progress slowly through a series of
              small strokes or damage to blood vessels in the brain. The signs
              and symptoms are very similar to Alzheimer's, but a few notable
              symptoms are: memory loss, disorientation, problems with
              communication, and changes in how the person walks.
            </div>
          </div>
        </div>
        <div
          className="accordion-item"
          style={{ backgroundColor: "rgba(117, 221, 235,0.6)" }}
        >
          <h2 className="accordion-header" id="panelsStayOpen-headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseThree"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseThree"
              style={{
                backgroundColor: "rgb(117, 221, 235)",
                fontWeight: "bold",
                fontSize: "3.5vmin",
              }}
            >
              Lewy Body Disease
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingThree"
          >
            <div className="accordion-body textA">
              <strong>Lewy Body Disease</strong> affects peoples movements,
              people with the disease may be prone to shuffling and falls. The
              symptoms are similair to Parkinson's Disease, however people with
              Lewy Body Disease may experience periods of severe confusion. They
              can have hallucinations, and their swallowing and sleep patterns
              might become affected.
            </div>
          </div>
        </div>
        <div
          className="accordion-item"
          style={{ backgroundColor: "rgba(163, 221, 231,0.6)" }}
        >
          <h2 className="accordion-header" id="panelsStayOpen-headingFour">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseFour"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseFour"
              style={{
                backgroundColor: "rgb(163, 221, 231)",
                fontWeight: "bold",
                fontSize: "3.5vmin",
              }}
            >
              Fronto-temporal Dementia
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingFour"
          >
            <div className="accordion-body textA">
              <strong>Fronto-temporal Dementia</strong> can affect peoples
              personality, behaviour, and language function. Some cases of FTD
              are linked to motor neurone disease. With FTD, the early symptoms
              vary, depending on which part of the brain is affected. These
              symtpoms can include: changes in personality, changes in eating
              patterns, lack of personal awareness, lack of social awareness,
              and difficulties speaking and understanding others. It is more
              common in younger people, aged between 45-65
            </div>
          </div>
        </div>
        <div
          className="accordion-item"
          style={{ backgroundColor: "rgba(117, 221, 235,0.6)" }}
        >
          <h2 className="accordion-header" id="panelsStayOpen-headingFive">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseFive"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseFive"
              style={{
                backgroundColor: "rgb(117, 221, 235)",
                fontWeight: "bold",
                fontSize: "3.5vmin",
              }}
            >
              Early/Younger Onset Dementia
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseFive"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingFive"
          >
            <div className="accordion-body textA">
              <strong>Early/Younger Onset Dementia</strong> refers to the fact
              that although Dementia usually affects older people, it can also
              affect younger people too. Most people with Early Onset Dementia
              are in their 40's or 50's. As doctors don't typically expect
              Dementia in this cohort of people, getting a diagnosis can be
              difficult. People with a family history of Dementia may develop
              Dementia at an early age. Early Onset Dementia can affect those
              with another health condition such as Parkinson’s disease,
              multiple sclerosis, Huntington’s disease, HIV or AIDS.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutIllnesses;
