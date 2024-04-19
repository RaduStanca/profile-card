import "./Skill.css";

const Skill = ({ skill, level, color }) => {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>{level === "advanced" && "💪"}</span>
      <span>{level === "beginner" && "👶"}</span>
    </div>
  );
};

export default Skill;
