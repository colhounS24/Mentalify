import "../Stylesheets/Brain.css"; // Import your CSS file for styling
import { useState } from "react";
import image1 from "../assets/_removal.ai__2fefe7a6-8fc1-408d-93be-d12e90097429-brain-transformed.png";

interface ExplanationsState {
  parietal: boolean;
  occipital: boolean;
  cerebellum: boolean;
  spinal: boolean;
  temporal: boolean;
  frontal: boolean;
}

function Brain() {
  const [explanations, setExplanations] = useState<ExplanationsState>({
    parietal: false,
    occipital: false,
    cerebellum: false,
    spinal: false,
    temporal: false,
    frontal: false,
  });

  function toggleExplanation(id: keyof ExplanationsState) {
    setExplanations((prevExplanations) => ({
      ...prevExplanations,
      [id]: !prevExplanations[id],
    }));
  }

  return (
    <>
      <h1
        style={{
          textAlign: "center",
          padding: "2%",
          margin: "0",
          fontWeight: "bold",
          fontSize: "2.5vw",
          marginBottom: "-1rem",
        }}
      >
        The Brain
      </h1>
      <p
        style={{
          textAlign: "center",
          top: "2rem",
          marginBottom: "2rem",
          fontStyle: "italic",
        }}
      >
        Click on each button to learn about different parts of the brain
      </p>
      <div className="container1" style={{ marginTop: "-7%" }}>
        {" "}
        {/* Adjust the margin-top as needed */}
        <img src={image1} alt="" className="brain" />
        <div className="squaresContainer">
          <div
            className="squareBox"
            id="square1"
            onClick={() => toggleExplanation("frontal")}
          ></div>
          <div
            className="squareBox"
            id="square2"
            onClick={() => toggleExplanation("parietal")}
          ></div>
          <div
            className="squareBox"
            id="square3"
            onClick={() => toggleExplanation("temporal")}
          ></div>
          <div
            className="squareBox"
            id="square4"
            onClick={() => toggleExplanation("occipital")}
          ></div>
          <div
            className="squareBox"
            id="square5"
            onClick={() => toggleExplanation("cerebellum")}
          ></div>
          <div
            className="squareBox"
            id="square6"
            onClick={() => toggleExplanation("spinal")}
          ></div>

          {explanations.frontal && (
            <div
              className="explainDiv rounded"
              id="frontal"
              onClick={() => toggleExplanation("frontal")}
              style={{ backgroundColor: "lightblue" }}
            >
              <h1 className="headingExplain">Frontal Lobe</h1>
              <p>
                The FRONTAL LOBE is for personality and emotions, higher
                thinking skills, like problem solving; and controlling movement.
                It continues to develop until you are in your mid 20s.
              </p>
            </div>
          )}

          {explanations.parietal && (
            <div
              className="explainDiv rounded"
              id="parietal"
              onClick={() => toggleExplanation("parietal")}
              style={{ backgroundColor: "pink" }}
            >
              <h1 className="headingExplain">Parietal Lobe</h1>
              <p>
                The PARIETAL LOBE helps us make sense of the world through our
                senses, understand spatial relationships, focus our attention,
                maintain body awareness, and perform mathematical and spatial
                tasks. It's an essential part of our brain's ability to perceive
                and interact with our environment.
              </p>
            </div>
          )}
          {explanations.occipital && (
            <div
              className="explainDiv rounded"
              id="occipital"
              onClick={() => toggleExplanation("occipital")}
              style={{ backgroundColor: "lightgreen" }}
            >
              <h1 className="headingExplain">Occipital Lobe</h1>
              <p>
                The OCCIPITAL LOBE is crucial for our sense of sight, enabling
                us to perceive, recognize, and understand the visual world. It
                allows us to see and interpret our surroundings, recognize
                objects and people, and navigate our environment safely.
              </p>
            </div>
          )}
          {explanations.cerebellum && (
            <div
              className="explainDiv rounded"
              id="cerebellum"
              onClick={() => toggleExplanation("cerebellum")}
              style={{ backgroundColor: "coral" }}
            >
              <h1 className="headingExplain">Cerebellum</h1>
              <p>
                The CEREBELLUM is essential for coordinating movements,
                maintaining balance, learning new motor skills, supporting
                certain cognitive functions, and potentially regulating
                emotions. It's like the "muscle memory" center of the brain,
                helping us perform tasks smoothly and efficiently.
              </p>
            </div>
          )}
          {explanations.spinal && (
            <div
              className="explainDiv rounded"
              id="spinal"
              onClick={() => toggleExplanation("spinal")}
              style={{ backgroundColor: "lightblue" }}
            >
              <h1 className="headingExplain">Spinal Cord</h1>
              <p>
                The SPINAL CORD serves as a vital communication link between the
                brain and the body, transmitting sensory information from the
                body to the brain and motor commands from the brain to the body.
                It also plays a role in generating reflex responses and is
                protected by the vertebral column and surrounding structures.
              </p>
            </div>
          )}
          {explanations.temporal && (
            <div
              className="explainDiv rounded"
              id="temporal"
              onClick={() => toggleExplanation("temporal")}
              style={{ backgroundColor: "lightgoldenrodyellow" }}
            >
              <h1 className="headingExplain">Temporal Lobe</h1>
              <p>
                The TEMPORAL LOBE is involved in auditory processing, memory
                formation, language comprehension, visual processing, emotional
                regulation, and higher-order cognitive functions. It plays a
                crucial role in our ability to perceive, understand, and
                interact with the world around us.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Brain;
