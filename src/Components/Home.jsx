import { useRef, useEffect, useState } from 'react';
import '../Home.css';
import { useNavigate } from 'react-router-dom';
import '../HeroCard.css';
const Home =({ setActiveSection })=>{
const [animate, setAnimate] = useState(false);
const navigate = useNavigate();

  const cardRef = useRef();

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -(y - centerY) / 20;
    const rotateY = (x - centerX) / 20;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    card.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
  };
  useEffect(() => {
    setAnimate(true); // Trigger animation once when component mounts
  }, []);

return[
    <div className="home container">
      {/* Hero Section */}
    <section className="hero-container">
      <div
        className="hero-card-3d"
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <h1 className="hero-title">Hi, I'm Shravit 👋</h1>
        <p className="hero-subtitle">A passionate Full Stack Developer & Designer</p>
        <button
          className="hero-button"
          onClick={() => navigate('/projects')}
        >
          Explore My Work
        </button>
      </div>
    </section>


      {/* Features / Highlights */}
     <section className="row text-center g-4 my-5 bg-s">
  <div className="col-md-4  skills-wrapper">
    <div className="p-4 border rounded  text-white h-100 shadow skill-card">
      <div className="mb-3">
        <i className="bi bi-laptop fs-1"></i> {/* Bootstrap Icons */}
      </div>
      <h4 className="fw-bold">Frontend</h4>
      <p className="text-white">React, Webflow, HTML, CSS, JavaScript</p>
    </div>
  </div>
  <div className="col-md-4  skills-wrapper">
    <div className="p-4 border rounded  text-white h-100 shadow skill-card">
      <div className="mb-3">
        <i className="bi bi-hdd-network fs-1"></i>
      </div>
      <h4 className="fw-bold">Backend</h4>
      <p className="text-white">Node.js, Express, MongoDB</p>
    </div>
  </div>
  <div className="col-md-4  skills-wrapper">
    <div className="p-4 border rounded  text-white h-100 shadow skill-card">
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
