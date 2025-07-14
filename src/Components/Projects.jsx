import '../Project.css'
import portimge from '../11670022.jpg'
import ecomimage from '../6505894.jpg'
import newsimge from '../22841.jpg'
const projects = [
  {
    title: 'Create A Game Website',
    description: 'A personal website built using React and Bootstrap to showcase my work and skills.',
    image: portimge,
    link: 'https://gamox.vercel.app/',
    code: 'https://github.com/shravit12/Gamox.git'
  },
  {
    title: 'Saloon website',
    description: 'A full-stack MERN store with product listings, cart, and Stripe payment integration.',
    image: ecomimage,
    link: 'https://your-store-link.com',
    code: 'https://github.com/yourusername/ecommerce-store'
  }

];


const Projects = () => {
  return [
    <div className="projects container py-5">
      <h1 className="text-white fw-bold mb-4 text-center">My Projects</h1>
      <div className="row g-4">
        {projects.map((project, index) => (
          <div className="col-md-4" key={index}>
            <div className="card bg-dark text-white h-100 shadow-sm">
              <img src={project.image} className="card-img-top" alt={project.title} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text flex-grow-1">{project.description}</p>
                <div className="mt-3 d-flex justify-content-between">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-outline-light btn-sm">Live</a>
                  <a href={project.code} target="_blank" rel="noopener noreferrer" className="btn btn-outline-secondary btn-sm">Code</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  ]
};
export default Projects;
