export default function Contact() {
  return (
    <div>
      <main className="container mt-5 contact">
        <section id="contact" className="py-5">
          <div className="container mt-5">
            <div className="row mb-4">
              <div className="col-lg-8">
                <h1 className="fw-bold">Contact Us</h1>
                <p className="text-muted fw-medium">
                  Have a question or need assistance? Fill out the form or contact us directly.
                </p>
              </div>
            </div>

            <div className="row g-4">
              <div className="col-lg-7 col-11 mx-auto">
                <form className="p-4 rounded-3 contact-form">
                  <div className="mb-3">
                    <label htmlFor="contactName" className="form-label text-muted">
                      Your Name
                    </label>
                    <input
                      type="text"
                      className="form-control custom-input"
                      id="contactName"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="contactEmail" className="form-label text-muted">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="form-control custom-input"
                      id="contactEmail"
                      placeholder="XYZ@example.com"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="contactMessage" className="form-label text-muted">
                      Your Message
                    </label>
                    <textarea
                      className="form-control custom-input"
                      id="contactMessage"
                      rows="4"
                      placeholder="Write your message..."
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-orange">
                    Send
                  </button>
                </form>
              </div>

              <div className="col-lg-5 col-11 mx-auto">
                <div className="bg-white p-4 rounded-3 shadow">
                  <div className="d-flex align-items-start mb-4">
                    <div className="icon-box me-3 p-3 rounded-circle d-flex align-items-center justify-content-center">
                      <i className="fa-solid fa-envelope p-2"></i>
                    </div>
                    <div>
                      <h6 className="fw-bold mb-1">Email</h6>
                      <p className="mb-0 text-muted">info@armlogics.com</p>
                    </div>
                  </div>

                  <hr className="border-1 border-top border-orange opacity-100 my-3" />

                  <div className="d-flex align-items-start">
                    <div className="icon-box me-3 p-3 rounded-circle d-flex align-items-center justify-content-center">
                      <i className="fa-solid fa-phone p-2"></i>
                    </div>
                    <div>
                      <h6 className="fw-bold mb-1">Phone</h6>
                      <p className="mb-0 text-muted">+123-456-7890</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
