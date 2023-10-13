import { React } from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

const skills = [
  {
    skill: "Python",
    level: "Advanced",
    color: "#33e854"
  },
  {
    skill: "JavaScript",
    level: "Intermediate",
    color: "#3342e8"
  },
  {
    skill: "React",
    level: "Beginner",
    color: "#E84F33"
  },
  {
    skill: "HTML-CSS",
    level: "Beginner",
    color: "#60DAFB"
  },
  {
    skill: "Bash",
    level: "Intermediate",
    color: "#5c6263"
  },
  {
    skill: "Docker",
    level: "Advanced",
    color: "#605c63"
  }
]

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="photo.jpg" alt="Gowrav Tata" />;
}

function Intro() {
  return (
    <div>
      <h1>Gowrav Tata</h1>
      <p>Full-stack web developer with skilled in python.</p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <ul className="skill-list">
        {skills.map((skill) => (<Skill skill={skill.skill} color={skill.color} level={skill.level} key={skill.skill} />))}
      </ul>
    </div>
  );
}

function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {/* The below is done using short circuiting to get the emoji, it 
        checks for the condition of the level and emoji is decided */}
        {level === 'Advanced' && "💪"}
        {level === 'Intermediate' && "👍"}
        {level === 'Beginner' && "👶"}
      </span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);