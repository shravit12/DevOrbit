import '../About.css';
import avtar from '../3551739.jpg'
const About =()=>{
return[
    <div className="about container py-5">
      <div className="row align-items-center">
        {/* Text Content */}
        <div className="col-md-7 text-white">
          <h1 className="fw-bold mb-3">About Me</h1>
          <p className="text-secondary text-white">
            I'm <strong>Shravit Sharma</strong>, a full-stack developer passionate about building
            web apps with modern UI and high performance. I love working with React, Node.js, and creating seamless user experiences.
          </p>
          <p className="text-secondary text-white">
            My goal is to help businesses and individuals bring their ideas to life with clean design and scalable code.
          </p>

          <ul className="list-unstyled mt-4 text-white">
            <li className='text-white'>💻 Languages: JavaScript, HTML, CSS</li>
            <li className='text-white'>⚙️ Tools: React, Node.js, Bootstrap, Webflow</li>
            <li className='text-white'>🎨 Design: Figma, Canva, Adobe XD</li>
          </ul>
        </div>

        {/* Optional Image or Avatar */}
        <div className="col-md-5 text-center mt-4 mt-md-0">
          <img
            src={avtar}
            alt="Shravit Avatar"
            className="img-fluid rounded-circle shadow"
              style={{
    width: 'clamp(90px, 40vw, 200px)', // Responsive width
    height: 'clamp(90px, 40vw, 200px)',
    borderRadius: '50%',
    objectFit: 'cover',
  }}
          />
        </div>
      </div>
    </div>
]
}
export default About;