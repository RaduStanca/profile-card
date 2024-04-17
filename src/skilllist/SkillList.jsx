import "./SkillList.css";
import Skill from "../components/skill/Skill";

const SkillList = () => {
  return (
    <div>
      <Skill skill="React" emoji="🙏" color="#00b4ff" />
      <Skill skill="JavaScript" emoji="💪" color="#FFFF00" />
      <Skill skill="Html" emoji="💪" color="#ff0000" />
      <Skill skill="Css" emoji="💪" color="#0000ff" />
      <Skill skill="Git+GitHub" emoji="💪" color="#808080" />
    </div>
  );
};

export default SkillList;
