export default function About() {
  return (
    <div>
      <main className="about container p-5 mt-4">
        <section className="text-start my-5">
          <h1 className="fw-bold display-5 mt-5">About Us</h1>
          <p className="fs-5 fw-medium">
            We are dedicated to providing exceptional solutions to <br className="d-none d-md-block" />
            help businesses succeed and grow.
          </p>

          <div className="row mt-5">
            <div className="col-md-6">
              <div className="px-5 py-4 rounded-3 shadow-sm mission">
                <h4 className="fw-bold mb-3">Our Mission</h4>
                <p className="mb-0 text-muted">
                  Duis sute irure dolor in reprehenderit in <br />
                  voluptate velit esse cillum dolore eu <br />
                  fugiat nulla pariatur.
                </p>
              </div>
            </div>
            <div className="col-md-6 mb-5">
              <div className="px-5 py-4 rounded-3 shadow-sm vision">
                <h4 className="fw-bold mb-3">Our Vision</h4>
                <p className="mb-0 text-muted">
                  Excepteur sint accaecat cupidatat non <br />
                  proident, sunt in culpa qui officia <br />
                  deserunt.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold mb-4">Our Story</h2>
          <div className="row align-items-center mb-5 g-3">
            <div className="col-auto px-4">
              <div className="story text-white p-4 rounded-circle d-flex align-items-center justify-content-center fs-5">
                <i className="fa-solid fa-rocket"></i>
              </div>
            </div>
            <div className="col">
              <p className="fs-5 pe-5">
                Founded in 2018, ARM Logics has grown from a small startup to a trusted partner for businesses around the world.
                With a passion for technology and innovation, we strive to stive a lasting impact on our clients’ success.
              </p>
            </div>
          </div>

          <div className="row text-center rounded-4 gy-2 p-4 time-line">
            <div className="col-lg-4 col-sm-6 col-12 mb-2">
              <h3 className="fw-bold">2016</h3>
              <p className="mb-0">Company founded</p>
            </div>
            <div className="col-lg-4 col-sm-6 col-12">
              <h3 className="fw-bold">2019</h3>
              <p className="mb-0">Expanded our team</p>
            </div>
            <div className="col-lg-4 col-sm-6 col-12 mx-auto">
              <h3 className="fw-bold">2022</h3>
              <p className="mb-0">Served 100+ clients</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="fw-bold my-3">What Sets Us Apart</h2>
          <p className="fs-5 text-muted mb-4">
            At ARM Logics, we believe in the power of technology to transform businesses and drive success.
            Our commitment to excellence and innovation fuels our passion for helping.
          </p>
        </section>
      </main>
    </div>
  );
}
