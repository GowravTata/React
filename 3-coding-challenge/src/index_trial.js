import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  const style = { width: 200, height: 200 };
  // const style = {}
  return (
    <div className="avatar">
      <img style={style} src="photo.jpg" alt="passport" />
    </div>
  );
}
const allSkills = ["JavaScript", "React"];
function Intro() {
  const intro = `Full Stack Developer with Skills as ${[
    ...allSkills,
  ]} with a focus of bachelors in Mechanical Engineering`;
  return (
    <div>
      <h2>{"Gowrav Tata"}</h2>
      <p>{intro}</p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <h4 className="skill">{allSkills[0]}</h4>
      <h4 className="skill">{allSkills[1]}</h4>
    </div>
  );
}
// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);

// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
