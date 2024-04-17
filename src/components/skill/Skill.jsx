import "./Skill.css";

const Skill = ({ skill, emoji, color }) => {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>{emoji} </span>
    </div>
  );
};

export default Skill;
