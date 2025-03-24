import "./Home.css";

export default function Home() {
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      };
  return (
    <section className="home-container">
       <div className="content-left">
        <h1 className="home-heading">Ntandoyenkosi Magana</h1>
        <p>Full stack Developer based in
            Johannesburg, South Africa.
        </p>

        <div className="action-btns">
          <button className="about-me-btn"  onClick={() => scrollToSection("about")}>About Me</button>
          <button className="projects-btn" onClick={() => scrollToSection("projects")}>Projects</button>
        </div>
      </div>

      <div className="content-right">
        <img src="/bwpp.jpg" alt="Profile" className="profile-image" />
      </div>

      <div className="icons-container">
        <a href="https://www.linkedin.com/in/ntandoyenkosi-magana" className="icon" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-linkedin"></i>
        </a>
        <a href="https://github.com/ntandomagana" className="icon" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-github"></i> 
        </a>
        <a href="https://codepen.io/ntandomagana" className="icon" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-codepen"></i> 
        </a>
      </div>
    </section>
  );
}
