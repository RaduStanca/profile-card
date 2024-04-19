import "./SkillList.css";
import Skill from "../components/skill/Skill";

const skills = [
  {
    skill: "HTML",
    level: "advanced",
    color: "#ff0000",
  },

  {
    skill: "CSS",
    level: "advanced",
    color: "#0000ff",
  },

  {
    skill: "JavaScript",
    level: "beginner",
    color: "#FFFF00",
  },

  {
    skill: "Git+GitHub",
    level: "advanced",
    color: "#808080",
  },

  {
    skill: "React",
    level: "beginner",
    color: "#00b4ff",
  },
];

const SkillList = () => {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill.skill} level={skill.level} color={skill.color} />
      ))}
    </div>
  );
};

export default SkillList;
