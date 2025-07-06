import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ← Import navigate
import '../Home.css';

const Home = () => {
  const [animate, setAnimate] = useState(false);
  const navigate = useNavigate(); // ← Create navigate function

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className="home container">
      {/* Hero Section */}
      <section className="text-center my-5">
        <h1 className={`display-4 fw-bold text-light animated-text ${animate ? 'animate-on-load' : ''}`}>
          Hi, I'm Shravit 👋
        </h1>
        <p className="lead text-secondary text-white">A passionate Full Stack Developer & Designer</p>
        <button
          className="btn btn-outline-light mt-3"
          onClick={() => navigate('/projects')} // ← Route to projects
        >
          Explore My Work
        </button>
      </section>

      {/* Features / Highlights */}
      <section className="row text-center g-4 my-5">
        <div className="col-md-4">
          <div className="p-4 border rounded bg-dark text-white h-100">
            <h4>Frontend</h4>
            <p>React, Webflow, HTML, CSS, JavaScript</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="p-4 border rounded bg-dark text-white h-100">
            <h4>Backend</h4>
            <p>Node.js, Express, MongoDB</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="p-4 border rounded bg-dark text-white h-100">
            <h4>UI/UX Design</h4>
            <p>Figma, Adobe XD, clean & modern design</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center my-5">
        <h2 className="text-light">Want to collaborate or need a project?</h2>
        <button
          className="btn btn-primary mt-3"
          onClick={() => navigate('/contact')} // ← Route to contact
        >
          Contact Me
        </button>
      </section>
    </div>
  );
};

export default Home;
