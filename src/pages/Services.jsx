export default function Services() {
  return (
    <div>
      <main className="container services mt-5">
        <section className="py-5 mt-5" id="services">
          <div className="container text-center">
            <h1 className="fw-bold mb-2">Our Services</h1>
            <p className="text-muted mb-5 fw-medium">
              We offer a range of services to help businesses succeed.
            </p>

            <div className="row g-4">
              <div className="col-md-6">
                <div className="p-4 border rounded-4 text-start h-100">
                  <i className="fa-solid fa-code fs-3 text-orange mb-3"></i>
                  <h5 className="fw-bold">Web Development</h5>
                  <p className="text-muted">
                    Building robust and scalable web applications using Laravel and other modern frameworks.
                  </p>
                </div>
              </div>

              <div className="col-md-6">
                <div className="p-4 border rounded-4 text-start h-100">
                  <i className="fa-solid fa-credit-card fs-3 text-orange mb-3"></i>
                  <h5 className="fw-bold">Frontend Development</h5>
                  <p className="text-muted">
                    Crafting responsive and interactive frontend systems with Vue.js and cutting-edge technologies.
                  </p>
                </div>
              </div>

              <div className="col-md-6">
                <div className="p-4 border rounded-4 text-start h-100">
                  <i className="fa-solid fa-users fs-3 text-orange mb-3"></i>
                  <h5 className="fw-bold">Team Augmentation</h5>
                  <p className="text-muted">
                    Providing experienced developers to augment your existing team and accelerate your projects.
                  </p>
                </div>
              </div>

              <div className="col-md-6">
                <div className="p-4 border rounded-4 text-start h-100">
                  <i className="fa-solid fa-lightbulb fs-3 text-orange mb-3"></i>
                  <h5 className="fw-bold">Technical Consulting</h5>
                  <p className="text-muted">
                    Offering expert advice and solutions to tackle complex technical challenges and optimize your systems.
                  </p>
                </div>
              </div>
            </div>

            <div className="cta mt-5 p-5 rounded-4 text-white d-flex flex-column flex-md-row justify-content-between align-items-center">
              <div>
                <h3 className="fw-bold">Let’s Build Something Great Together</h3>
                <p className="mt-3 text-white">Get in touch with us to discuss your project requirements.</p>
              </div>
              <a
                href="#contact"
                className="btn btn-light text-orange fw-semibold px-4 py-2 rounded-3 mt-sm-4"
                data-bs-toggle="modal"
                data-bs-target="#contactModal"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
