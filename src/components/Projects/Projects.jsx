
import './Projects.css';
export default function Projects(){

    const projects = [
        { id: 1, title: "Speak Easy", description: "This is a teaching english platform where students can sign up and get to book teachers from the platform.", image: "/images/footy-addicts.png", url: "https://github.com/ntandomagana/speak-easy" },
        { id: 2, title: "Football Addicts", description: "This is a webiste where sports lovers can book a venue and play their favorite sports.", image: "/images/footy-addicts.png", url: "https://github.com/ntandomagana/football-addicts" },
        { id: 3, title: "Project Three", description: "This is my third project description.", image: "./images/footy-addicts.png", url: "https://github.com/ntandomagana/football-addicts" }
    ]

    return (
        <section id="projects" className="projects">
            <div className="projects-header">
                <div className="icon-container">
                    <span className="code-icon"><i className="bi bi-code-slash"></i></span>
                </div>
                <h2>My Projects</h2>
                <p>Check out some of the projects I’ve worked on.</p>
            </div>

            <div className="projects-container">
            {projects.map((project, index) => (
          <div key={project.id} className={`project ${index % 2 === 0 ? 'image-right' : 'image-left'}`}>
            <div className="project-description">
              <h3>
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-title">{project.title}</a>
              </h3>
              <p>{project.description}</p>
            </div>
            <img src={project.image} alt={project.title} className="project-image" />
          </div>
                ))}
            </div>
        </section>
    );
    
}