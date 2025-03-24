import "./Skills.css";
import {
  FaReact,
  FaNodeJs,
  FaGitSquare,
  FaHtml5,
  FaCss3Alt,
  FaJava,
} from "react-icons/fa";
import {
  SiAngular,
  SiTypescript,
  SiTailwindcss,
  SiBootstrap,
  SiJavascript,
  SiExpress,
  SiSpring,
} from "react-icons/si";


export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-heading">My Skills</h2>
      <div className="skills-container">
        <div className="skill">
          <FaReact size={50} color="#61dafb" />
          <p>React</p>
        </div>
        <div className="skill">
          <FaNodeJs size={50} color="#3C873A" />
          <p>Node.js</p>
        </div>
        <div className="skill">
          <SiExpress size={50} color="#000000" />
          <p>Express.js</p>
        </div>
        <div className="skill">
          <SiSpring size={50} color="#6DB33F" />
          <p>Spring Boot</p>
        </div>
        <div className="skill">
          <FaJava size={50} color="#f89820" />
          <p>Java</p>
        </div>
        <div className="skill">
          <FaGitSquare size={50} color="#f14e32" />
          <p>Git</p>
        </div>
        <div className="skill">
          <SiAngular size={50} color="#dd1b16" />
          <p>Angular</p>
        </div>
        <div className="skill">
          <SiJavascript size={50} color="#f7df1e" />
          <p>JavaScript</p>
        </div>
        <div className="skill">
          <SiTypescript size={50} color="#3178C6" />
          <p>TypeScript</p>
        </div>
        <div className="skill">
          <SiTailwindcss size={50} color="#38BDF8" />
          <p>Tailwind CSS</p>
        </div>
        <div className="skill">
          <SiBootstrap size={50} color="#563d7c" />
          <p>Bootstrap</p>
        </div>
        <div className="skill">
          <FaHtml5 size={50} color="#e34f26" />
          <p>HTML5</p>
        </div>
        <div className="skill">
          <FaCss3Alt size={50} color="#1572B6" />
          <p>CSS3</p>
        </div>
      </div>
    </section>
  );
}
