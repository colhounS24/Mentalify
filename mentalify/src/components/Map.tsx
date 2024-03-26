import "../Stylesheets/Map.css";

function MapClinic() {
  return (
    <>
      <div id="mapContainerFlex" style={{ margin: "2rem" }}>
        <div id="titleMap">
          <h4
            style={{
              fontSize: "4vmin",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            Interactive map of memory-supporting clinics in Ireland
          </h4>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d838656.5155587634!2d-7.491117947757545!3d53.422939049518895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1smemory%20clinic!5e0!3m2!1sen!2sie!4v1708038848623!5m2!1sen!2sie"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{
              width: "40vmax  ",
              height: "40vmax",
              boxShadow: "10px 10px 5px 0px rgba(0, 0, 0,0.55)",
              WebkitBoxShadow: "10px 10px 5px 0px rgba(0, 0, 0,0.55)",
              borderRadius: "1%",
            }}
          ></iframe>
        </div>
      </div>
      <div
        id="treatmentText"
        className="rounded"
        style={{
          boxShadow: "10px 10px 5px 0px rgba(0, 0, 0,0.55)",
          WebkitBoxShadow: "10px 10px 5px 0px rgba(0, 0, 0,0.55)",
          margin: "0 auto",
          marginBottom: "10vmin",
          width: "75%",
          maxHeight: "35vmax",
        }}
      >
        <h4 style={{ fontSize: "5vmin" }}>Help and Available Treatments</h4>
        <div>
          <p style={{ fontSize: "3vmin" }}>
            There is currently <strong>no cure</strong> for dementia. But there
            are medicines and other treatments that can help with dementia
            symptoms. Most of the medicines avaialble are to treat Alzheimers
            Disease, they help to temporarily reduce symptoms.{" "}
            <strong>
              The main medicines are: Acetylcholinesterase inhibitors and
              Memantine
            </strong>
            . In the later stages of Dementia, a significant number of people
            will develop{" "}
            <strong>
              "Behavioural and psychological symptoms of dementia (BPSD)."
            </strong>{" "}
            The symptoms of BPSD can include:{" "}
            <strong>
              increased agitation, anxiety, wandering, and hallucianations
            </strong>
            . There are coping strategies that can help with these symptoms but
            also medicine such as risperidone and haloperidol.
          </p>
        </div>
        <div>
          <p style={{ fontSize: "3vmin" }}>
            <br></br>Medicines for dementia symptoms are important, but are only
            one part of the care for a person with dementia. Other treatments
            such as
            <strong> activities and support – for the carer</strong>, too – are
            just as important in helping people to live well with dementia.
            These can consist of visiting <strong>clinics</strong> which are
            designed to help with{" "}
            <strong>
              cognitive stimulation therapy (CST) and cognitive rehabilitation
            </strong>
            . CST involves taking part in group activities and exercises
            designed to improve: memory, problem-solving skills, and language
            ability. Cognitive rehabilitation involves working with a trained
            professional, such as an Occupational Therapist, and a friend or
            relative to achieve a goal. This can be as simple as learning to use
            a mobile phone.
          </p>
        </div>
      </div>
    </>
  );
}

export default MapClinic;
