import chartImg from "../assets/images/chart2.png";

export default function Home() {
  return (
    <div>

        <section className="container hero-section px-5 pt-5">
          <div className="row align-items-center justify-content-between pt-5">
            <div className="col-md-5 mb-4 mb-md-0">
              <h1 className="fw-bold mb-3">
                We Build & Launch <br /> Products That Scale
              </h1>
              <p className="mb-3 ">
                We provide modern web solutions, specializing in full <br />
                stack development using Laravel, Vue, and React.
              </p>
              <a
                className="btn btn-orange fw-medium"
                data-bs-toggle="modal"
                data-bs-target="#contactModal"
                href="#"
              >
                Get Started
              </a>
            </div>

            <div className="col-md-7 text-center">
              <img
                src={chartImg}
                alt="chart icon"
                className="img-fluid object-fit-cover"
                style={{ width: "85%" }}
              />
            </div>
          </div>
        </section>

        <section className="container py-4 services-section mb-5">
          <h2 className="text-center mb-5 fw-bold">Our Services</h2>
          <div className="row g-4">
            <div className="col-lg-3 col-sm-6 col-10 mx-auto">
              <div className="service-card text-center py-4 px-2 shadow rounded-4">
                <i className="fa-solid fa-briefcase"></i>
                <h6>Web Development</h6>
                <p>
                  We build fast, secure, and scalable web apps using Laravel,
                  Vue, and React.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-10 mx-auto">
              <div className="service-card text-center py-4 px-2 shadow rounded-4">
                <i className="fa-solid fa-user-group"></i>
                <h6>Team Augmentation</h6>
                <p>
                  Add expert Laravel/Vue developers to your team for ongoing
                  projects.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-10 mx-auto">
              <div className="service-card text-center py-4 px-2 shadow rounded-4">
                <i className="fa-solid fa-gear"></i>
                <h6>Custom SaaS Solutions</h6>
                <p>
                  Build your own SaaS product with end-to-end architecture and
                  support.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-10 mx-auto">
              <div className="service-card text-center py-4 px-2 shadow rounded-4">
                <i className="fa-solid fa-arrow-up-right-dots"></i>
                <h6>Technical Consulting</h6>
                <p>
                  Get guidance on architecture, scaling strategy, and team
                  planning.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="container-fluid about-section py-4">
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <h2 className="my-3 fw-bold">About ARM Logics</h2>
                <p className="fw-semibold">
                  Over 8 years of experience building modern web applications,
                  long-term team augmentation, and scalable software solutions.
                </p>
                <span className="badge p-2 me-2">Experience</span>
                <span className="badge p-2 me-2">Long-term</span>
                <span className="badge p-2">Team</span>
              </div>

              <div className="col-sm-6">
                <div className="my-4">
                  <div className="p-3 bg-white rounded-4 shadow-sm mb-3">
                    <h6 className="fw-bold">Project One</h6>
                    <p>Project development - Experimentation</p>
                    <span className="badge p-2 me-2">Laravel</span>
                    <span className="badge p-2 me-2">Vue</span>
                  </div>
                  <div className="p-3 bg-white rounded-4 shadow-sm">
                    <h6 className="fw-bold">Project Two</h6>
                    <p>Project management - Automation</p>
                    <span className="badge p-2 me-2">Next</span>
                    <span className="badge p-2 me-2">MySQL</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container py-5 mb-5">
          <div className="row testimonial align-items-center justify-content-between">
            <div className="col-sm-5 mb-4 col-10 mx-auto mb-sm-0">
              <h3 className="fw-bold">Testimonials</h3>
              <div className="row">
                <div className="col-1 d-flex justify-content-center">
                  <i className="fa-solid fa-quote-right"></i>
                </div>
                <div className="col-11 d-flex justify-content-start">
                  <p>
                    <strong> ARM Logics</strong> exceeded our expectations with
                    their expertise and professionalism.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-10 mx-auto testimonial-card p-4 rounded shadow-sm">
              <p>
                <strong>
                  "ARM Logics exceeded our expectations with their expertise and
                  professionalism."
                </strong>
              </p>
              <p className="mb-0 fw-medium">John Doe</p>
            </div>
          </div>
        </section>

        <section className="container-fluid p-4 cta">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 mt-2">
                <h3 className="fw-bold"> Let's Talk About Your Idea</h3>
              </div>
              <div className="col-sm-6 col-5 mx-auto d-flex mt-2 justify-content-end">
                <button
                  className="btn px-3 fw-medium"
                  data-bs-toggle="modal"
                  data-bs-target="#contactModal"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </section>

      
    </div>
  );
}
