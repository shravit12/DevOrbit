import '../Contact.css';

const Contact = () => {
  return (
    <div className="contact container py-5">
      <h1 className="text-white fw-bold mb-4 text-center">Contact Me</h1>
      <div className="row">
        {/* Contact Info */}
        <div className="col-md-6 mb-4 text-white">
          <h5>Let's connect 👋</h5>
          <p>Email: <a href="mailto:your@email.com" className="text-info">your@email.com</a></p>
          <p>Location: Your City, Your Country</p>
          <p>
            Follow me:
            <br />
            <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" className="text-light me-3">GitHub</a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer" className="text-light me-3">LinkedIn</a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noreferrer" className="text-light">Twitter</a>
          </p>
        </div>

        {/* Contact Form */}
        <div className="col-md-6">
          <form
            className="bg-dark text-white p-4 rounded shadow"
            action="https://formsubmit.co/ee4212e6b3f8fccc5ff82ec50063359b"
            method="POST"
          >
            {/* Hidden fields */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_next" value="https://yourwebsite.com/thank-you" />

            <div className="mb-3">
              <label htmlFor="name" className="form-label">Your Name</label>
              <input type="text" className="form-control" id="name" name="name" placeholder="Enter name" required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" name="email" className="form-control" id="email" placeholder="name@example.com" required />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" name="message" rows="4" placeholder="Write your message..." required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
