export default function Projects() {
  return (
    <div>
      <main className="project mt-5">
        <section className="py-5 container">
          <div className="container">
            <h1 className="fw-bold display-5 text-center">Projects</h1>
            <p className="fw-medium mb-5 text-center">
              Here are some of the projects we have worked on.
            </p>

            <div className="row g-5 ">
              <div className="col-md-6 col-sm-5 col-11 mx-auto  ">
                <div className="project-card h-100 shadow border-0 p-3 border ">
                  <div className="project-img-placeholder bg-light d-flex align-items-center justify-content-center">
                    <i className="fa-solid fa-image"></i>
                  </div>
                  <div className="card-body p-3">
                    <h5 className="card-title my-2 fw-bold">Indymandi</h5>
                    <p className="card-text text-muted">
                      A marketplace platform enabling independent vendors to
                      sell products online.
                    </p>
                    <div className="d-flex flex-wrap gap-2 mt-2">
                      <span className="p-badge">Laravel</span>
                      <span className="p-badge">Vue</span>
                      <span className="p-badge">Tailwind</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-sm-5 col-11 mx-auto ">
                <div className="project-card h-100 shadow border-0 p-3 border ">
                  <div className="project-img-placeholder bg-light d-flex align-items-center justify-content-center">
                    <i className="fa-solid fa-image"></i>
                  </div>
                  <div className="card-body p-2">
                    <h5 className="card-title my-2 fw-bold">ABCA</h5>
                    <p className="card-text text-muted">
                      An educational website offering resources and tools for
                      students and teachers.
                    </p>
                    <div className="d-flex flex-wrap gap-2 mt-2">
                      <span className="p-badge">Laravel</span>
                      <span className="p-badge">Vue</span>
                      <span className="p-badge">Tailwind</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-sm-5 col-11 mx-auto ">
                <div className="project-card h-100 shadow border-0 p-3 border">
                  <div className="project-img-placeholder bg-light d-flex align-items-center justify-content-center">
                    <i className="fa-solid fa-image"></i>
                  </div>
                  <div className="card-body p-2">
                    <h5 className="card-title my-2 fw-bold">Peektrack</h5>
                    <p className="card-text text-muted">
                      A SaaS application for tracking and analyzing user
                      interactions on websites.
                    </p>
                    <div className="d-flex flex-wrap gap-2 mt-2">
                      <span className="p-badge">Laravel</span>
                      <span className="p-badge">Vue</span>
                      <span className="p-badge">Tailwind</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-sm-5 col-11 mx-auto ">
                <div className="project-card h-100 shadow border-0 p-3 border">
                  <div className="project-img-placeholder bg-light d-flex align-items-center justify-content-center">
                    <i className="fa-solid fa-image"></i>
                  </div>
                  <div className="card-body p-2">
                    <h5 className="card-title my-2 fw-bold">DevOps Platform</h5>
                    <p className="card-text text-muted">
                      A complete deployment & monitoring tool tailored for
                      enterprise apps and microservices.
                    </p>
                    <div className="d-flex flex-wrap gap-2 mt-2">
                      <span className="p-badge">Laravel</span>
                      <span className="p-badge">Vue</span>
                      <span className="p-badge">Tailwind</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container-fluid cta text-center py-5 mt-5">
          <div className="container">
            <h2 className="fw-bold mb-3 fs-1">Let’s talk about your project</h2>
            <p className="mb-4 text-white">
              We would love to hear about your project and how we help.
            </p>
            <button
              className="btn px-3 fw-medium"
              data-bs-toggle="modal"
              data-bs-target="#contactModal"
            >
              Contact Us
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
