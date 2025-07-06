import '../Contact.css'

const Contact =()=>{
return[
   <div className="contact container py-5">
      <h1 className="text-white fw-bold mb-4 text-center">Contact Me</h1>
      <div className="row">
        {/* Contact Info */}
        <div className="col-md-6 mb-4 text-white">
          <h5>Let's connect 👋</h5>
          <p>Email: <a href="mailto:you@example.com" className="text-info">you@example.com</a></p>
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
          <form className="bg-dark text-white p-4 rounded shadow" action="https://formsubmit.co/el/vusudu" method="POST" >
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Your Name</label>
              <input type="text" className="form-control" id="name" name="name" placeholder="Enter name" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" name="email" className="form-control" id="email" placeholder="name@example.com" />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
             <textarea className="form-control" id="message" name="message" rows="4" placeholder="Write your message..."></textarea>

            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </div>
]
}
export default Contact;
