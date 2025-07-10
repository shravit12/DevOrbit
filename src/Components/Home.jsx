import { useEffect, useState } from 'react';
import '../Home.css';
import { useNavigate } from 'react-router-dom';

const Home =({ setActiveSection })=>{
const [animate, setAnimate] = useState(false);
const navigate = useNavigate();

  useEffect(() => {
    setAnimate(true); // Trigger animation once when component mounts
  }, []);

return[
    <div className="home container">
      {/* Hero Section */}
     <section className="text-center my-5 glow-box position-relative overflow-hidden">
  {/* Gradient Background Layer */}
  <div className="glow-grad glow-box position-absolute top-0 start-0 w-100 h-100"></div>

  {/* Text Content Layer */}
  <div className="position-relative">
    <h1
      className={`display-4 glow-animate fw-bold text-light animated-text ${
        animate ? 'animate-on-load' : ''
      }`}
    >
      Hi, I'm Shravit 👋
    </h1>
    <p className="lead text-white">A passionate Full Stack Developer & Designer</p>
    <button
      className="btn btn-outline-light mt-3"
      onClick={() => navigate('/projects')}
    >
      Explore My Work
    </button>
  </div>
</section>


      {/* Features / Highlights */}
     <section className="row text-center g-4 my-5">
  <div className="col-md-4">
    <div className="p-4 border rounded bg-gradient text-white h-100 shadow skill-card">
      <div className="mb-3">
        <i className="bi bi-laptop fs-1"></i> {/* Bootstrap Icons */}
      </div>
      <h4 className="fw-bold">Frontend</h4>
      <p className="text-white">React, Webflow, HTML, CSS, JavaScript</p>
    </div>
  </div>
  <div className="col-md-4">
    <div className="p-4 border rounded bg-gradient text-white h-100 shadow skill-card">
      <div className="mb-3">
        <i className="bi bi-hdd-network fs-1"></i>
      </div>
      <h4 className="fw-bold">Backend</h4>
      <p className="text-white">Node.js, Express, MongoDB</p>
    </div>
  </div>
  <div className="col-md-4">
    <div className="p-4 border rounded bg-gradient text-white h-100 shadow skill-card">
      <div className="mb-3">
        <i className="bi bi-palette fs-1"></i>
      </div>
      <h4 className="fw-bold">UI/UX Design</h4>
      <p className="text-white">Figma, clean & modern design</p>
    </div>
  </div>
</section>


      {/* Call to Action */}
      <section className="text-center my-5">
        <h2 className="text-light">Want to collaborate or need a project?</h2>
        <button className="btn btn-primary mt-3"  onClick={() => navigate('/contact')}>Contact Me</button>
      </section>
    </div>
]
}
export default Home;
