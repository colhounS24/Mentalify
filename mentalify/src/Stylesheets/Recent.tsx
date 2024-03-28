function Recent() {
  return (
    <>
      <div
        className="rounded"
        style={{
          background:
            "linear-gradient(to bottom, rgb(117, 221, 235), rgb(205, 242, 248))",
          backgroundRepeat: "no-repeat",
          textAlign: "center",
          width: "75%",
          margin: "0 auto",
          overflow: "auto",
          boxShadow: "10px 10px 5px 0px rgba(0, 0, 0,0.55)",
          WebkitBoxShadow: "10px 10px 5px 0px rgba(0, 0, 0,0.55)",
          maxHeight: "35vmax",
        }}
      >
        <h1 style={{ fontSize: "5vmin", padding: "2vmin" }}>
          Recent Developments
        </h1>
        <p style={{ fontSize: "3vmin" }}>
          There have been a number of recent developments and advancements
          regarding the field of memory-related illnesses. The use of{" "}
          <strong>Artificial Intelligence </strong> to aid medical professionals
          with the diagnosis and treatment of Alzheimer's is understood by many
          to be the future of the managment of the illness.
          <br></br>
          <br></br>
          Furthering this, the FDA have recently approved{" "}
          <strong>"lecanemab"</strong>, an anti-amyloid antibody. This is used
          for treating mild cognitive impairment. This approval represents a
          significant breakthrough in dementia treatment.
          <br></br>
          <br></br>
          Locally in Ireland, the Government announced during September of 2023
          that there will be <strong>10 new Memory Assessment</strong> and
          Support Services to be built on the island. This will be located in:
          Mayo, Sligo, Waterford, Wexford, Cavan/Monaghan, Donegal, Kerry,
          Limerick, Westmeath, and Galway. For more complicated cases of
          dementia, new staff are being recruited to the exisiting Regional
          Specialist Memory Clinics in St. James's Hospital and Tallaght
          University Hospital.
        </p>
      </div>
      <div
        className="rounded"
        style={{
          background:
            "linear-gradient(to bottom, rgb(117, 221, 235), rgb(205, 242, 248))",
          backgroundRepeat: "no-repeat",
          textAlign: "center",
          width: "30%",
          margin: "0 auto",
          overflow: "auto",
          marginTop: "3vmax",
          marginBottom: "2vmax",
          boxShadow: "10px 10px 5px 0px rgba(0, 0, 0,0.55)",
          WebkitBoxShadow: "10px 10px 5px 0px rgba(0, 0, 0,0.55)",
        }}
      >
        <h1 style={{ fontSize: "5vmin" }}>Useful Links</h1>
        <p style={{ fontSize: "3vmin" }}>
          <a href="https://dementia.ie/"> Dementia Ireland</a>
          <br></br>
          <a href="https://alzheimer.ie/about-dementia/"> Alzheimer Ireland</a>
          <br></br>
          <a href="https://www.understandtogether.ie/">Understand Together</a>
          <br></br>
          <a href="https://www.hse.ie/eng/services/publications/olderpeople/model-of-care-for-dementia-in-ireland.pdf">
            HSE Information
          </a>
        </p>
      </div>
      <div
        className="rounded"
        style={{
          background:
            "linear-gradient(to bottom, rgb(117, 221, 235), rgb(205, 242, 248))",
          backgroundRepeat: "no-repeat",
          textAlign: "center",
          width: "40%",
          margin: "0 auto",
          overflow: "auto",
          marginTop: "3vmax",
          marginBottom: "2vmax",
          boxShadow: "10px 10px 5px 0px rgba(0, 0, 0,0.55)",
          WebkitBoxShadow: "10px 10px 5px 0px rgba(0, 0, 0,0.55)",
        }}
      >
        <h1 style={{ fontSize: "5vmin" }}>Interesting Papers</h1>
        <p style={{ fontSize: "3vmin" }}>
          <a href="https://doi.org/10.1017/IPM.2018.31">
            {" "}
            Estimates of the prevalence, incidence and severity of dementia in
            Ireland.
          </a>
          <br></br>
          <br></br>
          <a href="https://doi.org/10.1093/GERONA/GLAB043">
            {" "}
            Prevalence of Memory-Related Diagnoses Among U.S. Older Adults With
            Early Symptoms of Cognitive Impairment.
          </a>
          <br></br>
          <br></br>
          <a href="https://doi.org/10.1159/000363702">
            The neurobiological bases of memory formation: from physiological
            conditions to psychopathology.{" "}
          </a>
        </p>
      </div>
    </>
  );
}

export default Recent;
