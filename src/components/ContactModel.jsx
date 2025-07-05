export default function ContactModel() {
  return (
    <div>
      <div className="overlay" id="navOverlay"></div>

      <div className="modal fade" id="contactModal" tabIndex="-1" aria-labelledby="contactModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content contact-modal p-4">
            <div className="modal-header border-0">
              <h1 className="modal-title fw-bold text-orange" id="contactModalLabel">Let's Talk</h1>
              <button type="button" className="btn-close shadow-none" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="contactName" className="form-label text-muted">Your Name</label>
                  <input type="text" className="form-control custom-input" id="contactName" placeholder="Name" />
                </div>
                <div className="mb-3">
                  <label htmlFor="contactEmail" className="form-label text-muted">Email Address</label>
                  <input type="email" className="form-control custom-input" id="contactEmail" placeholder="XYZ@example.com" />
                </div>
                <div className="mb-3">
                  <label htmlFor="contactMessage" className="form-label text-muted">Your Message</label>
                  <textarea className="form-control custom-input" id="contactMessage" rows="4" placeholder="Write your message..."></textarea>
                </div>
                <button type="submit" className="btn btn-orange w-100 mt-3">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
